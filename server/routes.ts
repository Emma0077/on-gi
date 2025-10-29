import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNotificationSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/notifications", async (req, res) => {
    try {
      const validationResult = insertNotificationSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: validationError.message 
        });
      }

      const notification = await storage.createNotification(validationResult.data);
      
      return res.status(201).json(notification);
    } catch (error) {
      console.error("Failed to create notification:", error);
      return res.status(500).json({ 
        error: "Failed to save notification" 
      });
    }
  });

  app.get("/api/notifications", async (req, res) => {
    try {
      const notificationsList = await storage.getNotifications();
      return res.json(notificationsList);
    } catch (error) {
      console.error("Failed to get notifications:", error);
      return res.status(500).json({ 
        error: "Failed to retrieve notifications" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
