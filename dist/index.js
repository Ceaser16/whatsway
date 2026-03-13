var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  DEFAULT_PERMISSIONS: () => DEFAULT_PERMISSIONS,
  PERMISSIONS: () => PERMISSIONS,
  aiSettings: () => aiSettings,
  analytics: () => analytics,
  apiLogs: () => apiLogs,
  automationEdges: () => automationEdges,
  automationEdgesRelations: () => automationEdgesRelations,
  automationExecutionLogs: () => automationExecutionLogs,
  automationExecutionLogsRelations: () => automationExecutionLogsRelations,
  automationExecutions: () => automationExecutions,
  automationExecutionsRelations: () => automationExecutionsRelations,
  automationNodes: () => automationNodes,
  automationNodesRelations: () => automationNodesRelations,
  automations: () => automations,
  automationsRelations: () => automationsRelations,
  campaignRecipients: () => campaignRecipients,
  campaignRecipientsRelations: () => campaignRecipientsRelations,
  campaigns: () => campaigns,
  campaignsRelations: () => campaignsRelations,
  channels: () => channels,
  channelsRelations: () => channelsRelations,
  chatbots: () => chatbots,
  contacts: () => contacts,
  contactsRelations: () => contactsRelations,
  conversationAssignments: () => conversationAssignments,
  conversationAssignmentsRelations: () => conversationAssignmentsRelations,
  conversations: () => conversations,
  conversationsRelations: () => conversationsRelations,
  firebaseConfig: () => firebaseConfig,
  groups: () => groups,
  insertAnalyticsSchema: () => insertAnalyticsSchema,
  insertApiLogSchema: () => insertApiLogSchema,
  insertAutomationExecutionLogSchema: () => insertAutomationExecutionLogSchema,
  insertAutomationExecutionSchema: () => insertAutomationExecutionSchema,
  insertAutomationNodeSchema: () => insertAutomationNodeSchema,
  insertAutomationSchema: () => insertAutomationSchema,
  insertCampaignRecipientSchema: () => insertCampaignRecipientSchema,
  insertCampaignSchema: () => insertCampaignSchema,
  insertChannelSchema: () => insertChannelSchema,
  insertContactSchema: () => insertContactSchema,
  insertConversationAssignmentSchema: () => insertConversationAssignmentSchema,
  insertConversationSchema: () => insertConversationSchema,
  insertMessageQueueSchema: () => insertMessageQueueSchema,
  insertMessageSchema: () => insertMessageSchema,
  insertNotificationSchema: () => insertNotificationSchema,
  insertSiteSchema: () => insertSiteSchema,
  insertTemplateSchema: () => insertTemplateSchema,
  insertUserActivityLogSchema: () => insertUserActivityLogSchema,
  insertUserSchema: () => insertUserSchema,
  insertWebhookConfigSchema: () => insertWebhookConfigSchema,
  insertWhatsappChannelSchema: () => insertWhatsappChannelSchema,
  knowledgeArticles: () => knowledgeArticles,
  knowledgeCategories: () => knowledgeCategories,
  messageQueue: () => messageQueue,
  messages: () => messages,
  messagesRelations: () => messagesRelations,
  notifications: () => notifications,
  otpVerifications: () => otpVerifications,
  panelConfig: () => panelConfig,
  paymentProviders: () => paymentProviders,
  plans: () => plans,
  sentNotifications: () => sentNotifications,
  session: () => session,
  sites: () => sites,
  smtpConfig: () => smtpConfig,
  storageSettings: () => storageSettings,
  subscriptions: () => subscriptions,
  supportTickets: () => supportTickets,
  supportTicketsRelations: () => supportTicketsRelations,
  templates: () => templates,
  templatesRelations: () => templatesRelations,
  ticketMessages: () => ticketMessages,
  ticketMessagesRelations: () => ticketMessagesRelations,
  ticketPriorityEnum: () => ticketPriorityEnum,
  ticketStatusEnum: () => ticketStatusEnum,
  trainingData: () => trainingData,
  transactions: () => transactions,
  userActivityLogs: () => userActivityLogs,
  userActivityLogsRelations: () => userActivityLogsRelations,
  userTypeEnum: () => userTypeEnum,
  users: () => users,
  usersRelations: () => usersRelations,
  webhookConfigs: () => webhookConfigs,
  whatsappChannels: () => whatsappChannels
});
import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  varchar,
  timestamp,
  integer,
  boolean,
  jsonb,
  index,
  unique,
  numeric,
  pgEnum,
  serial,
  uuid
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
var users, conversationAssignments, userActivityLogs, contacts, campaigns, campaignRecipients, channels, templates, session, conversations, messages, notifications, sentNotifications, chatbots, trainingData, knowledgeCategories, knowledgeArticles, plans, paymentProviders, subscriptions, transactions, ticketStatusEnum, ticketPriorityEnum, userTypeEnum, supportTickets, ticketMessages, supportTicketsRelations, ticketMessagesRelations, automations, automationNodes, automationEdges, automationExecutions, automationExecutionLogs, analytics, whatsappChannels, webhookConfigs, messageQueue, apiLogs, panelConfig, groups, firebaseConfig, storageSettings, aiSettings, sites, smtpConfig, otpVerifications, PERMISSIONS, DEFAULT_PERMISSIONS, insertUserSchema, insertContactSchema, insertCampaignSchema, insertChannelSchema, insertTemplateSchema, insertConversationSchema, insertMessageSchema, insertAutomationSchema, insertAutomationNodeSchema, insertAutomationExecutionSchema, insertAutomationExecutionLogSchema, insertAnalyticsSchema, insertWhatsappChannelSchema, insertWebhookConfigSchema, insertMessageQueueSchema, insertApiLogSchema, insertCampaignRecipientSchema, insertConversationAssignmentSchema, insertUserActivityLogSchema, insertSiteSchema, insertNotificationSchema, channelsRelations, contactsRelations, campaignsRelations, campaignRecipientsRelations, templatesRelations, conversationsRelations, messagesRelations, usersRelations, conversationAssignmentsRelations, userActivityLogsRelations, automationsRelations, automationNodesRelations, automationEdgesRelations, automationExecutionsRelations, automationExecutionLogsRelations;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    users = pgTable("users", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      username: text("username").notNull().unique(),
      password: text("password").notNull(),
      email: text("email").notNull().unique(),
      firstName: text("first_name"),
      lastName: text("last_name"),
      role: text("role").notNull().default("admin"),
      // admin, manager, agent
      avatar: text("avatar"),
      status: text("status").notNull().default("active"),
      // active, inactive
      permissions: text("permissions").array().notNull(),
      channelId: varchar("channel_id"),
      lastLogin: timestamp("last_login"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow(),
      createdBy: varchar("created_by").default(""),
      fcmToken: varchar("fcm_token", { length: 512 }),
      isEmailVerified: boolean("is_email_verified").default(false)
    });
    conversationAssignments = pgTable("conversation_assignments", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      conversationId: varchar("conversation_id").notNull().references(() => conversations.id, { onDelete: "cascade" }),
      userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
      assignedBy: varchar("assigned_by").references(() => users.id, {
        onDelete: "cascade"
      }),
      assignedAt: timestamp("assigned_at").defaultNow(),
      status: text("status").notNull().default("active"),
      // active, resolved, transferred
      priority: text("priority").default("normal"),
      // low, normal, high, urgent
      notes: text("notes"),
      resolvedAt: timestamp("resolved_at"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    userActivityLogs = pgTable("user_activity_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
      action: text("action").notNull(),
      // login, logout, message_sent, conversation_assigned, etc.
      entityType: text("entity_type"),
      // conversation, message, contact, etc.
      entityId: varchar("entity_id"),
      details: jsonb("details").default({}),
      ipAddress: text("ip_address"),
      userAgent: text("user_agent"),
      createdAt: timestamp("created_at").defaultNow()
    });
    contacts = pgTable(
      "contacts",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        channelId: varchar("channel_id").references(() => channels.id, {
          onDelete: "cascade"
        }),
        name: text("name").notNull(),
        phone: text("phone").notNull(),
        email: text("email"),
        groups: jsonb("groups").$type().default([]),
        tags: jsonb("tags").default([]),
        status: text("status").default("active"),
        // active, blocked, unsubscribed
        source: varchar("source", { length: 100 }),
        // manual, import, api, chatbot
        lastContact: timestamp("last_contact"),
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow(),
        createdBy: varchar("created_by").default("")
      },
      (table) => ({
        contactChannelIdx: index("contacts_channel_idx").on(table.channelId),
        contactPhoneIdx: index("contacts_phone_idx").on(table.phone),
        contactStatusIdx: index("contacts_status_idx").on(table.status),
        contactChannelPhoneUnique: unique("contacts_channel_phone_unique").on(
          table.channelId,
          table.phone
        )
      })
    );
    campaigns = pgTable(
      "campaigns",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        channelId: varchar("channel_id").references(() => channels.id, {
          onDelete: "cascade"
        }),
        createdBy: varchar("created_by"),
        name: text("name").notNull(),
        description: text("description"),
        campaignType: text("campaign_type").notNull(),
        // contacts, csv, api
        type: text("type").notNull(),
        // marketing, transactional
        apiType: text("api_type").notNull(),
        // cloud_api, mm_lite
        templateId: varchar("template_id").references(() => templates.id),
        templateName: text("template_name"),
        templateLanguage: text("template_language"),
        variableMapping: jsonb("variable_mapping").$type().default({}),
        // Maps template variables to contact/csv fields
        contactGroups: jsonb("contact_groups").$type().default([]),
        // For contacts campaign
        csvData: jsonb("csv_data").default([]),
        // For CSV campaign
        apiKey: varchar("api_key"),
        // For API campaign
        apiEndpoint: text("api_endpoint"),
        // For API campaign
        status: text("status").default("draft"),
        // draft, scheduled, active, paused, completed
        scheduledAt: timestamp("scheduled_at"),
        recipientCount: integer("recipient_count").default(0),
        sentCount: integer("sent_count").default(0),
        deliveredCount: integer("delivered_count").default(0),
        readCount: integer("read_count").default(0),
        repliedCount: integer("replied_count").default(0),
        failedCount: integer("failed_count").default(0),
        completedAt: timestamp("completed_at"),
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow()
      },
      (table) => ({
        campaignChannelIdx: index("campaigns_channel_idx").on(table.channelId),
        campaignStatusIdx: index("campaigns_status_idx").on(table.status),
        campaignCreatedIdx: index("campaigns_created_idx").on(table.createdAt)
      })
    );
    campaignRecipients = pgTable(
      "campaign_recipients",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        campaignId: varchar("campaign_id").notNull().references(() => campaigns.id, { onDelete: "cascade" }),
        contactId: varchar("contact_id").references(() => contacts.id, {
          onDelete: "cascade"
        }),
        phone: text("phone").notNull(),
        name: text("name"),
        status: text("status").default("pending"),
        // pending, sent, delivered, read, failed
        whatsappMessageId: varchar("whatsapp_message_id"),
        templateParams: jsonb("template_params").default({}),
        sentAt: timestamp("sent_at"),
        deliveredAt: timestamp("delivered_at"),
        readAt: timestamp("read_at"),
        errorCode: varchar("error_code"),
        errorMessage: text("error_message"),
        retryCount: integer("retry_count").default(0),
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow()
      },
      (table) => ({
        recipientCampaignIdx: index("recipients_campaign_idx").on(table.campaignId),
        recipientStatusIdx: index("recipients_status_idx").on(table.status),
        recipientPhoneIdx: index("recipients_phone_idx").on(table.phone),
        campaignPhoneUnique: unique("campaign_phone_unique").on(
          table.campaignId,
          table.phone
        )
      })
    );
    channels = pgTable("channels", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      name: text("name").notNull(),
      phoneNumberId: text("phone_number_id").notNull(),
      accessToken: text("access_token").notNull(),
      whatsappBusinessAccountId: text("whatsapp_business_account_id"),
      phoneNumber: text("phone_number"),
      isActive: boolean("is_active").default(true),
      // Health status fields
      healthStatus: text("health_status").default("unknown"),
      // healthy, warning, error, unknown
      lastHealthCheck: timestamp("last_health_check"),
      healthDetails: jsonb("health_details").default({}),
      // Detailed health information
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow(),
      createdBy: varchar("created_by").default("")
    });
    templates = pgTable("templates", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      channelId: varchar("channel_id").references(() => channels.id),
      createdBy: varchar("created_by"),
      name: text("name").notNull(),
      category: text("category").notNull(),
      // marketing, transactional, authentication, utility
      language: text("language").default("en_US"),
      header: text("header"),
      body: text("body").notNull(),
      footer: text("footer"),
      buttons: jsonb("buttons").default([]),
      variables: jsonb("variables").default([]),
      status: text("status").default("draft"),
      // draft, pending, approved, rejected
      rejectionReason: text("rejection_reason"),
      // Reason for template rejection from WhatsApp
      // Media support fields
      mediaType: text("media_type").default("text"),
      // text, image, video, document, carousel
      mediaUrl: text("media_url"),
      // URL of uploaded media
      mediaHandle: text("media_handle"),
      // WhatsApp media handle after upload
      carouselCards: jsonb("carousel_cards").default([]),
      // For carousel templates
      whatsappTemplateId: text("whatsapp_template_id"),
      // ID from WhatsApp after creation
      usage_count: integer("usage_count").default(0),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    session = pgTable("session", {
      sid: varchar("sid").notNull().primaryKey(),
      sess: jsonb("sess").notNull(),
      expire: timestamp("expire", { precision: 6 }).notNull()
    });
    conversations = pgTable(
      "conversations",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        channelId: varchar("channel_id").references(() => channels.id, {
          onDelete: "cascade"
        }),
        contactId: varchar("contact_id").references(() => contacts.id, {
          onDelete: "cascade"
        }),
        assignedTo: varchar("assigned_to"),
        contactPhone: varchar("contact_phone"),
        // Store phone number for webhook lookups
        contactName: varchar("contact_name"),
        // Store contact name
        status: text("status").default("open"),
        // open, closed, assigned, pending
        priority: text("priority").default("normal"),
        // low, normal, high, urgent
        type: text("type").default("whatsapp"),
        // whatsapp, chatbot, sms, email
        chatbotId: integer("chatbot_id"),
        sessionId: text("session_id"),
        tags: jsonb("tags").default([]),
        unreadCount: integer("unread_count").default(0),
        // Track unread messages
        lastMessageAt: timestamp("last_message_at"),
        lastMessageText: text("last_message_text"),
        // Cache last message for display
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow()
      },
      (table) => ({
        conversationChannelIdx: index("conversations_channel_idx").on(
          table.channelId
        ),
        conversationContactIdx: index("conversations_contact_idx").on(
          table.contactId
        ),
        conversationPhoneIdx: index("conversations_phone_idx").on(
          table.contactPhone
        ),
        conversationStatusIdx: index("conversations_status_idx").on(table.status)
      })
    );
    messages = pgTable(
      "messages",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        conversationId: varchar("conversation_id").references(
          () => conversations.id,
          {
            onDelete: "cascade"
          }
        ),
        whatsappMessageId: varchar("whatsapp_message_id"),
        // Store WhatsApp message ID
        fromUser: boolean("from_user").default(false),
        direction: varchar("direction").default("outbound"),
        // inbound, outbound
        content: text("content").notNull(),
        type: text("type").default("text"),
        // text, image, document, template
        fromType: varchar("from_type").default("user"),
        // user, bot, system
        messageType: varchar("message_type"),
        // For WhatsApp message types
        mediaId: varchar("media_id"),
        // WhatsApp media ID
        mediaUrl: text("media_url"),
        // Download URL (fetched from Graph API)
        mediaMimeType: varchar("media_mime_type", { length: 100 }),
        mediaSha256: varchar("media_sha256", { length: 128 }),
        status: text("status").default("sent"),
        // sent, delivered, read, failed, received
        timestamp: timestamp("timestamp"),
        // WhatsApp timestamp
        metadata: jsonb("metadata").default({}),
        // Store additional WhatsApp data
        deliveredAt: timestamp("delivered_at"),
        readAt: timestamp("read_at"),
        errorCode: varchar("error_code", { length: 50 }),
        errorMessage: text("error_message"),
        errorDetails: jsonb("error_details"),
        // Store detailed error information from WhatsApp
        campaignId: varchar("campaign_id").references(() => campaigns.id, {
          onDelete: "set null"
        }),
        // Link to campaign if sent from campaign
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow()
      },
      (table) => ({
        messageConversationIdx: index("messages_conversation_idx").on(
          table.conversationId
        ),
        messageWhatsappIdx: index("messages_whatsapp_idx").on(
          table.whatsappMessageId
        ),
        messageDirectionIdx: index("messages_direction_idx").on(table.direction),
        messageStatusIdx: index("messages_status_idx").on(table.status),
        messageTimestampIdx: index("messages_timestamp_idx").on(table.timestamp),
        messageCreatedIdx: index("messages_created_idx").on(table.createdAt)
      })
    );
    notifications = pgTable("notifications", {
      id: serial("id").primaryKey(),
      title: text("title").notNull(),
      message: text("message").notNull(),
      // message, payment, follower, security, reminder, call, etc.
      type: varchar("type").notNull().default("general"),
      // Who created it? admin | system
      createdBy: varchar("created_by").notNull().default("system"),
      //------------------------
      // Target system
      //------------------------
      // all, specific, single
      targetType: varchar("target_type").notNull(),
      // For specific users (array)
      targetIds: text("target_ids").array().default(sql`ARRAY[]::text[]`),
      status: varchar("status").notNull().default("draft"),
      // draft | sent
      sentAt: timestamp("sent_at"),
      createdAt: timestamp("created_at").notNull().defaultNow()
    });
    sentNotifications = pgTable("sent_notifications", {
      id: serial("id").primaryKey(),
      notificationId: integer("notification_id").references(() => notifications.id, { onDelete: "cascade" }).notNull(),
      userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      isRead: boolean("is_read").default(false),
      readAt: timestamp("read_at"),
      sentAt: timestamp("sent_at").defaultNow()
    });
    chatbots = pgTable("chatbots", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      uuid: text("uuid").notNull().unique(),
      title: text("title").notNull(),
      bubbleMessage: text("bubble_message"),
      welcomeMessage: text("welcome_message"),
      instructions: text("instructions"),
      connectMessage: text("connect_message"),
      language: text("language").default("en"),
      interactionType: text("interaction_type").default("ai-only"),
      avatarId: integer("avatar_id"),
      avatarEmoji: text("avatar_emoji"),
      avatarColor: text("avatar_color"),
      primaryColor: text("primary_color").default("#3B82F6"),
      logoUrl: text("logo_url"),
      embedWidth: integer("embed_width").default(420),
      embedHeight: integer("embed_height").default(745),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    trainingData = pgTable("training_data", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      chatbotId: integer("chatbot_id").references(() => chatbots.id),
      type: text("type").notNull(),
      // 'text', 'pdf', 'website', 'qa'
      title: text("title"),
      content: text("content"),
      metadata: jsonb("metadata"),
      createdAt: timestamp("created_at").defaultNow()
    });
    knowledgeCategories = pgTable(
      "knowledge_categories",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        siteId: varchar("site_id").notNull(),
        parentId: varchar("parent_id"),
        name: varchar("name", { length: 255 }).notNull(),
        icon: varchar("icon", { length: 50 }),
        description: text("description"),
        order: integer("order").default(0),
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow()
      },
      (table) => ({
        categorySiteIdx: index("categories_site_idx").on(table.siteId),
        categoryParentIdx: index("categories_parent_idx").on(table.parentId)
      })
    );
    knowledgeArticles = pgTable(
      "knowledge_articles",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        categoryId: varchar("category_id").notNull(),
        title: varchar("title", { length: 500 }).notNull(),
        content: text("content").notNull(),
        order: integer("order").default(0),
        published: boolean("published").default(true),
        views: integer("views").default(0),
        helpful: integer("helpful").default(0),
        notHelpful: integer("not_helpful").default(0),
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow()
      },
      (table) => ({
        articleCategoryIdx: index("articles_category_idx").on(table.categoryId),
        articlePublishedIdx: index("articles_published_idx").on(table.published)
      })
    );
    plans = pgTable("plans", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      name: varchar("name").notNull(),
      description: text("description"),
      icon: varchar("icon"),
      // optional: store icon name like 'Zap', 'Crown'
      popular: boolean("popular").default(false),
      badge: varchar("badge"),
      color: varchar("color"),
      buttonColor: varchar("button_color"),
      // Pricing
      monthlyPrice: numeric("monthly_price", { precision: 10, scale: 2 }).default(
        "0"
      ),
      annualPrice: numeric("annual_price", { precision: 10, scale: 2 }).default(
        "0"
      ),
      // Permissions (JSON for flexibility)
      permissions: jsonb("permissions").$type(),
      // Features (Array of objects)
      features: jsonb("features").$type(),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    paymentProviders = pgTable("payment_providers", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      name: varchar("name").notNull(),
      // e.g., "Razorpay", "Stripe", "PayPal"
      providerKey: varchar("provider_key").notNull().unique(),
      // e.g., "razorpay", "stripe"
      description: text("description"),
      logo: varchar("logo"),
      // URL or icon name
      isActive: boolean("is_active").default(true),
      // Provider Configuration (API Keys, etc.)
      config: jsonb("config").$type(),
      // Supported features
      supportedCurrencies: jsonb("supported_currencies").$type(),
      supportedMethods: jsonb("supported_methods").$type(),
      // ["card", "upi", "wallet"]
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    subscriptions = pgTable("subscriptions", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").notNull().references(() => users.id),
      planId: varchar("plan_id").notNull().references(() => plans.id),
      planData: jsonb("plan_data").notNull(),
      status: varchar("status").notNull(),
      // "active", "expired", "cancelled", "pending"
      billingCycle: varchar("billing_cycle").notNull(),
      // "monthly" or "annual"
      startDate: timestamp("start_date").notNull(),
      endDate: timestamp("end_date").notNull(),
      autoRenew: boolean("auto_renew").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    transactions = pgTable("transactions", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").notNull().references(() => users.id),
      planId: varchar("plan_id").notNull().references(() => plans.id),
      subscriptionId: varchar("subscription_id").references(() => subscriptions.id),
      paymentProviderId: varchar("payment_provider_id").notNull().references(() => paymentProviders.id),
      // Transaction details
      amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
      currency: varchar("currency").default("USD"),
      billingCycle: varchar("billing_cycle").notNull(),
      // "monthly" or "annual"
      // Payment provider details
      providerTransactionId: varchar("provider_transaction_id"),
      // Transaction ID from payment provider
      providerOrderId: varchar("provider_order_id"),
      // Order ID from payment provider
      providerPaymentId: varchar("provider_payment_id"),
      // Payment ID from payment provider
      // Transaction status
      status: varchar("status").notNull(),
      // "pending", "completed", "failed", "refunded", "cancelled"
      paymentMethod: varchar("payment_method"),
      // "card", "upi", "wallet", "netbanking"
      // Additional details
      metadata: jsonb("metadata").$type(),
      // Timestamps
      paidAt: timestamp("paid_at"),
      refundedAt: timestamp("refunded_at"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    ticketStatusEnum = pgEnum("ticket_status", [
      "open",
      "in_progress",
      "resolved",
      "closed"
    ]);
    ticketPriorityEnum = pgEnum("ticket_priority", [
      "low",
      "medium",
      "high",
      "urgent"
    ]);
    userTypeEnum = pgEnum("user_type", [
      "user",
      "team",
      "admin",
      "superadmin"
    ]);
    supportTickets = pgTable("support_tickets", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      title: text("title").notNull(),
      description: text("description").notNull(),
      status: ticketStatusEnum("status").notNull().default("open"),
      priority: ticketPriorityEnum("priority").notNull().default("medium"),
      // Creator info (can be user or listener)
      creatorId: varchar("creator_id").notNull(),
      // ID from users or listeners table
      creatorType: userTypeEnum("creator_type").notNull(),
      // 'user' or 'team'
      creatorName: text("creator_name").notNull(),
      // Cached for display
      creatorEmail: text("creator_email").notNull(),
      // Cached for display
      // Assignment (admin only)
      assignedToId: varchar("assigned_to_id"),
      // ID from admin_users table
      assignedToName: text("assigned_to_name"),
      // Cached for display
      createdAt: timestamp("created_at").notNull().defaultNow(),
      updatedAt: timestamp("updated_at").notNull().defaultNow(),
      resolvedAt: timestamp("resolved_at"),
      closedAt: timestamp("closed_at")
    });
    ticketMessages = pgTable("ticket_messages", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      ticketId: varchar("ticket_id").notNull().references(() => supportTickets.id, { onDelete: "cascade" }),
      // Sender info (can be user, listener, or admin)
      senderId: varchar("sender_id").notNull(),
      senderType: userTypeEnum("sender_type").notNull(),
      // 'user', 'listener', or 'admin'
      senderName: text("sender_name").notNull(),
      // Cached for display
      message: text("message").notNull(),
      isInternal: boolean("is_internal").notNull().default(false),
      // Admin notes only
      createdAt: timestamp("created_at").notNull().defaultNow()
    });
    supportTicketsRelations = relations(
      supportTickets,
      ({ many }) => ({
        messages: many(ticketMessages)
      })
    );
    ticketMessagesRelations = relations(ticketMessages, ({ one }) => ({
      ticket: one(supportTickets, {
        fields: [ticketMessages.ticketId],
        references: [supportTickets.id]
      })
    }));
    automations = pgTable(
      "automations",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        channelId: varchar("channel_id").references(() => channels.id, {
          onDelete: "cascade"
        }),
        name: text("name").notNull(),
        description: text("description"),
        trigger: text("trigger").notNull(),
        // message_received, keyword, schedule, api_webhook
        triggerConfig: jsonb("trigger_config").default({}),
        status: text("status").default("inactive"),
        // active, inactive, paused
        executionCount: integer("execution_count").default(0),
        lastExecutedAt: timestamp("last_executed_at"),
        createdBy: varchar("created_by").references(() => users.id),
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow()
      },
      (table) => ({
        automationChannelIdx: index("automations_channel_idx").on(table.channelId),
        automationStatusIdx: index("automations_status_idx").on(table.status)
      })
    );
    automationNodes = pgTable(
      "automation_nodes",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        automationId: varchar("automation_id").notNull().references(() => automations.id, { onDelete: "cascade" }),
        nodeId: varchar("node_id").notNull(),
        type: text("type").notNull(),
        // trigger, action, condition, delay
        subtype: text("subtype"),
        // send_template, send_message, wait, etc.
        position: jsonb("position").default({}),
        // {x, y}
        measured: jsonb("measured").default({}),
        // {x, y}
        data: jsonb("data").default({}),
        // node config
        connections: jsonb("connections").default([]),
        // array of next nodeIds
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow()
      },
      (table) => ({
        nodeAutomationIdx: index("automation_nodes_automation_idx").on(
          table.automationId
        ),
        nodeUniqueIdx: unique("automation_nodes_unique_idx").on(
          table.automationId,
          table.nodeId
        )
      })
    );
    automationEdges = pgTable(
      "automation_edges",
      {
        id: varchar("id").primaryKey(),
        // This can use the edge ID from your JSON if needed
        automationId: varchar("automation_id").notNull().references(() => automations.id, { onDelete: "cascade" }),
        sourceNodeId: varchar("source_node_id").notNull().references(() => automationNodes.nodeId, { onDelete: "cascade" }),
        targetNodeId: varchar("target_node_id").notNull().references(() => automationNodes.nodeId, { onDelete: "cascade" }),
        animated: boolean("animated").default(false),
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow()
      },
      (table) => ({
        automationEdgeIdx: index("automation_edges_automation_idx").on(
          table.automationId
        ),
        edgeUniqueIdx: unique("automation_edges_unique_idx").on(
          table.automationId,
          table.sourceNodeId,
          table.targetNodeId
        )
      })
    );
    automationExecutions = pgTable(
      "automation_executions",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        automationId: varchar("automation_id").notNull().references(() => automations.id, { onDelete: "cascade" }),
        contactId: varchar("contact_id").references(() => contacts.id),
        conversationId: varchar("conversation_id").references(
          () => conversations.id
        ),
        triggerData: jsonb("trigger_data").default({}),
        status: text("status").notNull(),
        // running, completed, failed
        currentNodeId: varchar("current_node_id"),
        executionPath: jsonb("execution_path").default([]),
        variables: jsonb("variables").default({}),
        result: text("result"),
        error: text("error"),
        startedAt: timestamp("started_at").defaultNow(),
        completedAt: timestamp("completed_at")
      },
      (table) => ({
        executionAutomationIdx: index("automation_executions_automation_idx").on(
          table.automationId
        ),
        executionStatusIdx: index("automation_executions_status_idx").on(
          table.status
        )
      })
    );
    automationExecutionLogs = pgTable(
      "automation_execution_logs",
      {
        id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
        executionId: varchar("execution_id").notNull().references(() => automationExecutions.id, { onDelete: "cascade" }),
        nodeId: varchar("node_id").notNull(),
        nodeType: text("node_type").notNull(),
        status: text("status").notNull(),
        // started, completed, failed
        input: jsonb("input").default({}),
        output: jsonb("output").default({}),
        error: text("error"),
        executedAt: timestamp("executed_at").defaultNow()
      },
      (table) => ({
        logExecutionIdx: index("automation_execution_logs_execution_idx").on(
          table.executionId
        )
      })
    );
    analytics = pgTable("analytics", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      channelId: varchar("channel_id"),
      date: timestamp("date").notNull(),
      messagesSent: integer("messages_sent").default(0),
      messagesDelivered: integer("messages_delivered").default(0),
      messagesRead: integer("messages_read").default(0),
      messagesReplied: integer("messages_replied").default(0),
      newContacts: integer("new_contacts").default(0),
      activeCampaigns: integer("active_campaigns").default(0),
      createdAt: timestamp("created_at").defaultNow()
    });
    whatsappChannels = pgTable("whatsapp_channels", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      name: text("name").notNull(),
      phoneNumber: varchar("phone_number", { length: 20 }).notNull().unique(),
      phoneNumberId: varchar("phone_number_id", { length: 50 }).notNull(),
      wabaId: varchar("waba_id", { length: 50 }).notNull(),
      accessToken: text("access_token").notNull(),
      // Should be encrypted in production
      businessAccountId: varchar("business_account_id", { length: 50 }),
      rateLimitTier: varchar("rate_limit_tier", { length: 20 }).default("standard"),
      qualityRating: varchar("quality_rating", { length: 20 }).default("green"),
      // green, yellow, red
      status: varchar("status", { length: 20 }).default("inactive"),
      // active, inactive, error
      errorMessage: text("error_message"),
      lastHealthCheck: timestamp("last_health_check"),
      messageLimit: integer("message_limit"),
      messagesUsed: integer("messages_used"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    webhookConfigs = pgTable("webhook_configs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      channelId: varchar("channel_id"),
      // No foreign key - global webhook for all channels
      webhookUrl: text("webhook_url").notNull(),
      verifyToken: varchar("verify_token", { length: 100 }).notNull(),
      appSecret: text("app_secret"),
      // For signature verification
      events: jsonb("events").default([]).notNull(),
      // ['messages', 'message_status', 'message_template_status_update']
      isActive: boolean("is_active").default(true),
      lastPingAt: timestamp("last_ping_at"),
      createdAt: timestamp("created_at").defaultNow()
    });
    messageQueue = pgTable("message_queue", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      campaignId: varchar("campaign_id").references(() => campaigns.id),
      channelId: varchar("channel_id").references(() => whatsappChannels.id),
      recipientPhone: varchar("recipient_phone", { length: 20 }).notNull(),
      templateName: varchar("template_name", { length: 100 }),
      templateParams: jsonb("template_params").default([]),
      messageType: varchar("message_type", { length: 20 }).notNull(),
      // marketing, utility, authentication
      status: varchar("status", { length: 20 }).default("queued"),
      // queued, processing, sent, delivered, failed
      attempts: integer("attempts").default(0),
      whatsappMessageId: varchar("whatsapp_message_id", { length: 100 }),
      conversationId: varchar("conversation_id", { length: 100 }),
      sentVia: varchar("sent_via", { length: 20 }),
      // cloud_api, marketing_messages
      cost: varchar("cost", { length: 20 }),
      // Store as string to avoid decimal precision issues
      errorCode: varchar("error_code", { length: 50 }),
      errorMessage: text("error_message"),
      scheduledFor: timestamp("scheduled_for"),
      processedAt: timestamp("processed_at"),
      deliveredAt: timestamp("delivered_at"),
      readAt: timestamp("read_at"),
      createdAt: timestamp("created_at").defaultNow()
    });
    apiLogs = pgTable("api_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      channelId: varchar("channel_id").references(() => channels.id),
      requestType: varchar("request_type", { length: 50 }).notNull(),
      // send_message, get_template, webhook_receive
      endpoint: text("endpoint").notNull(),
      method: varchar("method", { length: 10 }).notNull(),
      requestBody: jsonb("request_body"),
      responseStatus: integer("response_status"),
      responseBody: jsonb("response_body"),
      duration: integer("duration"),
      // in milliseconds
      createdAt: timestamp("created_at").defaultNow()
    });
    panelConfig = pgTable("panel_config", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      name: varchar("name").notNull(),
      tagline: varchar("tagline"),
      description: text("description"),
      logo: varchar("logo"),
      logo2: varchar("logo2"),
      favicon: varchar("favicon"),
      defaultLanguage: varchar("default_language", { length: 5 }).default("en"),
      supportedLanguages: jsonb("supported_languages").default(sql`'["en"]'`),
      companyName: varchar("company_name"),
      companyWebsite: varchar("company_website"),
      supportEmail: varchar("support_email"),
      currency: varchar("currency", { length: 10 }).default("INR"),
      // e.g. USD, INR
      country: varchar("country", { length: 2 }).default("IN"),
      // ISO country code like US, IN
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    groups = pgTable("groups", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      channelId: uuid("channelId"),
      name: varchar("name", { length: 255 }).notNull(),
      description: text("description"),
      createdBy: varchar("created_by").references(() => users.id, { onDelete: "cascade" }),
      createdAt: timestamp("created_at", { withTimezone: false }).defaultNow()
    });
    firebaseConfig = pgTable("firebase_config", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      apiKey: text("api_key"),
      authDomain: text("auth_domain"),
      projectId: text("project_id"),
      storageBucket: text("storage_bucket"),
      messagingSenderId: text("messaging_sender_id"),
      appId: text("app_id"),
      measurementId: text("measurement_id"),
      privateKey: text("private_key"),
      clientEmail: text("client_email"),
      vapidKey: text("vapid_key"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    storageSettings = pgTable("storage_settings", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      provider: text("provider").default("digitalocean"),
      // can extend later
      spaceName: text("space_name").notNull(),
      endpoint: text("endpoint").notNull(),
      region: text("region").notNull(),
      accessKey: text("access_key").notNull(),
      secretKey: text("secret_key").notNull(),
      isActive: boolean("is_active").default(false),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    aiSettings = pgTable("ai_settings", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      channelId: varchar("channel_id").references(() => channels.id),
      provider: text("provider").notNull().default("openai"),
      apiKey: text("api_key").notNull(),
      model: text("model").notNull().default("gpt-4o-mini"),
      endpoint: text("endpoint").default("https://api.openai.com/v1"),
      temperature: text("temperature").default("0.7"),
      // string for consistency
      maxTokens: text("max_tokens").default("2048"),
      isActive: boolean("is_active").default(false),
      // NEW COLUMN
      words: text("words").array().default(sql`ARRAY[]::text[]`),
      // trigger words or phrases
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    sites = pgTable("sites", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      channelId: varchar("channel_id"),
      name: text("name").notNull(),
      domain: text("domain").notNull(),
      widgetCode: text("widget_code").notNull().unique(),
      widgetEnabled: boolean("widget_enabled").notNull().default(true),
      widgetConfig: jsonb("widget_config").notNull().default(sql`'{}'::jsonb`),
      // colors, position, greeting, etc.
      aiTrainingConfig: jsonb("ai_training_config").notNull().default(sql`'{"trainFromKB": false, "trainFromDocuments": true}'::jsonb`),
      // AI training settings
      autoAssignmentConfig: jsonb("auto_assignment_config").notNull().default(sql`'{"enabled": false, "strategy": "round_robin"}'::jsonb`),
      // Auto-assignment settings
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    smtpConfig = pgTable("smtp_config", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      host: text("host").notNull(),
      port: integer("port").notNull(),
      secure: boolean("secure").default(false),
      user: text("user").notNull(),
      password: text("password"),
      fromName: text("from_name").notNull(),
      fromEmail: text("from_email").notNull(),
      logo: text("logo").default("null"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    otpVerifications = pgTable("otp_verifications", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      // UUID primary key
      userId: varchar("user_id").notNull(),
      otpCode: varchar("otp_code", { length: 6 }).notNull(),
      // 6-digit OTP
      expiresAt: timestamp("expires_at").notNull(),
      isUsed: boolean("is_used").default(false),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    PERMISSIONS = {
      // Dashboard permissions
      DASHBOARD_VIEW: "dashboard:view",
      DASHBOARD_EXPORT: "dashboard:export",
      // Contacts permissions
      CONTACTS_VIEW: "contacts:view",
      CONTACTS_CREATE: "contacts:create",
      CONTACTS_EDIT: "contacts:edit",
      CONTACTS_DELETE: "contacts:delete",
      CONTACTS_IMPORT: "contacts:import",
      CONTACTS_EXPORT: "contacts:export",
      // Campaigns permissions
      CAMPAIGNS_VIEW: "campaigns:view",
      CAMPAIGNS_CREATE: "campaigns:create",
      CAMPAIGNS_EDIT: "campaigns:edit",
      CAMPAIGNS_DELETE: "campaigns:delete",
      CAMPAIGNS_SEND: "campaigns:send",
      CAMPAIGNS_SCHEDULE: "campaigns:schedule",
      // Templates permissions
      TEMPLATES_VIEW: "templates:view",
      TEMPLATES_CREATE: "templates:create",
      TEMPLATES_EDIT: "templates:edit",
      TEMPLATES_DELETE: "templates:delete",
      TEMPLATES_SYNC: "templates:sync",
      // Inbox permissions
      INBOX_VIEW: "inbox:view",
      INBOX_SEND_MESSAGE: "inbox:send",
      INBOX_ASSIGN: "inbox:assign",
      INBOX_CLOSE: "inbox:close",
      INBOX_DELETE: "inbox:delete",
      // Analytics permissions
      ANALYTICS_VIEW: "analytics:view",
      ANALYTICS_EXPORT: "analytics:export",
      // Settings permissions
      SETTINGS_VIEW: "settings:view",
      SETTINGS_CHANNELS: "settings:channels",
      SETTINGS_WEBHOOK: "settings:webhook",
      SETTINGS_TEAM: "settings:team",
      SETTINGS_API: "settings:api",
      // Team management permissions
      TEAM_VIEW: "team:view",
      TEAM_CREATE: "team:create",
      TEAM_EDIT: "team:edit",
      TEAM_DELETE: "team:delete",
      TEAM_PERMISSIONS: "team:permissions",
      // Logs permissions
      LOGS_VIEW: "logs:view",
      // Automation permissions
      AUTOMATIONS_VIEW: "automations:view",
      AUTOMATIONS_CREATE: "automations:create",
      AUTOMATIONS_EDIT: "automations:edit",
      AUTOMATIONS_DELETE: "automations:delete"
    };
    DEFAULT_PERMISSIONS = {
      admin: Object.values(PERMISSIONS),
      // Admin has all permissions
      manager: [
        PERMISSIONS.DASHBOARD_VIEW,
        PERMISSIONS.DASHBOARD_EXPORT,
        PERMISSIONS.CONTACTS_VIEW,
        PERMISSIONS.CONTACTS_CREATE,
        PERMISSIONS.CONTACTS_EDIT,
        PERMISSIONS.CONTACTS_IMPORT,
        PERMISSIONS.CONTACTS_EXPORT,
        PERMISSIONS.CAMPAIGNS_VIEW,
        PERMISSIONS.CAMPAIGNS_CREATE,
        PERMISSIONS.CAMPAIGNS_EDIT,
        PERMISSIONS.CAMPAIGNS_SEND,
        PERMISSIONS.CAMPAIGNS_SCHEDULE,
        PERMISSIONS.TEMPLATES_VIEW,
        PERMISSIONS.TEMPLATES_CREATE,
        PERMISSIONS.TEMPLATES_EDIT,
        PERMISSIONS.TEMPLATES_SYNC,
        PERMISSIONS.INBOX_VIEW,
        PERMISSIONS.INBOX_SEND_MESSAGE,
        PERMISSIONS.INBOX_ASSIGN,
        PERMISSIONS.INBOX_CLOSE,
        PERMISSIONS.ANALYTICS_VIEW,
        PERMISSIONS.ANALYTICS_EXPORT,
        PERMISSIONS.SETTINGS_VIEW,
        PERMISSIONS.TEAM_VIEW
      ],
      agent: [
        PERMISSIONS.DASHBOARD_VIEW,
        PERMISSIONS.CONTACTS_VIEW,
        PERMISSIONS.CAMPAIGNS_VIEW,
        PERMISSIONS.TEMPLATES_VIEW,
        PERMISSIONS.INBOX_VIEW,
        PERMISSIONS.INBOX_SEND_MESSAGE,
        PERMISSIONS.ANALYTICS_VIEW
      ]
    };
    insertUserSchema = createInsertSchema(users).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertContactSchema = createInsertSchema(contacts).omit({
      id: true,
      createdAt: true
    });
    insertCampaignSchema = createInsertSchema(campaigns).omit({
      id: true,
      createdAt: true
    });
    insertChannelSchema = createInsertSchema(channels).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertTemplateSchema = createInsertSchema(templates).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertConversationSchema = createInsertSchema(conversations).omit({
      id: true,
      createdAt: true
    });
    insertMessageSchema = createInsertSchema(messages).omit({
      id: true,
      createdAt: true
    });
    insertAutomationSchema = createInsertSchema(automations).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertAutomationNodeSchema = createInsertSchema(
      automationNodes
    ).omit({ id: true, createdAt: true, updatedAt: true });
    insertAutomationExecutionSchema = createInsertSchema(
      automationExecutions
    ).omit({ id: true, startedAt: true });
    insertAutomationExecutionLogSchema = createInsertSchema(
      automationExecutionLogs
    ).omit({ id: true, executedAt: true });
    insertAnalyticsSchema = createInsertSchema(analytics).omit({
      id: true,
      createdAt: true
    });
    insertWhatsappChannelSchema = createInsertSchema(
      whatsappChannels
    ).omit({ id: true, createdAt: true, updatedAt: true });
    insertWebhookConfigSchema = createInsertSchema(
      webhookConfigs
    ).omit({ id: true, createdAt: true });
    insertMessageQueueSchema = createInsertSchema(messageQueue).omit({
      id: true,
      createdAt: true
    });
    insertApiLogSchema = createInsertSchema(apiLogs).omit({
      id: true,
      createdAt: true
    });
    insertCampaignRecipientSchema = createInsertSchema(
      campaignRecipients
    ).omit({ id: true, createdAt: true, updatedAt: true });
    insertConversationAssignmentSchema = createInsertSchema(
      conversationAssignments
    ).omit({ id: true, createdAt: true, updatedAt: true });
    insertUserActivityLogSchema = createInsertSchema(
      userActivityLogs
    ).omit({ id: true, createdAt: true });
    insertSiteSchema = createInsertSchema(sites).omit({
      id: true,
      createdAt: true,
      widgetCode: true
    });
    insertNotificationSchema = createInsertSchema(notifications).omit({
      id: true,
      createdAt: true
    });
    channelsRelations = relations(channels, ({ many }) => ({
      contacts: many(contacts),
      campaigns: many(campaigns),
      templates: many(templates),
      conversations: many(conversations)
    }));
    contactsRelations = relations(contacts, ({ one, many }) => ({
      channel: one(channels, {
        fields: [contacts.channelId],
        references: [channels.id]
      }),
      conversations: many(conversations),
      campaignRecipients: many(campaignRecipients)
    }));
    campaignsRelations = relations(campaigns, ({ one, many }) => ({
      channel: one(channels, {
        fields: [campaigns.channelId],
        references: [channels.id]
      }),
      template: one(templates, {
        fields: [campaigns.templateId],
        references: [templates.id]
      }),
      recipients: many(campaignRecipients)
    }));
    campaignRecipientsRelations = relations(
      campaignRecipients,
      ({ one }) => ({
        campaign: one(campaigns, {
          fields: [campaignRecipients.campaignId],
          references: [campaigns.id]
        }),
        contact: one(contacts, {
          fields: [campaignRecipients.contactId],
          references: [contacts.id]
        })
      })
    );
    templatesRelations = relations(templates, ({ one, many }) => ({
      channel: one(channels, {
        fields: [templates.channelId],
        references: [channels.id]
      }),
      campaigns: many(campaigns)
    }));
    conversationsRelations = relations(
      conversations,
      ({ one, many }) => ({
        channel: one(channels, {
          fields: [conversations.channelId],
          references: [channels.id]
        }),
        contact: one(contacts, {
          fields: [conversations.contactId],
          references: [contacts.id]
        }),
        messages: many(messages)
      })
    );
    messagesRelations = relations(messages, ({ one }) => ({
      conversation: one(conversations, {
        fields: [messages.conversationId],
        references: [conversations.id]
      })
    }));
    usersRelations = relations(users, ({ many }) => ({
      assignedConversations: many(conversationAssignments, {
        relationName: "conversation_assigned_user"
        // matches user side
      }),
      assignedByConversations: many(conversationAssignments, {
        relationName: "conversation_assigned_by_user"
        // matches assignedBy side
      }),
      activityLogs: many(userActivityLogs)
    }));
    conversationAssignmentsRelations = relations(
      conversationAssignments,
      ({ one }) => ({
        conversation: one(conversations, {
          fields: [conversationAssignments.conversationId],
          references: [conversations.id]
        }),
        user: one(users, {
          fields: [conversationAssignments.userId],
          references: [users.id],
          relationName: "conversation_assigned_user"
        }),
        assignedByUser: one(users, {
          fields: [conversationAssignments.assignedBy],
          references: [users.id],
          relationName: "conversation_assigned_by_user"
        })
      })
    );
    userActivityLogsRelations = relations(
      userActivityLogs,
      ({ one }) => ({
        user: one(users, {
          fields: [userActivityLogs.userId],
          references: [users.id]
        })
      })
    );
    automationsRelations = relations(automations, ({ one, many }) => ({
      channel: one(channels, {
        fields: [automations.channelId],
        references: [channels.id]
      }),
      createdByUser: one(users, {
        fields: [automations.createdBy],
        references: [users.id]
      }),
      nodes: many(automationNodes),
      edges: many(automationEdges),
      executions: many(automationExecutions)
    }));
    automationNodesRelations = relations(
      automationNodes,
      ({ one }) => ({
        automation: one(automations, {
          fields: [automationNodes.automationId],
          references: [automations.id]
        })
      })
    );
    automationEdgesRelations = relations(
      automationEdges,
      ({ one }) => ({
        automation: one(automations, {
          fields: [automationEdges.automationId],
          references: [automations.id]
        })
      })
    );
    automationExecutionsRelations = relations(
      automationExecutions,
      ({ one, many }) => ({
        automation: one(automations, {
          fields: [automationExecutions.automationId],
          references: [automations.id]
        }),
        contact: one(contacts, {
          fields: [automationExecutions.contactId],
          references: [contacts.id]
        }),
        conversation: one(conversations, {
          fields: [automationExecutions.conversationId],
          references: [conversations.id]
        }),
        logs: many(automationExecutionLogs)
      })
    );
    automationExecutionLogsRelations = relations(
      automationExecutionLogs,
      ({ one }) => ({
        execution: one(automationExecutions, {
          fields: [automationExecutionLogs.executionId],
          references: [automationExecutions.id]
        })
      })
    );
  }
});

// server/db.ts
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";
var pool, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?"
      );
    }
    pool = new Pool({
      connectionString: process.env.DATABASE_URL
    });
    db = drizzle(pool, { schema: schema_exports });
  }
});

// server/repositories/user.repository.ts
import { eq, desc, and } from "drizzle-orm";
var UserRepository;
var init_user_repository = __esm({
  "server/repositories/user.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    UserRepository = class {
      async getById(id) {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user || void 0;
      }
      async getByPermissions(id) {
        const [result] = await db.select({ permissions: users.permissions }).from(users).where(eq(users.id, id));
        return result?.permissions || [];
      }
      async getByUsername(username) {
        const [user] = await db.select().from(users).where(eq(users.username, username));
        return user || void 0;
      }
      async create(insertUser) {
        const [user] = await db.insert(users).values(insertUser).returning();
        return user;
      }
      async getAll() {
        return await db.select().from(users).orderBy(desc(users.createdAt));
      }
      async getTeamUsersCountByCreator(createdBy) {
        const result = await db.select().from(users).where(
          and(
            eq(users.createdBy, createdBy),
            eq(users.role, "team")
          )
        );
        return result.length;
      }
    };
  }
});

// server/repositories/contact.repository.ts
import { eq as eq2, desc as desc2, and as and2, gte, sql as sql2, lt } from "drizzle-orm";
import { startOfDay, startOfWeek, subWeeks } from "date-fns";
var ContactRepository;
var init_contact_repository = __esm({
  "server/repositories/contact.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    ContactRepository = class {
      async getAll() {
        return await db.select().from(contacts).orderBy(desc2(contacts.createdAt));
      }
      async getAllwithUsername() {
        return await db.select({
          id: contacts.id,
          channelId: contacts.channelId,
          name: contacts.name,
          phone: contacts.phone,
          email: contacts.email,
          groups: contacts.groups,
          tags: contacts.tags,
          status: contacts.status,
          source: contacts.source,
          lastContact: contacts.lastContact,
          createdAt: contacts.createdAt,
          updatedAt: contacts.updatedAt,
          createdBy: contacts.createdBy,
          // 👇 Full name of the creator
          createdByName: sql2`
        CONCAT(
          COALESCE(${users.firstName}, ''), ' ', COALESCE(${users.lastName}, '')
        )
      `.as("createdByName")
        }).from(contacts).leftJoin(users, eq2(users.id, contacts.createdBy)).orderBy(desc2(contacts.createdAt));
      }
      async getByChannel(channelId) {
        return await db.select().from(contacts).where(eq2(contacts.channelId, channelId)).orderBy(desc2(contacts.createdAt));
      }
      async getContactsByUserId(userId, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const totalResult = await db.select({ count: sql2`count(*)` }).from(contacts).where(eq2(contacts.createdBy, userId));
        const total = totalResult[0]?.count ?? 0;
        const data = await db.select().from(contacts).where(eq2(contacts.createdBy, userId)).orderBy(desc2(contacts.createdAt)).limit(limit).offset(offset);
        const totalPages = Math.ceil(total / limit);
        return {
          data,
          total,
          totalPages,
          page,
          limit
        };
      }
      async getContactsByTenant(tenantId) {
        return await db.select().from(contacts).where(eq2(contacts.tenantId, tenantId)).orderBy(desc2(contacts.createdAt));
      }
      async getContactByEmail(email) {
        return await db.select().from(contacts).where(eq2(contacts.email, email)).orderBy(desc2(contacts.createdAt));
      }
      async getContactByPhone(phone) {
        return await db.select().from(contacts).where(eq2(contacts.phone, phone)).orderBy(desc2(contacts.createdAt));
      }
      async getContactStats(channelId) {
        const todayStart = startOfDay(/* @__PURE__ */ new Date());
        const weekStart = startOfWeek(/* @__PURE__ */ new Date(), { weekStartsOn: 1 });
        const lastWeekStart = subWeeks(weekStart, 1);
        const lastWeekEnd = weekStart;
        const channelFilter = channelId ? eq2(contacts.channelId, channelId) : void 0;
        const total = await db.select({ count: sql2`count(*)` }).from(contacts).where(channelFilter ?? sql2`true`);
        const today = await db.select({ count: sql2`count(*)` }).from(contacts).where(
          and2(channelFilter ?? sql2`true`, gte(contacts.createdAt, todayStart))
        );
        const week = await db.select({ count: sql2`count(*)` }).from(contacts).where(
          and2(channelFilter ?? sql2`true`, gte(contacts.createdAt, weekStart))
        );
        const lastWeek = await db.select({ count: sql2`count(*)` }).from(contacts).where(
          and2(
            channelFilter,
            gte(contacts.createdAt, lastWeekStart),
            lt(contacts.createdAt, lastWeekEnd)
          )
        );
        return {
          totalCount: total[0]?.count ?? 0,
          todayCount: today[0]?.count ?? 0,
          weekCount: week[0]?.count ?? 0,
          lastWeekCount: lastWeek[0]?.count ?? 0
        };
      }
      async getById(id) {
        const [contact] = await db.select().from(contacts).where(eq2(contacts.id, id));
        return contact || void 0;
      }
      async getByPhone(phone) {
        const [contact] = await db.select().from(contacts).where(eq2(contacts.phone, phone));
        return contact || void 0;
      }
      // async create(insertContact: InsertContact): Promise<Contact> {
      //   const [contact] = await db
      //     .insert(contacts)
      //     .values(insertContact)
      //     .returning();
      //   return contact;
      // }
      async create(insertContact) {
        if (!insertContact.channelId) {
          throw new Error("Cannot create contact without a channel. Please create a channel first.");
        }
        const [contact] = await db.insert(contacts).values(insertContact).returning();
        return contact;
      }
      async update(id, contact) {
        const [updated] = await db.update(contacts).set(contact).where(eq2(contacts.id, id)).returning();
        return updated || void 0;
      }
      async delete(id) {
        const result = await db.delete(contacts).where(eq2(contacts.id, id)).returning();
        return result.length > 0;
      }
      async search(query) {
        const searchPattern = `%${query}%`;
        return await db.select().from(contacts).where(
          sql2`${contacts.name} ILIKE ${searchPattern} OR ${contacts.phone} ILIKE ${searchPattern} OR ${contacts.email} ILIKE ${searchPattern}`
        );
      }
      async createBulk(insertContacts) {
        if (insertContacts.length === 0) return [];
        return await db.insert(contacts).values(insertContacts).returning();
      }
      async checkExistingPhones(phones, channelId) {
        const existingContacts = await db.select({ phone: contacts.phone }).from(contacts).where(
          sql2`${contacts.phone} = ANY(${phones}) AND ${contacts.channelId} = ${channelId}`
        );
        return existingContacts.map((c) => c.phone);
      }
      async getTotalCount() {
        const result = await db.select({ count: sql2`COUNT(*)`.mapWith(Number) }).from(contacts);
        return result[0]?.count || 0;
      }
    };
  }
});

// server/repositories/campaign.repository.ts
import { eq as eq3, desc as desc3, sql as sql3 } from "drizzle-orm";
var CampaignRepository;
var init_campaign_repository = __esm({
  "server/repositories/campaign.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    CampaignRepository = class {
      async getAllold(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const campaignsList = await db.select().from(campaigns).orderBy(desc3(campaigns.createdAt)).limit(limit).offset(offset);
        const totalResult = await db.select({ total: sql3`COUNT(*)` }).from(campaigns);
        return {
          data: campaignsList,
          total: totalResult[0]?.total ?? 0,
          page,
          limit
        };
      }
      async getAll(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const campaignsList = await db.select({
          id: campaigns.id,
          name: campaigns.name,
          createdBy: campaigns.createdBy,
          createdByName: sql3`
        CONCAT(
          COALESCE(${users.firstName}, ''), ' ', COALESCE(${users.lastName}, '')
        )
      `.as("createdByName"),
          status: campaigns.status,
          createdAt: campaigns.createdAt,
          updatedAt: campaigns.updatedAt
        }).from(campaigns).leftJoin(users, eq3(users.id, sql3`${campaigns.createdBy}::text`)).orderBy(desc3(campaigns.createdAt)).limit(limit).offset(offset);
        const totalResult = await db.select({ total: sql3`COUNT(*)` }).from(campaigns);
        return {
          data: campaignsList,
          total: totalResult[0]?.total ?? 0,
          page,
          limit
        };
      }
      // async getByChannel(channelId: string): Promise<Campaign[]> {
      //   return await db
      //     .select()
      //     .from(campaigns)
      //     .where(eq(campaigns.channelId, channelId))
      //     .orderBy(desc(campaigns.createdAt));
      // }
      async getByChannel(channelId, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const data = await db.select().from(campaigns).where(eq3(campaigns.channelId, channelId)).orderBy(desc3(campaigns.createdAt)).limit(limit).offset(offset);
        const [{ count: count2 }] = await db.select({ count: sql3`COUNT(*)` }).from(campaigns).where(eq3(campaigns.channelId, channelId));
        return {
          data,
          total: Number(count2),
          page,
          limit
        };
      }
      async getById(id) {
        const [campaign] = await db.select().from(campaigns).where(eq3(campaigns.id, id));
        return campaign || void 0;
      }
      // async getCampaignByUserId(userId: string): Promise<Campaign | undefined>{
      //   const [campaign] = await db.select().from(campaigns).where(eq(campaigns.createdBy, userId));
      //   return campaign || []
      // }
      async getCampaignByUserId(userId, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const campaignsList = await db.select().from(campaigns).where(eq3(campaigns.createdBy, userId)).limit(Number(limit)).offset(Number(offset));
        const totalResult = await db.select({ total: sql3`COUNT(*)` }).from(campaigns).where(eq3(campaigns.createdBy, userId));
        return {
          data: campaignsList,
          total: totalResult[0]?.total ?? 0,
          page,
          limit
        };
      }
      async create(insertCampaign) {
        const [campaign] = await db.insert(campaigns).values({
          ...insertCampaign,
          contactGroups: insertCampaign.contactGroups || []
        }).returning();
        return campaign;
      }
      async update(id, campaign) {
        const [updated] = await db.update(campaigns).set(campaign).where(eq3(campaigns.id, id)).returning();
        return updated || void 0;
      }
      async delete(id) {
        const result = await db.delete(campaigns).where(eq3(campaigns.id, id)).returning();
        return result.length > 0;
      }
      async getAllCampaignCount() {
        const campaignsList = await db.select().from(campaigns);
        return campaignsList.length;
      }
    };
  }
});

// server/repositories/channel.repository.ts
import { eq as eq4, desc as desc4, sql as sql4, and as and3 } from "drizzle-orm";
var ChannelRepository;
var init_channel_repository = __esm({
  "server/repositories/channel.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    ChannelRepository = class {
      async getAll() {
        return await db.select().from(channels).orderBy(desc4(channels.createdAt));
      }
      async getAllByUserId(userId) {
        return await db.select().from(channels).where(eq4(channels.createdBy, userId)).orderBy(desc4(channels.createdAt));
      }
      async getByUser(userId, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const channelsList = await db.select().from(channels).where(eq4(channels.createdBy, userId)).orderBy(desc4(channels.createdAt)).limit(limit).offset(offset);
        const totalResult = await db.select({ total: sql4`COUNT(*)` }).from(channels).where(eq4(channels.createdBy, userId));
        const total = totalResult[0]?.total ?? 0;
        return {
          data: channelsList,
          pagination: {
            total: Number(total),
            page,
            limit,
            totalPages: Math.ceil(Number(total) / limit)
          }
        };
      }
      async getById(id) {
        const [channel] = await db.select().from(channels).where(eq4(channels.id, id));
        return channel || void 0;
      }
      async getByPhoneNumberId(phoneNumberId) {
        const [channel] = await db.select().from(channels).where(eq4(channels.phoneNumberId, phoneNumberId));
        return channel || void 0;
      }
      async create(insertChannel) {
        const [channel] = await db.insert(channels).values(insertChannel).returning();
        return channel;
      }
      async update(id, channel) {
        const [updated] = await db.update(channels).set(channel).where(eq4(channels.id, id)).returning();
        return updated || void 0;
      }
      async delete(id) {
        const result = await db.delete(channels).where(eq4(channels.id, id)).returning();
        return result.length > 0;
      }
      async getActive() {
        const [channel] = await db.select().from(channels).where(eq4(channels.isActive, true)).orderBy(desc4(channels.createdAt));
        return channel || void 0;
      }
      async getActiveByUserId(userId) {
        const [channel] = await db.select().from(channels).where(
          and3(
            eq4(channels.isActive, true),
            eq4(channels.createdBy, userId)
          )
        ).orderBy(desc4(channels.createdAt));
        return channel || void 0;
      }
      async getTotalChannelsByUser(createdBy) {
        const result = await db.select({ id: channels.id }).from(channels).where(eq4(channels.createdBy, createdBy));
        return result.length;
      }
    };
  }
});

// server/repositories/template.repository.ts
import { eq as eq5, desc as desc5, sql as sql5 } from "drizzle-orm";
var TemplateRepository;
var init_template_repository = __esm({
  "server/repositories/template.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    TemplateRepository = class {
      async getAllold() {
        return await db.select().from(templates).orderBy(desc5(templates.createdAt));
      }
      async getAllOLD() {
        return await db.select({
          id: templates.id,
          channelId: templates.channelId,
          name: templates.name,
          category: templates.category,
          language: templates.language,
          header: templates.header,
          body: templates.body,
          footer: templates.footer,
          buttons: templates.buttons,
          variables: templates.variables,
          status: templates.status,
          rejectionReason: templates.rejectionReason,
          mediaType: templates.mediaType,
          mediaUrl: templates.mediaUrl,
          mediaHandle: templates.mediaHandle,
          carouselCards: templates.carouselCards,
          whatsappTemplateId: templates.whatsappTemplateId,
          usage_count: templates.usage_count,
          createdAt: templates.createdAt,
          updatedAt: templates.updatedAt,
          createdBy: templates.createdBy,
          // 👇 FULL NAME (with safe fallback)
          createdByName: sql5`
        CONCAT(
          COALESCE(${users.firstName}, ''), 
          ' ', 
          COALESCE(${users.lastName}, '')
        )
      `.as("createdByName")
        }).from(templates).leftJoin(users, eq5(users.id, templates.createdBy)).orderBy(desc5(templates.createdAt));
      }
      async getAll(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const [{ count: count2 }] = await db.select({ count: sql5`COUNT(*)` }).from(templates);
        const total = Number(count2);
        const totalPages = Math.ceil(total / limit);
        const rows = await db.select({
          id: templates.id,
          channelId: templates.channelId,
          channelName: channels.name,
          // 👈 NEW
          name: templates.name,
          category: templates.category,
          language: templates.language,
          header: templates.header,
          body: templates.body,
          footer: templates.footer,
          buttons: templates.buttons,
          variables: templates.variables,
          status: templates.status,
          rejectionReason: templates.rejectionReason,
          mediaType: templates.mediaType,
          mediaUrl: templates.mediaUrl,
          mediaHandle: templates.mediaHandle,
          carouselCards: templates.carouselCards,
          whatsappTemplateId: templates.whatsappTemplateId,
          usage_count: templates.usage_count,
          createdAt: templates.createdAt,
          updatedAt: templates.updatedAt,
          createdBy: templates.createdBy,
          createdByName: sql5`
        CONCAT(
          COALESCE(${users.firstName}, ''), 
          ' ', 
          COALESCE(${users.lastName}, '')
        )
      `.as("createdByName")
        }).from(templates).leftJoin(users, eq5(users.id, templates.createdBy)).leftJoin(channels, eq5(channels.id, templates.channelId)).orderBy(desc5(templates.createdAt)).limit(limit).offset(offset);
        return {
          success: true,
          data: rows,
          pagination: {
            total,
            totalPages,
            page,
            limit
          }
        };
      }
      async getTemplateByUserID(userId, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const templatesData = await db.select({
          template: templates
          // return full template object
        }).from(templates).leftJoin(channels, eq5(templates.channelId, channels.id)).where(eq5(channels.createdBy, userId)).orderBy(desc5(templates.createdAt)).limit(limit).offset(offset);
        const totalResult = await db.select({
          total: sql5`COUNT(*)`
        }).from(templates).leftJoin(channels, eq5(templates.channelId, channels.id)).where(eq5(channels.createdBy, userId));
        const total = Number(totalResult[0]?.total ?? 0);
        return {
          data: templatesData.map((t) => t.template),
          // if you want only template objects
          total,
          page,
          limit
        };
      }
      async getByChannelOld(channelId) {
        return await db.select().from(templates).where(eq5(templates.channelId, channelId)).orderBy(desc5(templates.createdAt));
      }
      //   async getByChannel(
      //   channelId: string,
      //   page: number = 1,
      //   limit: number = 10
      // ): Promise<{ data: Template[]; total: number }> {
      //   const offset = (page - 1) * limit;
      //   // Get total count
      //   const total = await db
      //     .select({ count: templates.id })
      //     .from(templates)
      //     .where(eq(templates.channelId, channelId))
      //     .execute()
      //     .then((res) => Number(res[0].count));
      //   // Get paginated data
      //   const data = await db
      //     .select()
      //     .from(templates)
      //     .where(eq(templates.channelId, channelId))
      //     .orderBy(desc(templates.createdAt))
      //     .limit(limit)
      //     .offset(offset);
      //   return { data, total };
      // }
      async getByChannel(channelId, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const [{ count: count2 }] = await db.select({ count: sql5`COUNT(*)` }).from(templates).where(eq5(templates.channelId, channelId));
        const total = Number(count2);
        const data = await db.select().from(templates).where(eq5(templates.channelId, channelId)).orderBy(desc5(templates.createdAt)).limit(limit).offset(offset);
        return { data, total };
      }
      async getById(id) {
        const [template] = await db.select().from(templates).where(eq5(templates.id, id));
        return template || void 0;
      }
      async getByName(name) {
        const [template] = await db.select().from(templates).where(eq5(templates.name, name));
        return template || void 0;
      }
      async create(insertTemplate) {
        const [template] = await db.insert(templates).values(insertTemplate).returning();
        return template;
      }
      async update(id, template) {
        const [updated] = await db.update(templates).set(template).where(eq5(templates.id, id)).returning();
        return updated || void 0;
      }
      async delete(id) {
        const result = await db.delete(templates).where(eq5(templates.id, id)).returning();
        return result.length > 0;
      }
    };
  }
});

// server/repositories/conversation.repository.ts
import { sql as sql6, eq as eq6, desc as desc6 } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";
var ConversationRepository;
var init_conversation_repository = __esm({
  "server/repositories/conversation.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    ConversationRepository = class {
      buildConversationQuery(channelId) {
        const lm = alias(messages, "lm");
        const latestMessages = db.select({
          conversationId: lm.conversationId,
          createdAt: lm.createdAt,
          content: lm.content,
          rn: sql6`ROW_NUMBER() OVER (
          PARTITION BY ${lm.conversationId}
          ORDER BY ${lm.createdAt} DESC
        )`.as("rn")
        }).from(lm).as("latest_messages");
        const baseQuery = db.select({
          conversation: conversations,
          contact: contacts,
          lastMessageAt: latestMessages.createdAt,
          lastMessageText: latestMessages.content
        }).from(conversations).leftJoin(contacts, eq6(conversations.contactId, contacts.id)).leftJoin(
          latestMessages,
          sql6`${latestMessages.conversationId} = ${conversations.id} AND ${latestMessages.rn} = 1`
        );
        const query = baseQuery.where(channelId ? eq6(conversations.channelId, channelId) : sql6`true`).orderBy(
          desc6(sql6`COALESCE(${latestMessages.createdAt}, ${conversations.createdAt})`)
        );
        return query;
      }
      async getAllNew() {
        const result = await this.buildConversationQuery();
        return result.map((row) => ({
          ...row.conversation,
          contact: row.contact,
          lastMessageAt: row.lastMessageAt,
          lastMessageText: row.lastMessageText
        }));
      }
      async getByChannelNew(channelId) {
        const result = await this.buildConversationQuery(channelId);
        return result.map((row) => ({
          ...row.conversation,
          contact: row.contact,
          lastMessageAt: row.lastMessageAt,
          lastMessageText: row.lastMessageText
        }));
      }
      async getAll() {
        const result = await db.select({
          conversation: conversations,
          contact: contacts
        }).from(conversations).leftJoin(contacts, eq6(conversations.contactId, contacts.id)).orderBy(desc6(conversations.lastMessageAt));
        return result.map((row) => ({
          ...row.conversation,
          contact: row.contact
        }));
      }
      async getByChannel(channelId) {
        const result = await db.select({
          conversation: conversations,
          contact: contacts
        }).from(conversations).leftJoin(contacts, eq6(conversations.contactId, contacts.id)).where(eq6(conversations.channelId, channelId)).orderBy(desc6(conversations.lastMessageAt));
        return result.map((row) => ({
          ...row.conversation,
          contact: row.contact
        }));
      }
      async getByContact(contactId) {
        const result = await db.select({
          conversation: conversations,
          contact: contacts
        }).from(conversations).leftJoin(contacts, eq6(conversations.contactId, contacts.id)).where(eq6(conversations.contactId, contactId)).orderBy(desc6(conversations.lastMessageAt));
        return result.map((row) => ({
          ...row.conversation,
          contact: row.contact
        }));
      }
      async getBySessionId(sessionId) {
        const result = await db.select({
          conversation: conversations,
          contact: contacts
        }).from(conversations).leftJoin(contacts, eq6(conversations.contactId, contacts.id)).where(eq6(conversations.sessionId, sessionId)).orderBy(desc6(conversations.lastMessageAt));
        return result.map((row) => ({
          ...row.conversation,
          contact: row.contact
        }));
      }
      async getById(id) {
        const [conversation] = await db.select().from(conversations).where(eq6(conversations.id, id));
        return conversation || void 0;
      }
      async getByPhone(phone) {
        const [conversation] = await db.select().from(conversations).where(eq6(conversations.contactPhone, phone));
        return conversation || void 0;
      }
      async create(insertConversation) {
        const [conversation] = await db.insert(conversations).values(insertConversation).returning();
        return conversation;
      }
      async update(id, conversation) {
        const [updated] = await db.update(conversations).set(conversation).where(eq6(conversations.id, id)).returning();
        return updated || void 0;
      }
      async delete(id) {
        const result = await db.delete(conversations).where(eq6(conversations.id, id)).returning();
        return result.length > 0;
      }
      async getUnreadCount() {
        const result = await db.select({
          count: sql6`count(*)`
        }).from(conversations).where(sql6`${conversations.unreadCount} > 0`);
        return Number(result[0]?.count) || 0;
      }
    };
  }
});

// server/repositories/message.repository.ts
import { eq as eq7 } from "drizzle-orm";
var MessageRepository;
var init_message_repository = __esm({
  "server/repositories/message.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    MessageRepository = class {
      async getByConversation(conversationId) {
        return await db.select().from(messages).where(eq7(messages.conversationId, conversationId)).orderBy(messages.createdAt);
      }
      async create(insertMessage) {
        const [message] = await db.insert(messages).values(insertMessage).returning();
        return message;
      }
      async update(id, message) {
        const [updated] = await db.update(messages).set(message).where(eq7(messages.id, id)).returning();
        return updated || void 0;
      }
      async getByWhatsAppId(whatsappMessageId) {
        const [message] = await db.select().from(messages).where(eq7(messages.whatsappMessageId, whatsappMessageId));
        return message || void 0;
      }
      async getConversationMessages(conversationId) {
        const [message] = await db.select().from(messages).where(eq7(messages.conversationId, conversationId));
        return message || void 0;
      }
      async getById(id) {
        const [message] = await db.select().from(messages).where(eq7(messages.id, id));
        return message || void 0;
      }
    };
  }
});

// server/repositories/automation.repository.ts
import { eq as eq8, and as and4, desc as desc7 } from "drizzle-orm";
var AutomationRepository;
var init_automation_repository = __esm({
  "server/repositories/automation.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    AutomationRepository = class {
      // Automations CRUD
      async create(data) {
        const [automation] = await db.insert(automations).values(data).returning();
        return automation;
      }
      async findById(id) {
        const [automation] = await db.select().from(automations).where(eq8(automations.id, id));
        return automation;
      }
      async findByChannel(channelId) {
        if (!channelId) {
          return await db.select().from(automations).orderBy(desc7(automations.createdAt));
        }
        return await db.select().from(automations).where(eq8(automations.channelId, channelId)).orderBy(desc7(automations.createdAt));
      }
      async update(id, data) {
        const [automation] = await db.update(automations).set({ ...data, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(automations.id, id)).returning();
        return automation;
      }
      async delete(id) {
        await db.delete(automations).where(eq8(automations.id, id));
      }
      // Automation Nodes CRUD
      async createNode(data) {
        const [node] = await db.insert(automationNodes).values(data).returning();
        return node;
      }
      async createNodes(data) {
        if (data.length === 0) return [];
        return await db.insert(automationNodes).values(data).returning();
      }
      async findNodesByAutomation(automationId) {
        return await db.select().from(automationNodes).where(eq8(automationNodes.automationId, automationId));
      }
      async updateNode(id, data) {
        const [node] = await db.update(automationNodes).set({ ...data, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(automationNodes.id, id)).returning();
        return node;
      }
      async deleteNodesByAutomation(automationId) {
        await db.delete(automationNodes).where(eq8(automationNodes.automationId, automationId));
      }
      // Automation Executions
      async createExecution(data) {
        const [execution] = await db.insert(automationExecutions).values(data).returning();
        return execution;
      }
      async findExecutionById(id) {
        const [execution] = await db.select().from(automationExecutions).where(eq8(automationExecutions.id, id));
        return execution;
      }
      async findExecutionsByAutomation(automationId, limit = 50) {
        return await db.select().from(automationExecutions).where(eq8(automationExecutions.automationId, automationId)).orderBy(desc7(automationExecutions.startedAt)).limit(limit);
      }
      async updateExecution(id, data) {
        const [execution] = await db.update(automationExecutions).set(data).where(eq8(automationExecutions.id, id)).returning();
        return execution;
      }
      // Execution Logs
      async createExecutionLog(data) {
        const [log2] = await db.insert(automationExecutionLogs).values(data).returning();
        return log2;
      }
      async findExecutionLogs(executionId) {
        return await db.select().from(automationExecutionLogs).where(eq8(automationExecutionLogs.executionId, executionId)).orderBy(automationExecutionLogs.executedAt);
      }
      // Helper methods
      async getActiveAutomationsByTrigger(trigger, channelId) {
        const conditions = [
          eq8(automations.trigger, trigger),
          eq8(automations.status, "active")
        ];
        if (channelId) {
          conditions.push(eq8(automations.channelId, channelId));
        }
        return await db.select().from(automations).where(and4(...conditions));
      }
      async incrementExecutionCount(id) {
        const [automation] = await db.select().from(automations).where(eq8(automations.id, id));
        if (automation) {
          await db.update(automations).set({
            executionCount: automation.executionCount !== null ? automation.executionCount + 1 : null,
            lastExecutedAt: /* @__PURE__ */ new Date()
          }).where(eq8(automations.id, id));
        }
      }
    };
  }
});

// server/repositories/analytics.repository.ts
import { gte as gte2, sql as sql7 } from "drizzle-orm";
var AnalyticsRepository;
var init_analytics_repository = __esm({
  "server/repositories/analytics.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    AnalyticsRepository = class {
      async getAnalyticsByChannel(channelId, days) {
        const startDate = days ? new Date(Date.now() - days * 24 * 60 * 60 * 1e3) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
        const result = await db.select({
          date: sql7`DATE(${messages.createdAt})`,
          sent: sql7`COUNT(CASE WHEN ${messages.status} = 'sent' THEN 1 END)`,
          delivered: sql7`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`,
          read: sql7`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`,
          replied: sql7`COUNT(CASE WHEN ${messages.status} = 'replied' THEN 1 END)`,
          failed: sql7`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`
        }).from(messages).leftJoin(conversations, sql7`${messages.conversationId} = ${conversations.id}`).where(
          sql7`${conversations.channelId} = ${channelId} AND ${messages.createdAt} >= ${startDate}`
        ).groupBy(sql7`DATE(${messages.createdAt})`).orderBy(sql7`DATE(${messages.createdAt})`);
        return result.map((row) => ({
          id: `analytics-${channelId}-${row.date.toISOString()}`,
          channelId: channelId ?? null,
          date: row.date,
          messagesSent: row.sent ?? null,
          messagesDelivered: row.delivered ?? null,
          messagesRead: row.read ?? null,
          messagesReplied: row.replied ?? null,
          createdAt: /* @__PURE__ */ new Date(),
          newContacts: null,
          activeCampaigns: null
        }));
      }
      async getAnalytics(days) {
        const startDate = days ? new Date(Date.now() - days * 24 * 60 * 60 * 1e3) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
        const result = await db.select({
          date: sql7`DATE(${messages.createdAt})`,
          sent: sql7`COUNT(CASE WHEN ${messages.status} = 'sent' THEN 1 END)`,
          delivered: sql7`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`,
          read: sql7`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`,
          replied: sql7`COUNT(CASE WHEN ${messages.status} = 'replied' THEN 1 END)`,
          failed: sql7`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`
        }).from(messages).where(gte2(messages.createdAt, startDate)).groupBy(sql7`DATE(${messages.createdAt})`).orderBy(sql7`DATE(${messages.createdAt})`);
        return result.map((row) => ({
          id: `analytics-${row.date.toISOString()}`,
          channelId: null,
          // must be string | null
          date: row.date,
          messagesTotal: Number(row.sent) + Number(row.delivered) + Number(row.read) + Number(row.replied) + Number(row.failed),
          messagesSent: Number(row.sent) ?? null,
          messagesDelivered: Number(row.delivered) ?? null,
          messagesRead: Number(row.read) ?? null,
          messagesReplied: Number(row.replied) ?? null,
          messagesFailed: Number(row.failed) ?? null,
          createdAt: /* @__PURE__ */ new Date() ?? null,
          newContacts: null,
          activeCampaigns: null
          // remove updatedAt since it's not in the type
        }));
      }
      async createOrUpdate(insertAnalytics) {
        const [result] = await db.insert(analytics).values(insertAnalytics).onConflictDoUpdate({
          target: [analytics.channelId, analytics.date],
          set: {
            messagesSent: insertAnalytics.messagesSent,
            messagesDelivered: insertAnalytics.messagesDelivered,
            messagesRead: insertAnalytics.messagesRead,
            messagesReplied: insertAnalytics.messagesReplied
          }
        }).returning();
        return result;
      }
      async deleteOldAnalytics(daysToKeep) {
        const cutoffDate = new Date(Date.now() - daysToKeep * 24 * 60 * 60 * 1e3);
        await db.delete(analytics).where(gte2(analytics.date, cutoffDate));
      }
    };
  }
});

// server/repositories/webhook-config.repository.ts
import { eq as eq9, and as and5 } from "drizzle-orm";
var WebhookConfigRepository;
var init_webhook_config_repository = __esm({
  "server/repositories/webhook-config.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    WebhookConfigRepository = class {
      async getAll() {
        return await db.select().from(webhookConfigs);
      }
      async getById(id) {
        const [config2] = await db.select().from(webhookConfigs).where(eq9(webhookConfigs.id, id));
        return config2 || void 0;
      }
      async getByChannelAndType(channelId, type) {
        const [config2] = await db.select().from(webhookConfigs).where(
          and5(
            eq9(webhookConfigs.channelId, channelId)
          )
        );
        return config2 || void 0;
      }
      async create(insertConfig) {
        const [config2] = await db.insert(webhookConfigs).values(insertConfig).returning();
        return config2;
      }
      async update(id, config2) {
        const [updated] = await db.update(webhookConfigs).set(config2).where(eq9(webhookConfigs.id, id)).returning();
        return updated || void 0;
      }
      async delete(id) {
        const result = await db.delete(webhookConfigs).where(eq9(webhookConfigs.id, id)).returning();
        return result.length > 0;
      }
      async getAllByChannel(channelId) {
        return await db.select().from(webhookConfigs).where(eq9(webhookConfigs.channelId, channelId));
      }
    };
  }
});

// server/repositories/message-queue.repository.ts
import { eq as eq10, desc as desc9, sql as sql8 } from "drizzle-orm";
import { startOfDay as startOfDay2, startOfMonth, subMonths } from "date-fns";
var MessageQueueRepository;
var init_message_queue_repository = __esm({
  "server/repositories/message-queue.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    MessageQueueRepository = class {
      async getByChannel(channelId) {
        return await db.select().from(messageQueue).where(eq10(messageQueue.channelId, channelId)).orderBy(desc9(messageQueue.createdAt));
      }
      async getPending() {
        return await db.select().from(messageQueue).where(eq10(messageQueue.status, "pending")).orderBy(messageQueue.createdAt);
      }
      // async getMessagesToCheck(): Promise<MessageQueue[]> {
      //   const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
      //   return await db
      //     .select()
      //     .from(messages)
      //     .where(
      //       and(
      //         eq(messages.type, 'outgoing'),
      //         eq(messages.status, 'sent'),
      //         lt(messages.createdAt, tenMinutesAgo)
      //       )
      //     )
      //     .orderBy(messages.createdAt);
      // }
      async create(insertMessage) {
        const [message] = await db.insert(messageQueue).values(insertMessage).returning();
        return message;
      }
      async createBulk(insertMessages) {
        if (insertMessages.length === 0) return [];
        return await db.insert(messageQueue).values(insertMessages).returning();
      }
      async update(id, message) {
        const [updated] = await db.update(messageQueue).set(message).where(eq10(messageQueue.id, id)).returning();
        return updated || void 0;
      }
      async updateByWhatsAppId(whatsappMessageId, updates) {
        const result = await db.update(messageQueue).set(updates).where(eq10(messageQueue.whatsappMessageId, whatsappMessageId)).returning();
        return result.length > 0;
      }
      async getByCampaign(campaignId) {
        return await db.select().from(messageQueue).where(eq10(messageQueue.campaignId, campaignId)).orderBy(desc9(messageQueue.createdAt));
      }
      async getMessageStats() {
        const now = /* @__PURE__ */ new Date();
        const thisMonthStart = startOfMonth(now);
        const lastMonthStart = startOfMonth(subMonths(now, 1));
        const lastMonthEnd = thisMonthStart;
        const todayStart = startOfDay2(now);
        const result = await db.select({
          messagesSent: sql8`COUNT(CASE WHEN ${messages.status} = 'sent' THEN 1 END)`.mapWith(Number),
          messagesDelivered: sql8`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`.mapWith(Number),
          messagesFailed: sql8`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`.mapWith(Number),
          messagesRead: sql8`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`.mapWith(Number),
          totalMessages: sql8`COUNT(*)`.mapWith(Number),
          todayMessages: sql8`
        COUNT(CASE WHEN ${messages.createdAt} >= ${todayStart} THEN 1 END)
      `.mapWith(Number),
          thisMonthMessages: sql8`
        COUNT(CASE WHEN ${messages.createdAt} >= ${thisMonthStart} THEN 1 END)
      `.mapWith(Number),
          lastMonthMessages: sql8`
        COUNT(
          CASE WHEN ${messages.createdAt} >= ${lastMonthStart}
          AND ${messages.createdAt} < ${lastMonthEnd}
          THEN 1 END
        )
      `.mapWith(Number)
        }).from(messages);
        return result[0] || {
          messagesSent: 0,
          messagesDelivered: 0,
          messagesFailed: 0,
          messagesRead: 0,
          totalMessages: 0,
          todayMessages: 0,
          thisMonthMessages: 0,
          lastMonthMessages: 0
        };
      }
      async getMessageStatsOld() {
        const now = /* @__PURE__ */ new Date();
        const thisMonthStart = startOfMonth(now);
        const lastMonthStart = startOfMonth(subMonths(now, 1));
        const lastMonthEnd = thisMonthStart;
        const todayStart = startOfDay2(now);
        const result = await db.select({
          // Status-wise counts
          messagesSent: sql8`COUNT(CASE WHEN ${messageQueue.status} = 'sent' THEN 1 END)`.mapWith(Number),
          messagesDelivered: sql8`COUNT(CASE WHEN ${messageQueue.status} = 'delivered' THEN 1 END)`.mapWith(Number),
          messagesFailed: sql8`COUNT(CASE WHEN ${messageQueue.status} = 'failed' THEN 1 END)`.mapWith(Number),
          messagesRead: sql8`COUNT(CASE WHEN ${messageQueue.status} = 'read' THEN 1 END)`.mapWith(Number),
          // Total (all messages)
          totalMessages: sql8`COUNT(*)`.mapWith(Number),
          todayMessages: sql8`
        COUNT(CASE WHEN ${messageQueue.createdAt} >= ${todayStart} THEN 1 END)
      `.mapWith(Number),
          // This month (all statuses)
          thisMonthMessages: sql8`
          COUNT(CASE WHEN ${messageQueue.createdAt} >= ${thisMonthStart} THEN 1 END)
        `.mapWith(Number),
          // Last month (all statuses)
          lastMonthMessages: sql8`
          COUNT(CASE WHEN ${messageQueue.createdAt} >= ${lastMonthStart}
                     AND ${messageQueue.createdAt} < ${lastMonthEnd}
          THEN 1 END)
        `.mapWith(Number)
        }).from(messageQueue);
        return result[0] || {
          messagesSent: 0,
          messagesDelivered: 0,
          messagesFailed: 0,
          messagesRead: 0,
          totalMessages: 0,
          todayMessages: 0,
          thisMonthMessages: 0,
          lastMonthMessages: 0
        };
      }
      async getMessageStatsByChannel(channelId) {
        const now = /* @__PURE__ */ new Date();
        const thisMonthStart = startOfMonth(now);
        const lastMonthStart = startOfMonth(subMonths(now, 1));
        const lastMonthEnd = thisMonthStart;
        const todayStart = startOfDay2(now);
        const result = await db.select({
          messagesSent: sql8`COUNT(CASE WHEN ${messages.status} = 'sent' THEN 1 END)`.mapWith(Number),
          messagesDelivered: sql8`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`.mapWith(Number),
          messagesFailed: sql8`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`.mapWith(Number),
          messagesRead: sql8`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`.mapWith(Number),
          totalMessages: sql8`COUNT(*)`.mapWith(Number),
          todayMessages: sql8`COUNT(CASE WHEN ${messages.createdAt} >= ${todayStart} THEN 1 END)`.mapWith(Number),
          thisMonthMessages: sql8`COUNT(CASE WHEN ${messages.createdAt} >= ${thisMonthStart} THEN 1 END)`.mapWith(Number),
          lastMonthMessages: sql8`COUNT(CASE WHEN ${messages.createdAt} >= ${lastMonthStart} AND ${messages.createdAt} < ${lastMonthEnd} THEN 1 END)`.mapWith(Number)
        }).from(messages).innerJoin(conversations, eq10(messages.conversationId, conversations.id)).where(eq10(conversations.channelId, channelId));
        return result[0] || {
          messagesSent: 0,
          messagesDelivered: 0,
          messagesFailed: 0,
          totalMessages: 0,
          messagesRead: 0,
          thisMonthMessages: 0,
          todayMessages: 0,
          lastMonthMessages: 0
        };
      }
    };
  }
});

// server/repositories/api-log.repository.ts
import { eq as eq11, desc as desc10 } from "drizzle-orm";
var ApiLogRepository;
var init_api_log_repository = __esm({
  "server/repositories/api-log.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    ApiLogRepository = class {
      async create(insertLog) {
        const [log2] = await db.insert(apiLogs).values(insertLog).returning();
        return log2;
      }
      async getRecent(limit = 100) {
        return await db.select().from(apiLogs).orderBy(desc10(apiLogs.createdAt)).limit(limit);
      }
      async getByChannel(channelId, limit = 100) {
        return await db.select().from(apiLogs).where(eq11(apiLogs.channelId, channelId)).orderBy(desc10(apiLogs.createdAt)).limit(limit);
      }
    };
  }
});

// server/repositories/whatsapp-channel.repository.ts
import { eq as eq12 } from "drizzle-orm";
var WhatsappChannelRepository;
var init_whatsapp_channel_repository = __esm({
  "server/repositories/whatsapp-channel.repository.ts"() {
    "use strict";
    init_db();
    init_schema();
    WhatsappChannelRepository = class {
      async getByChannelId(channelId) {
        const [channel] = await db.select().from(whatsappChannels).where(eq12(whatsappChannels.id, channelId));
        return channel || void 0;
      }
      async create(insertChannel) {
        const [channel] = await db.insert(whatsappChannels).values(insertChannel).returning();
        return channel;
      }
      async update(id, channel) {
        const [updated] = await db.update(whatsappChannels).set(channel).where(eq12(whatsappChannels.id, id)).returning();
        return updated || void 0;
      }
      async delete(id) {
        const result = await db.delete(whatsappChannels).where(eq12(whatsappChannels.id, id)).returning();
        return result.length > 0;
      }
    };
  }
});

// server/controllers/subscriptions.controller.ts
import { eq as eq13, and as and7, desc as desc11, lt as lt3, sql as sql9 } from "drizzle-orm";
var getAllSubscriptions, getActivePaidUsersCount, getSubscriptionById, getSubscriptionsByUserId, getActiveSubscriptionByUserId, createSubscription, updateSubscription, cancelSubscription, renewSubscription, toggleAutoRenew, checkExpiredSubscriptions;
var init_subscriptions_controller = __esm({
  "server/controllers/subscriptions.controller.ts"() {
    "use strict";
    init_db();
    init_schema();
    getAllSubscriptions = async (req, res) => {
      try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const [{ count: count2 }] = await db.select({ count: sql9`COUNT(*)` }).from(subscriptions);
        const total = Number(count2);
        const totalPages = Math.ceil(total / limit);
        const paginatedSubscriptions = await db.select({
          subscription: subscriptions,
          user: {
            id: users.id,
            username: users.username
          },
          plan: {
            id: plans.id,
            name: plans.name,
            description: plans.description,
            icon: plans.icon,
            monthlyPrice: plans.monthlyPrice,
            annualPrice: plans.annualPrice,
            features: plans.features,
            permissions: plans.permissions
          }
        }).from(subscriptions).leftJoin(users, eq13(subscriptions.userId, users.id)).leftJoin(plans, eq13(subscriptions.planId, plans.id)).orderBy(desc11(subscriptions.createdAt)).limit(limit).offset(offset);
        res.status(200).json({
          success: true,
          data: paginatedSubscriptions,
          pagination: {
            total,
            totalPages,
            page,
            limit
          }
        });
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        res.status(500).json({
          success: false,
          message: "Error fetching subscriptions",
          error
        });
      }
    };
    getActivePaidUsersCount = async () => {
      const activeSubs = await db.select({ userId: subscriptions.userId }).from(subscriptions).where(eq13(subscriptions.status, "active"));
      return new Set(activeSubs.map((s) => s.userId)).size;
    };
    getSubscriptionById = async (req, res) => {
      try {
        const { id } = req.params;
        const subscription = await db.select({
          subscription: subscriptions,
          user: users,
          plan: plans
        }).from(subscriptions).leftJoin(users, eq13(subscriptions.userId, users.id)).leftJoin(plans, eq13(subscriptions.planId, plans.id)).where(eq13(subscriptions.id, id));
        if (subscription.length === 0) {
          return res.status(404).json({ success: false, message: "Subscription not found" });
        }
        res.status(200).json({ success: true, data: subscription[0] });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching subscription", error });
      }
    };
    getSubscriptionsByUserId = async (req, res) => {
      try {
        const { userId } = req.params;
        const userSubscriptions = await db.select({
          subscription: subscriptions,
          user: {
            id: users.id,
            username: users.username
            // select username
          }
        }).from(subscriptions).leftJoin(users, eq13(subscriptions.userId, users.id)).where(eq13(subscriptions.userId, userId)).orderBy(desc11(subscriptions.createdAt));
        res.status(200).json({ success: true, data: userSubscriptions });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching user subscriptions", error });
      }
    };
    getActiveSubscriptionByUserId = async (req, res) => {
      try {
        const { userId } = req.params;
        const activeSubscription = await db.select({
          subscription: subscriptions,
          plan: plans
        }).from(subscriptions).leftJoin(plans, eq13(subscriptions.planId, plans.id)).where(
          and7(
            eq13(subscriptions.userId, userId),
            eq13(subscriptions.status, "active")
          )
        ).orderBy(desc11(subscriptions.createdAt)).limit(1);
        if (activeSubscription.length === 0) {
          return res.status(404).json({ success: false, message: "No active subscription found" });
        }
        res.status(200).json({ success: true, data: activeSubscription[0] });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching active subscription", error });
      }
    };
    createSubscription = async (req, res) => {
      try {
        const {
          userId,
          planId,
          billingCycle,
          startDate,
          endDate,
          autoRenew
        } = req.body;
        const newSubscription = await db.insert(subscriptions).values({
          userId,
          planId,
          status: "active",
          billingCycle,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          autoRenew: autoRenew ?? true
        }).returning();
        res.status(201).json({
          success: true,
          message: "Subscription created successfully",
          data: newSubscription[0]
        });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error creating subscription", error });
      }
    };
    updateSubscription = async (req, res) => {
      try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedSubscription = await db.update(subscriptions).set({ ...updateData, updatedAt: /* @__PURE__ */ new Date() }).where(eq13(subscriptions.id, id)).returning();
        if (updatedSubscription.length === 0) {
          return res.status(404).json({ success: false, message: "Subscription not found" });
        }
        res.status(200).json({
          success: true,
          message: "Subscription updated successfully",
          data: updatedSubscription[0]
        });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error updating subscription", error });
      }
    };
    cancelSubscription = async (req, res) => {
      try {
        const { id } = req.params;
        const cancelledSubscription = await db.update(subscriptions).set({
          status: "cancelled",
          autoRenew: false,
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq13(subscriptions.id, id)).returning();
        if (cancelledSubscription.length === 0) {
          return res.status(404).json({ success: false, message: "Subscription not found" });
        }
        res.status(200).json({
          success: true,
          message: "Subscription cancelled successfully",
          data: cancelledSubscription[0]
        });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error cancelling subscription", error });
      }
    };
    renewSubscription = async (req, res) => {
      try {
        const { id } = req.params;
        const currentSub = await db.select().from(subscriptions).where(eq13(subscriptions.id, id));
        if (currentSub.length === 0) {
          return res.status(404).json({ success: false, message: "Subscription not found" });
        }
        const subscription = currentSub[0];
        const newStartDate = /* @__PURE__ */ new Date();
        const newEndDate = /* @__PURE__ */ new Date();
        if (subscription.billingCycle === "annual") {
          newEndDate.setFullYear(newEndDate.getFullYear() + 1);
        } else {
          newEndDate.setMonth(newEndDate.getMonth() + 1);
        }
        const renewedSubscription = await db.update(subscriptions).set({
          status: "active",
          startDate: newStartDate,
          endDate: newEndDate,
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq13(subscriptions.id, id)).returning();
        res.status(200).json({
          success: true,
          message: "Subscription renewed successfully",
          data: renewedSubscription[0]
        });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error renewing subscription", error });
      }
    };
    toggleAutoRenew = async (req, res) => {
      try {
        const { id } = req.params;
        const { autoRenew } = req.body;
        const updatedSubscription = await db.update(subscriptions).set({ autoRenew, updatedAt: /* @__PURE__ */ new Date() }).where(eq13(subscriptions.id, id)).returning();
        if (updatedSubscription.length === 0) {
          return res.status(404).json({ success: false, message: "Subscription not found" });
        }
        res.status(200).json({
          success: true,
          message: `Auto-renew ${autoRenew ? "enabled" : "disabled"} successfully`,
          data: updatedSubscription[0]
        });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error toggling auto-renew", error });
      }
    };
    checkExpiredSubscriptions = async (req, res) => {
      try {
        const now = /* @__PURE__ */ new Date();
        const expiredSubscriptions = await db.update(subscriptions).set({ status: "expired", updatedAt: /* @__PURE__ */ new Date() }).where(
          and7(
            eq13(subscriptions.status, "active"),
            lt3(subscriptions.endDate, now)
          )
        ).returning();
        res.status(200).json({
          success: true,
          message: `${expiredSubscriptions.length} subscriptions marked as expired`,
          data: expiredSubscriptions
        });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error checking expired subscriptions", error });
      }
    };
  }
});

// server/database-storage.ts
import { eq as eq14 } from "drizzle-orm";
var DatabaseStorage;
var init_database_storage = __esm({
  "server/database-storage.ts"() {
    "use strict";
    init_user_repository();
    init_contact_repository();
    init_campaign_repository();
    init_channel_repository();
    init_template_repository();
    init_conversation_repository();
    init_message_repository();
    init_automation_repository();
    init_analytics_repository();
    init_webhook_config_repository();
    init_message_queue_repository();
    init_api_log_repository();
    init_whatsapp_channel_repository();
    init_subscriptions_controller();
    init_schema();
    init_db();
    DatabaseStorage = class {
      constructor() {
        this.userRepo = new UserRepository();
        this.contactRepo = new ContactRepository();
        this.campaignRepo = new CampaignRepository();
        this.channelRepo = new ChannelRepository();
        this.templateRepo = new TemplateRepository();
        this.conversationRepo = new ConversationRepository();
        this.messageRepo = new MessageRepository();
        this.automationRepo = new AutomationRepository();
        this.analyticsRepo = new AnalyticsRepository();
        this.webhookConfigRepo = new WebhookConfigRepository();
        this.messageQueueRepo = new MessageQueueRepository();
        this.apiLogRepo = new ApiLogRepository();
        this.whatsappChannelRepo = new WhatsappChannelRepository();
      }
      // Sites
      async getSite(id) {
        console.log("check IDDDDDDDDDDDd", id);
        const [site] = await db.select().from(sites).where(eq14(sites.id, id));
        console.log("check siteeeeeeeeee", site);
        return site || void 0;
      }
      async getSites() {
        const [site] = await db.select().from(sites);
        return site || [];
      }
      async getSitesByChannel(channelId) {
        return await db.select().from(sites).where(eq14(sites.channelId, channelId));
      }
      async createSite(insertSite) {
        const widgetCode = `wc_${Date.now()}_${Math.random().toString(36).substring(7)}`;
        const [site] = await db.insert(sites).values({ ...insertSite, widgetCode }).returning();
        return site;
      }
      async updateSite(id, data) {
        const [site] = await db.update(sites).set(data).where(eq14(sites.id, id)).returning();
        return site;
      }
      // Returns statistics of message queue
      async getMessageQueueStats() {
        return { queued: 0, processing: 0, sent: 0, delivered: 0, failed: 0 };
      }
      // Returns queued messages
      async getQueuedMessages(limit = 10) {
        return [];
      }
      // Returns message queue object (stub)
      async getMessageQueue() {
        return {};
      }
      // Logs API request
      async logApiRequest(log2) {
        return null;
      }
      async getAutomationByChannel(channelId) {
        return [];
      }
      async getWhatsappChannels() {
        return [];
      }
      async deleteWhatsappChannel(id) {
        await this.whatsappChannelRepo.delete(id);
      }
      // Users
      async getUser(id) {
        return this.userRepo.getById(id);
      }
      async getPermissions(id) {
        return this.userRepo.getByPermissions(id);
      }
      async getUserByUsername(username) {
        return this.userRepo.getByUsername(username);
      }
      async createUser(insertUser) {
        return this.userRepo.create(insertUser);
      }
      async getAllUsers() {
        return this.userRepo.getAll();
      }
      // Contacts
      async getContacts() {
        return this.contactRepo.getAll();
      }
      async getContactsByUser(userId, page = 1, limit = 10) {
        return this.contactRepo.getContactsByUserId(userId, page, limit);
      }
      async getContactsByChannel(channelId) {
        return this.contactRepo.getByChannel(channelId);
      }
      async getContactsByTenant(tenantId) {
        return this.contactRepo.getContactsByTenant(tenantId);
      }
      async getContactByEmail(email) {
        return this.contactRepo.getContactByEmail(email);
      }
      async getContactsByPhone(phone) {
        return this.contactRepo.getContactByPhone(phone);
      }
      async searchContactsByChannel(channelId) {
        return this.contactRepo.getByChannel(channelId);
      }
      async getContact(id) {
        return this.contactRepo.getById(id);
      }
      async getContactByPhone(phone) {
        return this.contactRepo.getByPhone(phone);
      }
      // async createContact(insertContact: InsertContact): Promise<Contact> {
      //   return this.contactRepo.create(insertContact);
      // }
      async createContact(insertContact) {
        if (!insertContact.channelId) {
          throw new Error("Cannot create contact without a channel. Please create a channel first.");
        }
        return this.contactRepo.create(insertContact);
      }
      async updateContact(id, contact) {
        return this.contactRepo.update(id, contact);
      }
      async deleteContact(id) {
        return this.contactRepo.delete(id);
      }
      async searchContacts(query) {
        return this.contactRepo.search(query);
      }
      async createBulkContacts(insertContacts) {
        return this.contactRepo.createBulk(insertContacts);
      }
      async checkExistingPhones(phones, channelId) {
        return this.contactRepo.checkExistingPhones(phones, channelId);
      }
      // Campaigns
      async getCampaigns(page = 1, limit = 10) {
        return this.campaignRepo.getAll(page, limit);
      }
      async getCampaignsByChannel(channelId, page = 1, limit = 10) {
        return this.campaignRepo.getByChannel(channelId, page, limit);
      }
      async getCampaign(id) {
        return this.campaignRepo.getById(id);
      }
      async getCampaignByUserId(userId, page = 1, limit = 10) {
        return this.campaignRepo.getCampaignByUserId(userId, page, limit);
      }
      async createCampaign(insertCampaign) {
        return this.campaignRepo.create(insertCampaign);
      }
      async updateCampaign(id, campaign) {
        return this.campaignRepo.update(id, campaign);
      }
      async deleteCampaign(id) {
        return this.campaignRepo.delete(id);
      }
      // Channels
      async getChannels() {
        return this.channelRepo.getAll();
      }
      async getChannel(id) {
        return this.channelRepo.getById(id);
      }
      async getChannelsByUserId(userId) {
        return this.channelRepo.getAllByUserId(userId);
      }
      async getActiveChannelByUserId(userId) {
        return this.channelRepo.getActiveByUserId(userId);
      }
      async getChannelsByUser(userId, page = 1, limit = 10) {
        return this.channelRepo.getByUser(userId, page, limit);
      }
      async getChannelByPhoneNumberId(phoneNumberId) {
        return this.channelRepo.getByPhoneNumberId(phoneNumberId);
      }
      async createChannel(insertChannel) {
        return this.channelRepo.create(insertChannel);
      }
      async updateChannel(id, channel) {
        return this.channelRepo.update(id, channel);
      }
      async deleteChannel(id) {
        return this.channelRepo.delete(id);
      }
      async getActiveChannel() {
        return this.channelRepo.getActive();
      }
      // Templates
      // async getTemplates(): Promise<Template[]> {
      //   return this.templateRepo.getAll();
      // }
      // database-storage.ts
      async getTemplates(page = 1, limit = 10) {
        const result = await this.templateRepo.getAll(page, limit);
        return {
          data: result.data,
          pagination: result.pagination
        };
      }
      async getTemplatesByUserId(userId, page = 1, limit = 10) {
        return this.templateRepo.getTemplateByUserID(userId, page, limit);
      }
      async getTemplatesByChannelAndUser(channelId, userId) {
        const channel = await this.getChannel(channelId);
        if (!channel || channel.createdBy !== userId) {
          return [];
        }
        const allTemplates = await this.templateRepo.getAll();
        return allTemplates.filter((template) => template.channelId === channelId).sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
      }
      async getTemplatesByChannelOLd(channelId) {
        return this.templateRepo.getByChannel(channelId);
      }
      async getTemplatesByChannel(channelId, page = 1, limit = 10) {
        return this.templateRepo.getByChannel(channelId, page, limit);
      }
      async getTemplatesByName(name) {
        const templates2 = await this.templateRepo.getByName(name);
        return templates2 ? Array.isArray(templates2) ? templates2 : [templates2] : [];
      }
      async getTemplate(id) {
        return this.templateRepo.getById(id);
      }
      async createTemplate(insertTemplate) {
        return this.templateRepo.create(insertTemplate);
      }
      async updateTemplate(id, template) {
        return this.templateRepo.update(id, template);
      }
      async deleteTemplate(id) {
        return this.templateRepo.delete(id);
      }
      // Conversations
      async getConversations() {
        return this.conversationRepo.getAll();
      }
      async getConversationBySessionId(sessionId) {
        return this.conversationRepo.getBySessionId(sessionId);
      }
      async getConversationsByChannel(channelId) {
        return this.conversationRepo.getByChannel(channelId);
      }
      async getConversationsByContact(contactId) {
        return this.conversationRepo.getByContact(contactId);
      }
      async getConversationsNew() {
        return this.conversationRepo.getAllNew();
      }
      async getConversationsByChannelNew(channelId) {
        return this.conversationRepo.getByChannelNew(channelId);
      }
      async getConversation(id) {
        return this.conversationRepo.getById(id);
      }
      async getConversationByPhone(phone) {
        return this.conversationRepo.getByPhone(phone);
      }
      async createConversation(insertConversation) {
        return this.conversationRepo.create(insertConversation);
      }
      async updateConversation(id, conversation) {
        return this.conversationRepo.update(id, conversation);
      }
      async deleteConversation(id) {
        return this.conversationRepo.delete(id);
      }
      async getUnreadConversationsCount() {
        return this.conversationRepo.getUnreadCount();
      }
      // Messages
      async getMessages(conversationId) {
        return this.messageRepo.getByConversation(conversationId);
      }
      async createMessage(insertMessage) {
        return this.messageRepo.create(insertMessage);
      }
      async updateMessage(id, message) {
        return this.messageRepo.update(id, message);
      }
      async getMessageByWhatsAppId(whatsappMessageId) {
        return this.messageRepo.getByWhatsAppId(whatsappMessageId);
      }
      async getConversationMessages(conversationId) {
        return this.messageRepo.getByConversation(conversationId);
      }
      async getMessage(id) {
        return this.messageRepo.getById(id);
      }
      // Automations
      async getAutomations() {
        return this.automationRepo.findByChannel("");
      }
      async getAutomationsByChannel(channelId) {
        return this.automationRepo.findByChannel(channelId);
      }
      async getAutomation(id) {
        return this.automationRepo.findById(id);
      }
      async createAutomation(insertAutomation) {
        return this.automationRepo.create(insertAutomation);
      }
      async updateAutomation(id, automation) {
        const result = await this.automationRepo.update(id, automation);
        return result || void 0;
      }
      async deleteAutomation(id) {
        await this.automationRepo.delete(id);
        return true;
      }
      // Analytics
      // async getAnalytics(days?: number): Promise<Analytics[]> {
      //   return this.analyticsRepo.getAnalytics(days);
      // }
      async createOrUpdateAnalytics(insertAnalytics) {
        return this.analyticsRepo.createOrUpdate(insertAnalytics);
      }
      async deleteOldAnalytics(daysToKeep) {
        return this.analyticsRepo.deleteOldAnalytics(daysToKeep);
      }
      // WhatsApp Channels
      async getWhatsappChannel(channelId) {
        return this.whatsappChannelRepo.getByChannelId(channelId);
      }
      async createWhatsappChannel(insertChannel) {
        return this.whatsappChannelRepo.create(insertChannel);
      }
      async updateWhatsappChannel(id, channel) {
        return this.whatsappChannelRepo.update(id, channel);
      }
      // Webhook Configs
      async getWebhookConfigs() {
        return this.webhookConfigRepo.getAll();
      }
      async getWebhookConfig(id) {
        return this.webhookConfigRepo.getById(id);
      }
      async createWebhookConfig(insertConfig) {
        return this.webhookConfigRepo.create(insertConfig);
      }
      async updateWebhookConfig(id, config2) {
        return this.webhookConfigRepo.update(id, config2);
      }
      async deleteWebhookConfig(id) {
        return this.webhookConfigRepo.delete(id);
      }
      // Message Queue
      async getMessageQueueByChannel(channelId) {
        return this.messageQueueRepo.getByChannel(channelId);
      }
      async getPendingMessages() {
        return this.messageQueueRepo.getPending();
      }
      // async getMessagesToCheck(): Promise<MessageQueue[]> {
      //   return this.messageQueueRepo.getMessagesToCheck();
      // }
      async createMessageQueueItem(insertMessage) {
        return this.messageQueueRepo.create(insertMessage);
      }
      async createBulkMessageQueue(insertMessages) {
        return this.messageQueueRepo.createBulk(insertMessages);
      }
      async updateMessageQueueItem(id, message) {
        return this.messageQueueRepo.update(id, message);
      }
      async updateMessageQueueByWhatsAppId(whatsappMessageId, updates) {
        return this.messageQueueRepo.updateByWhatsAppId(whatsappMessageId, updates);
      }
      async getMessageQueueByCampaign(campaignId) {
        return this.messageQueueRepo.getByCampaign(campaignId);
      }
      // async getMessagesForRetry(limit: number = 100): Promise<MessageQueue[]> {
      //   return this.messageQueueRepo.getForRetry(limit);
      // }
      // API Logs
      async createApiLog(insertLog) {
        return this.apiLogRepo.create(insertLog);
      }
      async getApiLogs(channelId, limit) {
        return this.apiLogRepo.getByChannel(channelId, limit);
      }
      // Analytics
      async getAnalyticsByChannel(channelId, days) {
        return this.analyticsRepo.getAnalyticsByChannel(channelId, days);
      }
      async getAnalytics() {
        return this.analyticsRepo.getAnalytics();
      }
      async createAnalytics(insertAnalytics) {
        return this.analyticsRepo.createOrUpdate(insertAnalytics);
      }
      // Dashboard Stats
      async getDashboardStats() {
        const { totalCount, todayCount, weekCount, lastWeekCount } = await this.contactRepo.getContactStats();
        const totalCampaigns = await this.campaignRepo.getAllCampaignCount();
        const totalTemplates = await this.templateRepo.getAll().then((t) => t.length);
        const messageStats = await this.messageQueueRepo.getMessageStats();
        const totalUsers = await this.userRepo.getAll().then((users4) => users4.filter((user) => user.role === "admin").length);
        const totalActiveUsers = (await this.userRepo.getAll().then((users4) => users4.filter((user) => user.role === "admin" && user.status === "active"))).length;
        const totalBlockedUsers = (await this.userRepo.getAll().then((users4) => users4.filter((user) => user.role === "admin" && user.status === "blocked"))).length;
        const today = /* @__PURE__ */ new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const users3 = await this.userRepo.getAll();
        const todaySignups = users3.filter(
          (user) => user.role === "admin" && new Date(user.createdAt) >= today && new Date(user.createdAt) < tomorrow
        ).length;
        const totalChannels = await this.channelRepo.getAll().then((c) => c.length);
        const totalPaidUsers = await getActivePaidUsersCount();
        return {
          totalContacts: totalCount,
          todayContacts: todayCount,
          weekContacts: weekCount,
          lastWeekContacts: lastWeekCount,
          totalCampaigns,
          totalTemplates,
          totalUsers,
          totalActiveUsers,
          totalBlockedUsers,
          todaySignups,
          totalChannels,
          totalPaidUsers,
          ...messageStats
        };
      }
      async getDashboardStatsByChannel(channelId, userId) {
        const { totalCount, todayCount, weekCount, lastWeekCount } = await this.contactRepo.getContactStats(channelId);
        const totalCampaigns = await this.campaignRepo.getByChannel(channelId).then((c) => c.length);
        const totalTemplates = await this.templateRepo.getByChannel(channelId).then((t) => t.length);
        const totalTemplatesByUserId = await this.templateRepo.getTemplateByUserID(userId);
        const messageStats = await this.messageQueueRepo.getMessageStatsByChannel(
          channelId
        );
        const totalChannels = await this.channelRepo.getTotalChannelsByUser(userId);
        const totalTeamMembers = await this.userRepo.getTeamUsersCountByCreator(userId);
        return {
          totalContacts: Number(totalCount),
          todayContacts: Number(todayCount),
          weekContacts: Number(weekCount),
          lastWeekContacts: Number(lastWeekCount),
          totalCampaigns,
          totalTemplates,
          totalChannels,
          totalTeamMembers,
          totalTemplatesByUserId: totalTemplatesByUserId.total,
          ...messageStats
        };
      }
    };
  }
});

// server/storage.ts
var storage_exports = {};
__export(storage_exports, {
  MemStorage: () => MemStorage,
  storage: () => storage
});
import { randomUUID } from "crypto";
var MemStorage, storage;
var init_storage = __esm({
  "server/storage.ts"() {
    "use strict";
    init_database_storage();
    MemStorage = class {
      constructor() {
        this.users = /* @__PURE__ */ new Map();
        this.contacts = /* @__PURE__ */ new Map();
        this.campaigns = /* @__PURE__ */ new Map();
        this.channels = /* @__PURE__ */ new Map();
        this.templates = /* @__PURE__ */ new Map();
        this.conversations = /* @__PURE__ */ new Map();
        this.messages = /* @__PURE__ */ new Map();
        this.automations = /* @__PURE__ */ new Map();
        this.analytics = /* @__PURE__ */ new Map();
        this.whatsappChannels = /* @__PURE__ */ new Map();
        this.webhookConfigs = /* @__PURE__ */ new Map();
        this.messageQueues = /* @__PURE__ */ new Map();
        this.apiLogs = /* @__PURE__ */ new Map();
        this.initializeSampleData();
      }
      initializeSampleData() {
        const today = /* @__PURE__ */ new Date();
        const analyticsEntry = {
          id: randomUUID(),
          channelId: "default-channel",
          date: today,
          messagesSent: 0,
          messagesDelivered: 0,
          messagesRead: 0,
          messagesReplied: 0,
          newContacts: 0,
          activeCampaigns: 0,
          createdAt: today
        };
        this.analytics.set(analyticsEntry.id, analyticsEntry);
        const defaultChannel = {
          id: randomUUID(),
          name: "Main WhatsApp Channel",
          phoneNumberId: "153851404474202",
          // User's provided phone number ID
          accessToken: "Bearer EAAxxxxxxx",
          // User needs to update this with their actual token
          whatsappBusinessAccountId: "123456789012345",
          // User needs to update this with actual WABA ID
          phoneNumber: "+1234567890",
          // User needs to update with actual phone number
          isActive: true,
          healthStatus: "unknown",
          // ✅ added
          lastHealthCheck: null,
          // ✅ added
          healthDetails: null,
          // ✅ added
          createdAt: today,
          updatedAt: today
        };
        this.channels.set(defaultChannel.id, defaultChannel);
      }
      // Dashboard stats by channel
      async getDashboardStatsByChannel(channelId) {
        const campaigns2 = Array.from(this.campaigns.values()).filter((c) => c.channelId === channelId);
        const contacts3 = Array.from(this.contacts.values()).filter((c) => c.channelId === channelId);
        const conversations2 = Array.from(this.conversations.values()).filter((c) => c.channelId === channelId);
        const activeCampaigns = campaigns2.filter((c) => c.status === "active").length;
        const totalSent = campaigns2.reduce((sum, c) => sum + (c.sentCount || 0), 0);
        const totalDelivered = campaigns2.reduce((sum, c) => sum + (c.deliveredCount || 0), 0);
        const deliveryRate = totalSent > 0 ? totalDelivered / totalSent * 100 : 0;
        const weekAgo = /* @__PURE__ */ new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        const newLeads = contacts3.filter((c) => c.createdAt && c.createdAt >= weekAgo).length;
        const unreadChats = conversations2.filter((c) => c.status === "open").length;
        return {
          totalMessages: totalSent,
          activeCampaigns,
          deliveryRate: Math.round(deliveryRate * 10) / 10,
          newLeads,
          messagesGrowth: 12.5,
          campaignsRunning: activeCampaigns,
          unreadChats
        };
      }
      // Find channel by phoneNumberId
      async getChannelByPhoneNumberId(phoneNumberId) {
        return Array.from(this.channels.values()).find((c) => c.phoneNumberId === phoneNumberId);
      }
      // Return message queue (stub)
      async getMessageQueue() {
        return {};
      }
      async getAutomationByChannel(channelId) {
        return Array.from(this.automations.values()).filter((a) => a.channelId === channelId);
      }
      async getCampaignsByChannel(channelId) {
        return Array.from(this.campaigns.values()).filter((c) => c.channelId === channelId);
      }
      async getTemplatesByChannel(channelId) {
        return Array.from(this.templates.values()).filter((t) => t.channelId === channelId);
      }
      async getConversationsByChannel(channelId) {
        return Array.from(this.conversations.values()).filter((c) => c.channelId === channelId);
      }
      async deleteConversation(id) {
        return this.conversations.delete(id);
      }
      async getAutomationsByChannel(channelId) {
        return Array.from(this.automations.values()).filter((a) => a.channelId === channelId);
      }
      async getAnalyticsByChannel(channelId, days = 30) {
        const cutoff = /* @__PURE__ */ new Date();
        cutoff.setDate(cutoff.getDate() - days);
        return Array.from(this.analytics.values()).filter((a) => a.channelId === channelId && a.date >= cutoff);
      }
      // Users
      async getAllUsers() {
        return Array.from(this.users.values());
      }
      // Contacts
      async getContactsByChannel(channelId) {
        return Array.from(this.contacts.values()).filter((c) => c.channelId === channelId);
      }
      async getContactByPhone(phone) {
        return Array.from(this.contacts.values()).find((c) => c.phone === phone);
      }
      async searchContactsByChannel(channelId, query) {
        const lowerQuery = query.toLowerCase();
        return Array.from(this.contacts.values()).filter((c) => c.channelId === channelId).filter((c) => c.name.toLowerCase().includes(lowerQuery) || c.phone.includes(query));
      }
      // Users
      async getUser(id) {
        return this.users.get(id);
      }
      async getUserByUsername(username) {
        return Array.from(this.users.values()).find((user) => user.username === username);
      }
      async createUser(insertUser) {
        const id = randomUUID();
        const user = {
          ...insertUser,
          id,
          firstName: insertUser.firstName || null,
          lastName: insertUser.lastName || null,
          avatar: insertUser.avatar || null,
          role: insertUser.role || "agent",
          status: insertUser.status || "active",
          lastLogin: null,
          updatedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date()
        };
        this.users.set(id, user);
        return user;
      }
      // Contacts
      async getContacts() {
        return Array.from(this.contacts.values()).sort(
          (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
        );
      }
      async getContactsByUser(userId) {
        return Array.from(this.contacts.values()).filter((c) => c.createdBy === userId).sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
      }
      async getContact(id) {
        return this.contacts.get(id);
      }
      async createContact(insertContact) {
        const id = randomUUID();
        const contact = {
          ...insertContact,
          id,
          channelId: insertContact.channelId || null,
          email: insertContact.email || null,
          groups: Array.isArray(insertContact.groups) ? insertContact.groups : [],
          tags: insertContact.tags || [],
          status: insertContact.status || "active",
          lastContact: null,
          updatedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date()
        };
        this.contacts.set(id, contact);
        return contact;
      }
      async updateContact(id, updates) {
        const contact = this.contacts.get(id);
        if (!contact) return void 0;
        const updatedContact = { ...contact, ...updates };
        this.contacts.set(id, updatedContact);
        return updatedContact;
      }
      async deleteContact(id) {
        return this.contacts.delete(id);
      }
      async searchContacts(query) {
        const lowercaseQuery = query.toLowerCase();
        return Array.from(this.contacts.values()).filter(
          (contact) => contact.name.toLowerCase().includes(lowercaseQuery) || contact.phone.includes(query) || contact.email?.toLowerCase().includes(lowercaseQuery)
        );
      }
      // Campaigns
      async getCampaigns() {
        return Array.from(this.campaigns.values()).sort(
          (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
        );
      }
      async getCampaign(id) {
        return this.campaigns.get(id);
      }
      async getCampaignByUserId(userId) {
        return this.campaigns.get(userId);
      }
      async createCampaign(insertCampaign) {
        const id = randomUUID();
        const campaign = {
          ...insertCampaign,
          id,
          channelId: insertCampaign.channelId || null,
          status: insertCampaign.status || "draft",
          templateId: insertCampaign.templateId || null,
          templateLanguage: insertCampaign.templateLanguage || "en_US",
          templateName: insertCampaign.templateName || null,
          description: insertCampaign.description || null,
          apiKey: insertCampaign.apiKey || null,
          apiEndpoint: insertCampaign.apiEndpoint || null,
          variableMapping: insertCampaign.variableMapping || {},
          contactGroups: Array.isArray(insertCampaign.contactGroups) ? insertCampaign.contactGroups : [],
          csvData: insertCampaign.csvData || [],
          scheduledAt: insertCampaign.scheduledAt || null,
          recipientCount: insertCampaign.recipientCount || 0,
          sentCount: insertCampaign.sentCount || 0,
          readCount: insertCampaign.readCount || 0,
          repliedCount: insertCampaign.repliedCount || 0,
          failedCount: insertCampaign.failedCount || 0,
          deliveredCount: insertCampaign.deliveredCount || 0,
          completedAt: insertCampaign.completedAt || null,
          updatedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date()
        };
        this.campaigns.set(id, campaign);
        return campaign;
      }
      async updateCampaign(id, updates) {
        const campaign = this.campaigns.get(id);
        if (!campaign) return void 0;
        const updatedCampaign = { ...campaign, ...updates };
        this.campaigns.set(id, updatedCampaign);
        return updatedCampaign;
      }
      async deleteCampaign(id) {
        return this.campaigns.delete(id);
      }
      // Channels
      async getChannels() {
        return Array.from(this.channels.values()).sort(
          (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
        );
      }
      async getChannelsByUser(userId) {
        return Array.from(this.channels.values()).filter((channel) => channel.createdBy === userId).sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
      }
      async getChannel(id) {
        return this.channels.get(id);
      }
      async createChannel(insertChannel) {
        const id = randomUUID();
        const channel = {
          ...insertChannel,
          id,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          whatsappBusinessAccountId: insertChannel.whatsappBusinessAccountId || null,
          phoneNumber: insertChannel.phoneNumber || null,
          isActive: insertChannel.isActive ?? false,
          healthStatus: insertChannel.healthStatus || "unknown",
          lastHealthCheck: null,
          healthDetails: null
        };
        this.channels.set(id, channel);
        return channel;
      }
      async updateChannel(id, updates) {
        const channel = this.channels.get(id);
        if (!channel) return void 0;
        const updatedChannel = { ...channel, ...updates, updatedAt: /* @__PURE__ */ new Date() };
        this.channels.set(id, updatedChannel);
        return updatedChannel;
      }
      async deleteChannel(id) {
        return this.channels.delete(id);
      }
      async getActiveChannel() {
        const channels2 = Array.from(this.channels.values());
        return channels2.find((c) => c.isActive) || channels2[0];
      }
      // Templates
      async getTemplates() {
        return Array.from(this.templates.values()).sort(
          (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
        );
      }
      async getTemplate(id) {
        return this.templates.get(id);
      }
      async getTemplateByUserId(userId) {
        return this.templates.get(userId);
      }
      async getTemplatesByChannelAndUser(channelId, userId) {
        const channel = this.channels.get(channelId);
        if (!channel) return [];
        if (channel.createdBy !== userId) return [];
        return Array.from(this.templates.values()).filter((t) => t.channelId === channelId).sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
      }
      async createTemplate(insertTemplate) {
        const id = randomUUID();
        const template = {
          ...insertTemplate,
          id,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          status: insertTemplate.status || "draft",
          channelId: insertTemplate.channelId || null,
          language: insertTemplate.language || "en_US",
          header: insertTemplate.header || null,
          footer: insertTemplate.footer || null,
          buttons: insertTemplate.buttons || [],
          variables: insertTemplate.variables || [],
          rejectionReason: insertTemplate.rejectionReason || null,
          whatsappTemplateId: insertTemplate.whatsappTemplateId || null,
          mediaType: insertTemplate.mediaType || "text",
          mediaUrl: insertTemplate.mediaUrl || null,
          mediaHandle: insertTemplate.mediaHandle || null,
          carouselCards: insertTemplate.carouselCards || [],
          usage_count: insertTemplate.usage_count ?? 0
        };
        this.templates.set(id, template);
        return template;
      }
      //   async createTemplate(insertTemplate: InsertTemplate): Promise<Template> {
      //   const id = randomUUID();
      //   const template: Template = {
      //     ...insertTemplate,
      //     id,
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //     createdBy: insertTemplate.createdBy,  // ✅ ADD THIS
      //     status: insertTemplate.status || "draft",
      //     channelId: insertTemplate.channelId || null,
      //     language: insertTemplate.language || "en_US",
      //     header: insertTemplate.header || null,
      //     footer: insertTemplate.footer || null,
      //     buttons: insertTemplate.buttons || [],
      //     variables: insertTemplate.variables || [],
      //     rejectionReason: insertTemplate.rejectionReason || null,
      //     whatsappTemplateId: insertTemplate.whatsappTemplateId || null,
      //     mediaType: insertTemplate.mediaType || "text",
      //     mediaUrl: insertTemplate.mediaUrl || null,
      //     mediaHandle: insertTemplate.mediaHandle || null,
      //     carouselCards: insertTemplate.carouselCards || [],
      //     usage_count: insertTemplate.usage_count ?? 0,
      //   };
      //   this.templates.set(id, template);
      //   return template;
      // }
      async updateTemplate(id, updates) {
        const template = this.templates.get(id);
        if (!template) return void 0;
        const updatedTemplate = { ...template, ...updates };
        this.templates.set(id, updatedTemplate);
        return updatedTemplate;
      }
      async deleteTemplate(id) {
        return this.templates.delete(id);
      }
      // Conversations
      async getConversations() {
        return Array.from(this.conversations.values()).sort(
          (a, b) => (b.lastMessageAt?.getTime() || b.createdAt?.getTime() || 0) - (a.lastMessageAt?.getTime() || a.createdAt?.getTime() || 0)
        );
      }
      async getConversation(id) {
        return this.conversations.get(id);
      }
      async getConversationByPhone(phone) {
        return Array.from(this.conversations.values()).find((c) => c.contactPhone === phone);
      }
      async createConversation(insertConversation) {
        const id = randomUUID();
        const conversation = {
          ...insertConversation,
          id,
          channelId: insertConversation.channelId || null,
          contactId: insertConversation.contactId || null,
          contactPhone: insertConversation.contactPhone || null,
          contactName: insertConversation.contactName || null,
          assignedTo: insertConversation.assignedTo || null,
          tags: insertConversation.tags || [],
          unreadCount: 0,
          priority: insertConversation.priority || "normal",
          status: insertConversation.status || "open",
          lastMessageAt: insertConversation.lastMessageAt || null,
          lastMessageText: insertConversation.lastMessageText || null,
          updatedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date()
        };
        this.conversations.set(id, conversation);
        return conversation;
      }
      async updateConversation(id, updates) {
        const conversation = this.conversations.get(id);
        if (!conversation) return void 0;
        const updatedConversation = { ...conversation, ...updates };
        this.conversations.set(id, updatedConversation);
        return updatedConversation;
      }
      // Messages
      async getMessages(conversationId) {
        return Array.from(this.messages.values()).filter((message) => message.conversationId === conversationId).sort((a, b) => (a.createdAt?.getTime() || 0) - (b.createdAt?.getTime() || 0));
      }
      async createMessage(insertMessage) {
        const id = randomUUID();
        const message = {
          ...insertMessage,
          id,
          conversationId: insertMessage.conversationId || null,
          fromUser: insertMessage.fromUser || false,
          direction: insertMessage.direction || "inbound",
          messageType: insertMessage.messageType || "text",
          whatsappMessageId: insertMessage.whatsappMessageId || null,
          mediaUrl: insertMessage.mediaUrl || null,
          mediaId: insertMessage.mediaId || null,
          mediaMimeType: insertMessage.mediaMimeType || null,
          mediaSha256: insertMessage.mediaSha256 || null,
          metadata: insertMessage.metadata || {},
          type: insertMessage.type || "text",
          status: insertMessage.status || "sent",
          deliveredAt: insertMessage.deliveredAt || null,
          readAt: insertMessage.readAt || null,
          errorCode: insertMessage.errorCode || null,
          errorMessage: insertMessage.errorMessage || null,
          errorDetails: insertMessage.errorDetails || null,
          campaignId: insertMessage.campaignId || null,
          timestamp: insertMessage.timestamp || /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date()
        };
        this.messages.set(id, message);
        if (insertMessage.conversationId) {
          const conversation = this.conversations.get(insertMessage.conversationId);
          if (conversation) {
            this.conversations.set(conversation.id, {
              ...conversation,
              lastMessageAt: /* @__PURE__ */ new Date()
            });
          }
        }
        return message;
      }
      async updateMessage(id, updates) {
        const message = this.messages.get(id);
        if (!message) return void 0;
        const updatedMessage = { ...message, ...updates };
        this.messages.set(id, updatedMessage);
        return updatedMessage;
      }
      async getMessageByWhatsAppId(whatsappMessageId) {
        return Array.from(this.messages.values()).find((m) => m.whatsappMessageId === whatsappMessageId);
      }
      // Automations
      async getAutomations() {
        return Array.from(this.automations.values()).sort(
          (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
        );
      }
      async getAutomation(id) {
        return this.automations.get(id);
      }
      async createAutomation(insertAutomation) {
        const id = randomUUID();
        const automation = {
          ...insertAutomation,
          id,
          channelId: insertAutomation.channelId || null,
          description: insertAutomation.description || null,
          triggerConfig: insertAutomation.triggerConfig || {},
          executionCount: 0,
          lastExecutedAt: null,
          status: insertAutomation.status || "inactive",
          createdBy: insertAutomation.createdBy || null,
          updatedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date()
        };
        this.automations.set(id, automation);
        return automation;
      }
      async updateAutomation(id, updates) {
        const automation = this.automations.get(id);
        if (!automation) return void 0;
        const updatedAutomation = { ...automation, ...updates };
        this.automations.set(id, updatedAutomation);
        return updatedAutomation;
      }
      async deleteAutomation(id) {
        return this.automations.delete(id);
      }
      // Analytics
      async getAnalytics(days = 30) {
        const cutoffDate = /* @__PURE__ */ new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);
        return Array.from(this.analytics.values()).filter((analytics2) => analytics2.date >= cutoffDate).sort((a, b) => a.date.getTime() - b.date.getTime());
      }
      async createAnalytics(insertAnalytics) {
        const id = randomUUID();
        const analytics2 = {
          ...insertAnalytics,
          id,
          channelId: insertAnalytics.channelId || null,
          activeCampaigns: insertAnalytics.activeCampaigns || 0,
          newContacts: insertAnalytics.newContacts || 0,
          messagesDelivered: insertAnalytics.messagesDelivered || 0,
          messagesRead: insertAnalytics.messagesRead || 0,
          messagesSent: insertAnalytics.messagesSent || 0,
          messagesReplied: insertAnalytics.messagesReplied || 0,
          createdAt: /* @__PURE__ */ new Date()
        };
        this.analytics.set(id, analytics2);
        return analytics2;
      }
      async getDashboardStats() {
        const campaigns2 = await this.getCampaigns();
        const contacts3 = await this.getContacts();
        const conversations2 = await this.getConversations();
        const activeCampaigns = campaigns2.filter((c) => c.status === "active").length;
        const totalSent = campaigns2.reduce((sum, c) => sum + (c.sentCount || 0), 0);
        const totalDelivered = campaigns2.reduce((sum, c) => sum + (c.deliveredCount || 0), 0);
        const deliveryRate = totalSent > 0 ? totalDelivered / totalSent * 100 : 0;
        const weekAgo = /* @__PURE__ */ new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        const newLeads = contacts3.filter((c) => c.createdAt && c.createdAt >= weekAgo).length;
        const unreadChats = conversations2.filter((c) => c.status === "open").length;
        return {
          totalMessages: totalSent,
          activeCampaigns,
          deliveryRate: Math.round(deliveryRate * 10) / 10,
          newLeads,
          messagesGrowth: 12.5,
          // Would be calculated from historical data
          campaignsRunning: activeCampaigns,
          unreadChats
        };
      }
      // WhatsApp Channels
      async getWhatsappChannels() {
        return Array.from(this.whatsappChannels.values());
      }
      async getWhatsappChannel(id) {
        return this.whatsappChannels.get(id);
      }
      async createWhatsappChannel(insertChannel) {
        const id = randomUUID();
        const channel = {
          ...insertChannel,
          id,
          qualityRating: insertChannel.qualityRating || "green",
          businessAccountId: insertChannel.businessAccountId || null,
          rateLimitTier: insertChannel.rateLimitTier || "standard",
          lastHealthCheck: null,
          messageLimit: insertChannel.messageLimit || 0,
          messagesUsed: 0,
          errorMessage: null,
          status: insertChannel.status || "inactive",
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        };
        this.whatsappChannels.set(id, channel);
        return channel;
      }
      async updateWhatsappChannel(id, updates) {
        const channel = this.whatsappChannels.get(id);
        if (channel) {
          const updated = { ...channel, ...updates, updatedAt: /* @__PURE__ */ new Date() };
          this.whatsappChannels.set(id, updated);
          return updated;
        }
        return void 0;
      }
      async deleteWhatsappChannel(id) {
        this.whatsappChannels.delete(id);
        return;
      }
      // Webhook Configs
      async getWebhookConfigs() {
        return Array.from(this.webhookConfigs.values());
      }
      async getWebhookConfig(channelId) {
        return Array.from(this.webhookConfigs.values()).find((config2) => config2.channelId === channelId);
      }
      async createWebhookConfig(insertConfig) {
        const id = randomUUID();
        const config2 = {
          ...insertConfig,
          id,
          events: insertConfig.events || [],
          lastPingAt: null,
          appSecret: insertConfig.appSecret || null,
          channelId: insertConfig.channelId || null,
          isActive: insertConfig.isActive ?? true,
          createdAt: /* @__PURE__ */ new Date()
        };
        this.webhookConfigs.set(id, config2);
        return config2;
      }
      async updateWebhookConfig(id, updates) {
        const config2 = this.webhookConfigs.get(id);
        if (config2) {
          const updated = { ...config2, ...updates };
          this.webhookConfigs.set(id, updated);
          return updated;
        }
        return void 0;
      }
      async deleteWebhookConfig(id) {
        return this.webhookConfigs.delete(id);
      }
      // Message Queue
      async getMessageQueueStats() {
        const stats = {
          queued: 0,
          processing: 0,
          sent: 0,
          delivered: 0,
          failed: 0
        };
        this.messageQueues.forEach((message) => {
          if (message.status) {
            stats[message.status] = (stats[message.status] || 0) + 1;
          }
        });
        return stats;
      }
      async getQueuedMessages(limit = 10) {
        return Array.from(this.messageQueues.values()).filter((msg) => msg.status === "queued").slice(0, limit);
      }
      // API Logs
      async getApiLogs(channelId, limit = 100) {
        let logs = Array.from(this.apiLogs.values());
        if (channelId) {
          logs = logs.filter((log2) => log2.channelId === channelId);
        }
        return logs.slice(-limit);
      }
      async logApiRequest(log2) {
        try {
          const apiLog = {
            ...log2,
            id: Date.now().toString(),
            channelId: log2.channelId || null,
            responseStatus: log2.responseStatus || 0,
            requestBody: log2.requestBody || null,
            responseBody: log2.responseBody || null,
            duration: log2.duration || 0,
            createdAt: /* @__PURE__ */ new Date()
          };
          if (log2.channelId && !this.whatsappChannels.has(log2.channelId)) {
            console.error("Channel not found for API log:", log2.channelId);
            return null;
          }
          this.apiLogs.set(apiLog.id, apiLog);
          return apiLog;
        } catch (error) {
          console.error("Failed to log API request:", error);
          return null;
        }
      }
    };
    storage = new DatabaseStorage();
  }
});

// server/cron/channel-health-monitor.ts
var channel_health_monitor_exports = {};
__export(channel_health_monitor_exports, {
  ChannelHealthMonitor: () => ChannelHealthMonitor,
  channelHealthMonitor: () => channelHealthMonitor
});
import * as cron from "node-cron";
var storage2, ChannelHealthMonitor, channelHealthMonitor;
var init_channel_health_monitor = __esm({
  "server/cron/channel-health-monitor.ts"() {
    "use strict";
    init_database_storage();
    storage2 = new DatabaseStorage();
    ChannelHealthMonitor = class _ChannelHealthMonitor {
      constructor() {
        this.cronJob = null;
      }
      static getInstance() {
        if (!_ChannelHealthMonitor.instance) {
          _ChannelHealthMonitor.instance = new _ChannelHealthMonitor();
        }
        return _ChannelHealthMonitor.instance;
      }
      // Check all channels health status
      async checkAllChannelsHealth() {
        console.log("[Channel Health Monitor] Starting health check for all channels...");
        try {
          const channels2 = await storage2.getChannels();
          for (const channel of channels2) {
            await this.checkChannelHealth(channel.id);
          }
          console.log("[Channel Health Monitor] Health check completed for all channels");
        } catch (error) {
          console.error("[Channel Health Monitor] Error checking channels health:", error);
        }
      }
      // Check individual channel health
      async checkChannelHealth(channelId) {
        try {
          const channel = await storage2.getChannel(channelId);
          if (!channel) {
            console.error(`[Channel Health Monitor] Channel ${channelId} not found`);
            return;
          }
          console.log(`[Channel Health Monitor] Checking health for channel: ${channel.name} (${channel.phoneNumber})`);
          const apiVersion = process.env.WHATSAPP_API_VERSION || "v23.0";
          const fields = "id,account_mode,display_phone_number,is_official_business_account,is_pin_enabled,is_preverified_number,messaging_limit_tier,name_status,new_name_status,platform_type,quality_rating,quality_score,search_visibility,status,throughput,verified_name,code_verification_status,certificate";
          const url = `https://graph.facebook.com/${apiVersion}/${channel.phoneNumberId}?fields=${fields}`;
          const response = await fetch(url, {
            headers: {
              "Authorization": `Bearer ${channel.accessToken}`
            }
          });
          const data = await response.json();
          if (response.ok) {
            const healthDetails = {
              status: data.account_mode || "UNKNOWN",
              name_status: data.name_status || "UNKNOWN",
              phone_number: data.display_phone_number || channel.phoneNumber,
              quality_rating: data.quality_rating || "UNKNOWN",
              throughput_level: data.throughput?.level || "STANDARD",
              verification_status: data.verified_name?.status || "NOT_VERIFIED",
              messaging_limit: data.messaging_limit_tier || "UNKNOWN"
            };
            const previousStatus = channel.healthStatus;
            const newStatus = data.account_mode === "CONNECTED" ? "healthy" : "warning";
            await storage2.updateChannel(channelId, {
              healthStatus: newStatus,
              lastHealthCheck: /* @__PURE__ */ new Date(),
              healthDetails
            });
            if (previousStatus === "healthy" && newStatus !== "healthy") {
              await this.notifyChannelIssue(channel, healthDetails);
            }
            console.log(`[Channel Health Monitor] Channel ${channel.name} status: ${newStatus}`);
          } else {
            const errorMessage = data.error?.message || "Unknown error";
            await storage2.updateChannel(channelId, {
              healthStatus: "error",
              lastHealthCheck: /* @__PURE__ */ new Date(),
              healthDetails: {
                error: errorMessage,
                error_code: data.error?.code,
                error_type: data.error?.type
              }
            });
            await this.notifyChannelError(channel, errorMessage);
            console.error(`[Channel Health Monitor] Channel ${channel.name} error: ${errorMessage}`);
          }
        } catch (error) {
          console.error(`[Channel Health Monitor] Error checking channel ${channelId}:`, error);
          await storage2.updateChannel(channelId, {
            healthStatus: "error",
            lastHealthCheck: /* @__PURE__ */ new Date(),
            healthDetails: {
              error: "Network or system error",
              details: error.message
            }
          });
        }
      }
      // Notify about channel issues
      async notifyChannelIssue(channel, details) {
        console.warn(`[Channel Health Monitor] ISSUE DETECTED for ${channel.name}:`, {
          phoneNumber: channel.phoneNumber,
          status: details.status,
          quality_rating: details.quality_rating,
          messaging_limit: details.messaging_limit
        });
        await storage2.createApiLog({
          channelId: channel.id,
          requestType: "health_check",
          endpoint: "HEALTH_CHECK",
          method: "GET",
          responseStatus: 200,
          responseBody: details,
          duration: 0
        });
      }
      // Notify about channel errors
      async notifyChannelError(channel, errorMessage) {
        console.error(`[Channel Health Monitor] ERROR for ${channel.name}:`, {
          phoneNumber: channel.phoneNumber,
          error: errorMessage
        });
        await storage2.createApiLog({
          channelId: channel.id,
          requestType: "health_check",
          endpoint: "HEALTH_CHECK",
          method: "GET",
          responseStatus: 500,
          responseBody: { error: errorMessage },
          duration: 0
        });
      }
      // Start the cron job
      start() {
        this.cronJob = cron.schedule("0 2 * * *", async () => {
          await this.checkAllChannelsHealth();
        });
        this.checkAllChannelsHealth();
        console.log("[Channel Health Monitor] Started - will run daily at 2 AM");
      }
      // Stop the cron job
      stop() {
        if (this.cronJob) {
          this.cronJob.stop();
          this.cronJob = null;
          console.log("[Channel Health Monitor] Stopped");
        }
      }
      // Run health check manually
      async runManualCheck() {
        await this.checkAllChannelsHealth();
      }
    };
    channelHealthMonitor = ChannelHealthMonitor.getInstance();
  }
});

// server/index.ts
init_db();
import express2 from "express";
import session2 from "express-session";
import connectPgSimple from "connect-pg-simple";

// server/routes/index.ts
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";

// server/controllers/channels.controller.ts
init_storage();
init_schema();

// server/middlewares/error.middleware.ts
var AppError = class _AppError extends Error {
  constructor(statusCode, message, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.isOperational = isOperational;
    Object.setPrototypeOf(this, _AppError.prototype);
  }
};
function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message
    });
  }
  console.error("Unexpected error:", err);
  res.status(500).json({
    status: "error",
    message: "Internal server error"
  });
}
function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// server/controllers/channels.controller.ts
var getAllChannels = asyncHandler(async (req, res) => {
  const channels2 = await storage.getChannels();
  res.json(channels2);
});
var getChannels = asyncHandler(async (req, res) => {
  const user = req.session.user;
  if (!user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  let channels2 = [];
  if (user.role === "superadmin") {
    channels2 = await storage.getChannels();
  } else {
    channels2 = await storage.getChannelsByUser(user.id);
  }
  res.json(channels2);
});
var getChannelsByUserId = asyncHandler(async (req, res) => {
  const { userId, page = 1, limit = 10 } = req.body;
  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }
  try {
    const channels2 = await storage.getChannelsByUser(userId, Number(page), Number(limit));
    return res.json({
      status: "success",
      data: channels2.data,
      pagination: channels2.pagination
    });
  } catch (error) {
    console.error("Error fetching channels:", error);
    return res.status(500).json({ message: "Server error while fetching channels" });
  }
});
var getActiveChannel = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new AppError(401, "User not found");
  }
  const userId = user.role === "team" ? user.createdBy : user.id;
  if (!userId) {
    throw new AppError(404, "No active channel found");
  }
  const channel = await storage.getActiveChannelByUserId(userId);
  if (!channel) {
    throw new AppError(404, "No active channel found");
  }
  res.json(channel);
});
var createChannel = asyncHandler(async (req, res) => {
  const validatedChannel = insertChannelSchema.parse(req.body);
  const createdBy = req.session.user.id || "unknown";
  validatedChannel.createdBy = createdBy;
  if (validatedChannel.isActive) {
    const channels2 = await storage.getChannels();
    for (const channel2 of channels2) {
      if (channel2.isActive) {
        await storage.updateChannel(channel2.id, { isActive: false });
      }
    }
  }
  const channel = await storage.createChannel(validatedChannel);
  try {
    const apiVersion = process.env.WHATSAPP_API_VERSION || "v23.0";
    const fields = "id,account_mode,display_phone_number,is_official_business_account,is_pin_enabled,is_preverified_number,messaging_limit_tier,name_status,new_name_status,platform_type,quality_rating,quality_score,search_visibility,status,throughput,verified_name,code_verification_status,certificate";
    const url = `https://graph.facebook.com/${apiVersion}/${channel.phoneNumberId}?fields=${fields}`;
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${channel.accessToken}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Channel health data:", JSON.stringify(data, null, 2));
      const healthDetails = {
        // Core fields
        status: data.account_mode || "UNKNOWN",
        name_status: data.name_status || "UNKNOWN",
        phone_number: data.display_phone_number || channel.phoneNumber,
        quality_rating: data.quality_rating || "UNKNOWN",
        throughput_level: data.throughput?.level || "STANDARD",
        verification_status: data.verified_name?.status || "NOT_VERIFIED",
        messaging_limit: data.messaging_limit_tier || "UNKNOWN",
        // Additional fields from Meta API
        platform_type: data.platform_type,
        is_official_business_account: data.is_official_business_account,
        quality_score: data.quality_score,
        is_preverified_number: data.is_preverified_number,
        search_visibility: data.search_visibility,
        is_pin_enabled: data.is_pin_enabled,
        code_verification_status: data.code_verification_status,
        certificate: data.certificate
      };
      await storage.updateChannel(channel.id, {
        healthStatus: "healthy",
        lastHealthCheck: /* @__PURE__ */ new Date(),
        healthDetails
      });
    } else {
      await storage.updateChannel(channel.id, {
        healthStatus: "error",
        lastHealthCheck: /* @__PURE__ */ new Date(),
        healthDetails: {
          error: data.error?.message || "Unknown error",
          error_code: data.error?.code,
          error_type: data.error?.type
        }
      });
    }
  } catch (error) {
    console.error("Error checking channel health after creation:", error);
  }
  const updatedChannel = await storage.getChannel(channel.id);
  res.json(updatedChannel);
});
var updateChannel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  if (!userId) {
    throw new AppError(404, "No active channel found");
  }
  if (req.body.isActive === true) {
    const channels2 = await storage.getChannelsByUserId(userId);
    for (const channel2 of channels2) {
      if (channel2.id !== id && channel2.isActive) {
        await storage.updateChannel(channel2.id, { isActive: false });
      }
    }
  }
  const channel = await storage.updateChannel(id, req.body);
  if (!channel) {
    throw new AppError(404, "Channel not found");
  }
  res.json(channel);
});
var deleteChannel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const success = await storage.deleteChannel(id);
  if (!success) {
    throw new AppError(404, "Channel not found");
  }
  res.status(204).send();
});
var checkChannelHealth = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const channel = await storage.getChannel(id);
  if (!channel) {
    throw new AppError(404, "Channel not found");
  }
  try {
    const apiVersion = process.env.WHATSAPP_API_VERSION || "v23.0";
    const fields = "id,account_mode,display_phone_number,is_official_business_account,is_pin_enabled,is_preverified_number,messaging_limit_tier,name_status,new_name_status,platform_type,quality_rating,quality_score,search_visibility,status,throughput,verified_name,code_verification_status,certificate";
    const url = `https://graph.facebook.com/${apiVersion}/${channel.phoneNumberId}?fields=${fields}`;
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${channel.accessToken}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Channel health API response:", JSON.stringify(data, null, 2));
      const healthDetails = {
        status: data.account_mode || "UNKNOWN",
        name_status: data.name_status || "UNKNOWN",
        phone_number: data.display_phone_number || channel.phoneNumber,
        quality_rating: data.quality_rating || "UNKNOWN",
        throughput_level: data.throughput?.level || "STANDARD",
        verification_status: data.verified_name?.status || "NOT_VERIFIED",
        messaging_limit: data.messaging_limit_tier || "UNKNOWN",
        // Additional fields from Meta API
        platform_type: data.platform_type,
        is_official_business_account: data.is_official_business_account,
        quality_score: data.quality_score,
        is_preverified_number: data.is_preverified_number,
        search_visibility: data.search_visibility,
        is_pin_enabled: data.is_pin_enabled,
        code_verification_status: data.code_verification_status,
        certificate: data.certificate
      };
      await storage.updateChannel(id, {
        healthStatus: "healthy",
        lastHealthCheck: /* @__PURE__ */ new Date(),
        healthDetails
      });
      res.json({
        status: "healthy",
        details: healthDetails,
        lastCheck: /* @__PURE__ */ new Date()
      });
    } else {
      await storage.updateChannel(id, {
        healthStatus: "error",
        lastHealthCheck: /* @__PURE__ */ new Date(),
        healthDetails: { error: data.error?.message || "Unknown error" }
      });
      res.json({
        status: "error",
        error: data.error?.message || "Failed to fetch channel health",
        lastCheck: /* @__PURE__ */ new Date()
      });
    }
  } catch (error) {
    await storage.updateChannel(id, {
      healthStatus: "error",
      lastHealthCheck: /* @__PURE__ */ new Date(),
      healthDetails: { error: "Network error" }
    });
    res.json({
      status: "error",
      error: "Failed to check channel health",
      lastCheck: /* @__PURE__ */ new Date()
    });
  }
});
var checkAllChannelsHealth = asyncHandler(async (req, res) => {
  const { channelHealthMonitor: channelHealthMonitor2 } = await Promise.resolve().then(() => (init_channel_health_monitor(), channel_health_monitor_exports));
  await channelHealthMonitor2.runManualCheck();
  res.json({
    message: "Health check triggered for all channels",
    timestamp: /* @__PURE__ */ new Date()
  });
});

// server/middlewares/validation.middleware.ts
import { z } from "zod";
function validateRequest(schema) {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new AppError(400, `Validation error: ${error.errors.map((e) => e.message).join(", ")}`);
      }
      throw error;
    }
  };
}

// server/routes/channels.routes.ts
init_schema();

// server/middlewares/auth.middleware.ts
init_storage();
var requireAuth = (req, res, next) => {
  const user = req.session?.user;
  if (!user) {
    return res.status(401).json({ error: "Authentication required" });
  }
  req.user = user;
  next();
};
var requirePermission = (...permissions) => {
  return async (req, res, next) => {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: "Authentication required" });
    }
    if (user.role === "admin" || user.role === "user") {
      return next();
    }
    try {
      const getUserPermissions = await storage.getPermissions(user.id);
      const userPermissions = (getUserPermissions ?? []).reduce(
        (acc, perm) => {
          acc[perm] = true;
          return acc;
        },
        {}
      );
      const hasPermission = permissions.some(
        (perm) => userPermissions[perm]
      );
      if (!hasPermission) {
        return res.status(403).json({ error: "Insufficient permissions" });
      }
      next();
    } catch (error) {
      console.error("Error checking permissions:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
};

// server/middlewares/requireSubscription.ts
init_db();
init_schema();
import { eq as eq15 } from "drizzle-orm";
var requireSubscription = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      let userId = null;
      const sessionUser = req.session.user;
      const siteId = req.body.siteId;
      if (sessionUser) {
        userId = sessionUser.id;
      } else if (siteId) {
        const [site] = await db.select().from(sites).where(eq15(sites.id, siteId));
        if (!site) {
          return res.status(404).json({ error: "Invalid siteId." });
        }
        const [channel] = await db.select().from(channels).where(eq15(channels.id, site.channelId));
        if (!channel) {
          return res.status(404).json({ error: "Channel not found." });
        }
        userId = channel.createdBy;
      } else {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const [sub] = await db.select().from(subscriptions).where(eq15(subscriptions.userId, userId));
      if (!sub) {
        return res.status(403).json({ error: "Subscription required." });
      }
      if (sub.status !== "active") {
        return res.status(403).json({ error: "Subscription not active." });
      }
      if (new Date(sub.endDate) < /* @__PURE__ */ new Date()) {
        return res.status(403).json({ error: "Subscription expired." });
      }
      const [plan] = await db.select().from(plans).where(eq15(plans.id, sub.planId));
      if (!plan) return res.status(500).json({ error: "Plan not found." });
      const limit = Number(plan.permissions?.[requiredPermission]);
      if (!limit || limit <= 0) {
        return res.status(403).json({
          error: `Your plan does not allow ${requiredPermission}.`
        });
      }
      let currentCount = 0;
      if (requiredPermission === "contacts") {
        const data = await db.select().from(contacts).leftJoin(channels, eq15(contacts.channelId, channels.id)).where(eq15(channels.createdBy, userId));
        currentCount = data.length;
      }
      if (requiredPermission === "channel") {
        const data = await db.select().from(channels).where(eq15(channels.createdBy, userId));
        currentCount = data.length;
      }
      if (requiredPermission === "automation") {
        const data = await db.select().from(automations).where(eq15(automations.createdBy, userId));
        currentCount = data.length;
      }
      if (requiredPermission === "campaign") {
        const data = await db.select().from(campaigns).where(eq15(campaigns.createdBy, userId));
        currentCount = data.length;
      }
      if (currentCount >= limit) {
        return res.status(403).json({
          error: `You have reached the limit for ${requiredPermission}. Allowed: ${limit}`
        });
      }
      next();
    } catch (err) {
      console.error("Subscription check error:", err);
      return res.status(500).json({ error: "Server error checking subscription." });
    }
  };
};

// server/routes/channels.routes.ts
function registerChannelRoutes(app2) {
  app2.get("/api/channels", getChannels);
  app2.post("/api/channels/userid", getChannelsByUserId);
  app2.get("/api/channels/active", requireAuth, getActiveChannel);
  app2.post(
    "/api/channels",
    validateRequest(insertChannelSchema),
    requireSubscription("channel"),
    createChannel
  );
  app2.put("/api/channels/:id", requireAuth, updateChannel);
  app2.delete("/api/channels/:id", deleteChannel);
  app2.post("/api/channels/:id/health", checkChannelHealth);
  app2.post("/api/channels/health-check-all", checkAllChannelsHealth);
}

// server/controllers/dashboard.controller.ts
init_storage();
var getDashboardStats = asyncHandler(async (req, res) => {
  const channelId = req.query.channelId;
  if (channelId) {
    const stats = await storage.getDashboardStatsByChannel(channelId);
    res.json(stats);
  } else {
    const stats = await storage.getDashboardStats();
    res.json(stats);
  }
});
var getDashboardStatsForAdmin = asyncHandler(async (req, res) => {
  const stats = await storage.getDashboardStats();
  res.json(stats);
});
var getDashboardStatsForUser = asyncHandler(async (req, res) => {
  const channelId = req.query.channelId;
  const userId = req?.session?.user?.id;
  console.log("CHECKK CHANNNEL IDDD", channelId);
  const stats = await storage.getDashboardStatsByChannel(channelId, userId);
  res.json(stats);
});
var getAnalytics = asyncHandler(async (req, res) => {
  const channelId = req.query.channelId;
  const days = req.query.days ? parseInt(req.query.days) : void 0;
  if (channelId) {
    const analytics2 = await storage.getAnalyticsByChannel(channelId, days);
    res.json(analytics2);
  } else {
    const analytics2 = await storage.getAnalytics();
    res.json(analytics2);
  }
});
var createAnalytics = asyncHandler(async (req, res) => {
  const analytics2 = await storage.createAnalytics(req.body);
  res.json(analytics2);
});

// server/middlewares/channel.middleware.ts
init_storage();
async function extractChannelId(req, res, next) {
  try {
    let channelId = req.query.channelId;
    if (!channelId) {
      const activeChannel = await storage.getActiveChannel();
      if (activeChannel) {
        channelId = activeChannel.id;
      }
    }
    req.channelId = channelId;
    next();
  } catch (error) {
    next(error);
  }
}

// server/routes/dashboard.routes.ts
init_schema();
function registerDashboardRoutes(app2) {
  app2.get(
    "/api/dashboard/stats",
    extractChannelId,
    getDashboardStats
  );
  app2.get("/api/dashboard/admin/stats", getDashboardStatsForAdmin);
  app2.get("/api/dashboard/user/statss", getDashboardStatsForUser);
  app2.get(
    "/api/analytics",
    extractChannelId,
    requireAuth,
    requirePermission(PERMISSIONS.ANALYTICS_VIEW),
    getAnalytics
  );
  app2.post("/api/analytics", createAnalytics);
}

// server/controllers/analytics.controller.ts
init_db();
init_schema();
init_storage();
import { eq as eq16, and as and8, gte as gte5, lte, count, sql as sql10, desc as desc13 } from "drizzle-orm";
import PDFDocument from "pdfkit";
import ExcelJS from "exceljs";
var getMessageAnalytics = asyncHandler(async (req, res) => {
  const { channelId, days = "30", startDate, endDate } = req.query;
  const daysNum = parseInt(days, 10);
  const start = startDate ? new Date(startDate) : new Date(Date.now() - daysNum * 24 * 60 * 60 * 1e3);
  const end = endDate ? new Date(endDate) : /* @__PURE__ */ new Date();
  const conditions = [];
  if (channelId) {
    conditions.push(eq16(conversations.channelId, channelId));
  }
  conditions.push(gte5(messages.createdAt, start));
  conditions.push(lte(messages.createdAt, end));
  const messageStats = await db.select({
    date: sql10`DATE(${messages.createdAt})`,
    totalSent: count(messages.id),
    delivered: sql10`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`,
    read: sql10`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`,
    failed: sql10`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`,
    pending: sql10`COUNT(CASE WHEN ${messages.status} = 'pending' THEN 1 END)`
  }).from(messages).innerJoin(conversations, eq16(messages.conversationId, conversations.id)).where(and8(...conditions)).groupBy(sql10`DATE(${messages.createdAt})`).orderBy(sql10`DATE(${messages.createdAt})`);
  const overallStats = await db.select({
    totalMessages: count(messages.id),
    totalDelivered: sql10`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`,
    totalRead: sql10`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`,
    totalFailed: sql10`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`,
    totalReplied: sql10`COUNT(CASE WHEN ${messages.fromUser} = true THEN 1 END)`,
    uniqueContacts: sql10`COUNT(DISTINCT ${conversations.contactPhone})`
  }).from(messages).innerJoin(conversations, eq16(messages.conversationId, conversations.id)).where(and8(...conditions));
  const messageTypes = await db.select({
    direction: messages.direction,
    count: count(messages.id)
  }).from(messages).innerJoin(conversations, eq16(messages.conversationId, conversations.id)).where(and8(...conditions)).groupBy(messages.direction);
  const hourlyDistribution = await db.select({
    hour: sql10`EXTRACT(HOUR FROM ${messages.createdAt})`,
    count: count(messages.id)
  }).from(messages).innerJoin(conversations, eq16(messages.conversationId, conversations.id)).where(and8(...conditions)).groupBy(sql10`EXTRACT(HOUR FROM ${messages.createdAt})`).orderBy(sql10`EXTRACT(HOUR FROM ${messages.createdAt})`);
  res.json({
    dailyStats: messageStats,
    overall: overallStats[0] || {},
    messageTypes,
    hourlyDistribution,
    period: {
      startDate: start.toISOString(),
      endDate: end.toISOString(),
      days: daysNum
    }
  });
});
var getCampaignAnalytics = asyncHandler(async (req, res) => {
  const { channelId } = req.query;
  const conditions = [];
  if (channelId) {
    conditions.push(eq16(campaigns.channelId, channelId));
  }
  const campaignStats = await db.select().from(campaigns).where(conditions.length > 0 ? and8(...conditions) : void 0).orderBy(desc13(campaigns.createdAt));
  const campaignsWithRates = campaignStats.map((campaign) => ({
    ...campaign,
    deliveryRate: campaign.sentCount && campaign.sentCount > 0 ? (campaign.deliveredCount || 0) / campaign.sentCount * 100 : 0,
    readRate: campaign.deliveredCount && campaign.deliveredCount > 0 ? (campaign.readCount || 0) / campaign.deliveredCount * 100 : 0,
    replyRate: campaign.readCount && campaign.readCount > 0 ? (campaign.repliedCount || 0) / campaign.readCount * 100 : 0
  }));
  const aggregatedStats = campaignStats.reduce((acc, campaign) => ({
    totalCampaigns: acc.totalCampaigns + 1,
    activeCampaigns: acc.activeCampaigns + (campaign.status === "active" ? 1 : 0),
    completedCampaigns: acc.completedCampaigns + (campaign.status === "completed" ? 1 : 0),
    totalRecipients: acc.totalRecipients + (campaign.recipientCount || 0),
    totalSent: acc.totalSent + (campaign.sentCount || 0),
    totalDelivered: acc.totalDelivered + (campaign.deliveredCount || 0),
    totalRead: acc.totalRead + (campaign.readCount || 0),
    totalReplied: acc.totalReplied + (campaign.repliedCount || 0),
    totalFailed: acc.totalFailed + (campaign.failedCount || 0)
  }), {
    totalCampaigns: 0,
    activeCampaigns: 0,
    completedCampaigns: 0,
    totalRecipients: 0,
    totalSent: 0,
    totalDelivered: 0,
    totalRead: 0,
    totalReplied: 0,
    totalFailed: 0
  });
  res.json({
    campaigns: campaignsWithRates,
    summary: aggregatedStats
  });
});
var getCampaignAnalyticsById = asyncHandler(async (req, res) => {
  const { campaignId } = req.params;
  console.log("Fetching campaign analytics for ID:", campaignId);
  const campaign = await storage.getCampaign(campaignId);
  if (!campaign) {
    return res.status(404).json({ error: "Campaign not found" });
  }
  console.log("Campaign details:", campaign);
  const endDate = /* @__PURE__ */ new Date();
  const startDate = new Date(campaign.createdAt || /* @__PURE__ */ new Date());
  const dailyStats = await db.select({
    date: sql10`DATE(${messages.timestamp})`,
    sent: count(messages.id),
    delivered: sql10`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`,
    read: sql10`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`,
    failed: sql10`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`
  }).from(messages).where(eq16(messages.campaignId, campaignId)).groupBy(sql10`DATE(${messages.timestamp})`).orderBy(sql10`DATE(${messages.timestamp})`);
  const recipientStats = await db.select({
    status: messages.status,
    count: count(messages.id)
  }).from(messages).where(eq16(messages.campaignId, campaignId)).groupBy(messages.status);
  const errorAnalysis = await db.select({
    errorCode: sql10`${messages.errorDetails}->>'code'`,
    errorMessage: sql10`${messages.errorDetails}->>'message'`,
    count: count(messages.id)
  }).from(messages).where(and8(
    eq16(messages.campaignId, campaignId),
    eq16(messages.status, "failed")
  )).groupBy(sql10`${messages.errorDetails}->>'code'`, sql10`${messages.errorDetails}->>'message'`).orderBy(desc13(count(messages.id)));
  console.log("Data", {
    campaign,
    dailyStats,
    recipientStats,
    errorAnalysis
  });
  res.status(200).json({
    campaign,
    dailyStats,
    recipientStats,
    errorAnalysis
  });
});
var getCampaignDetails = asyncHandler(async (req, res) => {
  const { campaignId } = req.params;
  const campaign = await db.select().from(campaigns).where(eq16(campaigns.id, campaignId)).limit(1);
  if (!campaign.length) {
    throw new AppError(404, "Campaign not found");
  }
  const messageStats = await db.select({
    date: sql10`DATE(${messages.createdAt})`,
    sent: count(messages.id),
    delivered: sql10`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`,
    read: sql10`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`,
    failed: sql10`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`
  }).from(messages).where(eq16(messages.campaignId, campaignId)).groupBy(sql10`DATE(${messages.createdAt})`).orderBy(sql10`DATE(${messages.createdAt})`);
  const recipientStats = await db.select({
    status: messages.status,
    count: count(messages.id)
  }).from(messages).where(eq16(messages.campaignId, campaignId)).groupBy(messages.status);
  const errorAnalysis = await db.select({
    errorCode: messages.errorCode,
    errorMessage: messages.errorMessage,
    count: count(messages.id)
  }).from(messages).where(and8(
    eq16(messages.campaignId, campaignId),
    eq16(messages.status, "failed")
  )).groupBy(messages.errorCode, messages.errorMessage);
  res.json({
    campaign: campaign[0],
    dailyStats: messageStats,
    recipientStats,
    errorAnalysis
  });
});
var exportAnalytics = asyncHandler(async (req, res) => {
  const { format = "pdf", type = "messages", channelId, days = "30" } = req.query;
  if (format === "pdf") {
    await exportPDF(req, res);
  } else if (format === "excel") {
    await exportExcel(req, res);
  } else {
    throw new AppError(400, "Invalid export format");
  }
});
async function exportPDF(req, res) {
  const { type, channelId, days = "30" } = req.query;
  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename=analytics-report-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`);
  doc.pipe(res);
  doc.fontSize(20).text("WhatsApp Analytics Report", { align: "center" });
  doc.moveDown();
  doc.fontSize(12).text(`Generated on: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, { align: "center" });
  doc.moveDown(2);
  if (type === "messages" || type === "all") {
    const daysNum = parseInt(days);
    const start = new Date(Date.now() - daysNum * 24 * 60 * 60 * 1e3);
    const conditions = [];
    if (channelId) {
      conditions.push(eq16(conversations.channelId, channelId));
    }
    conditions.push(gte5(messages.createdAt, start));
    const stats = await db.select({
      totalMessages: count(messages.id),
      delivered: sql10`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`,
      read: sql10`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`,
      failed: sql10`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`
    }).from(messages).innerJoin(conversations, eq16(messages.conversationId, conversations.id)).where(and8(...conditions));
    doc.fontSize(16).text("Message Statistics", { underline: true });
    doc.moveDown();
    doc.fontSize(12);
    doc.text(`Total Messages: ${stats[0]?.totalMessages || 0}`);
    doc.text(`Delivered: ${stats[0]?.delivered || 0}`);
    doc.text(`Read: ${stats[0]?.read || 0}`);
    doc.text(`Failed: ${stats[0]?.failed || 0}`);
    doc.moveDown(2);
  }
  if (type === "campaigns" || type === "all") {
    const campaignStats = await db.select({
      totalCampaigns: count(campaigns.id),
      totalSent: sql10`SUM(${campaigns.sentCount})`,
      totalDelivered: sql10`SUM(${campaigns.deliveredCount})`
    }).from(campaigns).where(channelId ? eq16(campaigns.channelId, channelId) : void 0);
    doc.fontSize(16).text("Campaign Statistics", { underline: true });
    doc.moveDown();
    doc.fontSize(12);
    doc.text(`Total Campaigns: ${campaignStats[0]?.totalCampaigns || 0}`);
    doc.text(`Total Sent: ${campaignStats[0]?.totalSent || 0}`);
    doc.text(`Total Delivered: ${campaignStats[0]?.totalDelivered || 0}`);
  }
  doc.end();
}
async function exportExcel(req, res) {
  const { type, channelId, days = "30" } = req.query;
  const workbook = new ExcelJS.Workbook();
  if (type === "messages" || type === "all") {
    const daysNum = parseInt(days, 10);
    const start = new Date(Date.now() - daysNum * 24 * 60 * 60 * 1e3);
    const conditions = [];
    if (channelId) {
      conditions.push(eq16(conversations.channelId, channelId));
    }
    conditions.push(gte5(messages.createdAt, start));
    const messageData = await db.select({
      date: sql10`DATE(${messages.createdAt})`,
      sent: count(messages.id),
      delivered: sql10`COUNT(CASE WHEN ${messages.status} = 'delivered' THEN 1 END)`,
      read: sql10`COUNT(CASE WHEN ${messages.status} = 'read' THEN 1 END)`,
      failed: sql10`COUNT(CASE WHEN ${messages.status} = 'failed' THEN 1 END)`
    }).from(messages).innerJoin(conversations, eq16(messages.conversationId, conversations.id)).where(and8(...conditions)).groupBy(sql10`DATE(${messages.createdAt})`).orderBy(sql10`DATE(${messages.createdAt})`);
    const ws = workbook.addWorksheet("Message Analytics");
    if (messageData.length > 0) {
      ws.columns = Object.keys(messageData[0]).map((key) => ({
        header: key.charAt(0).toUpperCase() + key.slice(1),
        key,
        width: 15
      }));
      messageData.forEach((row) => ws.addRow(row));
    }
  }
  if (type === "campaigns" || type === "all") {
    const campaignData = await db.select({
      name: campaigns.name,
      type: campaigns.type,
      status: campaigns.status,
      recipients: campaigns.recipientCount,
      sent: campaigns.sentCount,
      delivered: campaigns.deliveredCount,
      read: campaigns.readCount,
      replied: campaigns.repliedCount,
      failed: campaigns.failedCount
    }).from(campaigns).where(channelId ? eq16(campaigns.channelId, channelId) : void 0).orderBy(desc13(campaigns.createdAt));
    const ws = workbook.addWorksheet("Campaign Analytics");
    if (campaignData.length > 0) {
      ws.columns = Object.keys(campaignData[0]).map((key) => ({
        header: key.charAt(0).toUpperCase() + key.slice(1),
        key,
        width: 15
      }));
      campaignData.forEach((row) => ws.addRow(row));
    }
  }
  const buffer = await workbook.xlsx.writeBuffer();
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=analytics-report-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`
  );
  res.send(buffer);
}

// server/routes/analytics.routes.ts
init_schema();
function registerAnalyticsRoutes(app2) {
  app2.get(
    "/api/analytics",
    requireAuth,
    requirePermission(PERMISSIONS.ANALYTICS_VIEW),
    getAnalytics
  );
  app2.get("/api/analytics/messages", getMessageAnalytics);
  app2.get("/api/analytics/campaigns", getCampaignAnalytics);
  app2.get("/api/analytics/campaigns/:campaignId", getCampaignAnalyticsById);
  app2.get(
    "/api/analytics/export",
    requireAuth,
    requirePermission(PERMISSIONS.ANALYTICS_EXPORT),
    exportAnalytics
  );
}

// server/controllers/contacts.controller.ts
init_storage();
init_schema();
init_db();
import { and as and9, eq as eq17, ilike, inArray, or, sql as sql11 } from "drizzle-orm";
var getContacts = asyncHandler(
  async (req, res) => {
    const { search, channelId } = req.query;
    let contacts3;
    if (channelId && typeof channelId === "string") {
      contacts3 = await storage.getContactsByChannel(channelId);
      ;
    } else {
      contacts3 = await storage.getContacts();
    }
    if (search && typeof search === "string") {
      const searchLower = search.toLowerCase();
      contacts3 = contacts3.filter(
        (contact) => contact.name.toLowerCase().includes(searchLower) || contact.phone.includes(search) || contact.email?.toLowerCase().includes(searchLower)
      );
    }
    res.json(contacts3);
  }
);
var getContactsByUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  if (!userId) {
    throw new AppError(400, "User ID is required");
  }
  const result = await storage.getContactsByUser(userId, page, limit);
  res.json({
    status: "success",
    data: result.data,
    pagination: {
      page: result.page,
      limit: result.limit,
      total: result.total,
      totalPages: result.totalPages
    }
  });
});
var getContactsWithPagination = asyncHandler(
  async (req, res) => {
    const { search, channelId, page = "1", limit = "10", group, status, createdBy } = req.query;
    const currentPage = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const offset = (currentPage - 1) * pageSize;
    const conditions = [];
    if (channelId && typeof channelId === "string") {
      conditions.push(eq17(contacts.channelId, channelId));
    }
    if (createdBy && typeof createdBy === "string") {
      conditions.push(eq17(contacts.createdBy, createdBy));
    }
    if (search && typeof search === "string") {
      const searchTerm = `%${search.toLowerCase()}%`;
      conditions.push(
        or(
          ilike(contacts.name, searchTerm),
          ilike(contacts.email, searchTerm),
          ilike(contacts.phone, `%${search}%`)
        )
      );
    }
    if (group && typeof group === "string") {
      const groupList = group.split(",").map((g) => g.trim());
      if (groupList.length > 0) {
        const jsonArray = JSON.stringify(groupList);
        conditions.push(
          sql11`${contacts.groups} @> ${sql11.raw(`'${jsonArray}'::jsonb`)}`
        );
      }
    }
    if (status && typeof status === "string") {
      conditions.push(eq17(contacts.status, status));
    }
    const whereClause = conditions.length > 0 ? and9(...conditions) : void 0;
    const totalQuery = db.select({ count: sql11`count(*)` }).from(contacts).where(whereClause);
    const totalResult = await totalQuery;
    const total = totalResult[0]?.count ?? 0;
    const dataQuery = db.select({
      id: contacts.id,
      channelId: contacts.channelId,
      name: contacts.name,
      phone: contacts.phone,
      email: contacts.email,
      groups: contacts.groups,
      tags: contacts.tags,
      status: contacts.status,
      source: contacts.source,
      lastContact: contacts.lastContact,
      createdAt: contacts.createdAt,
      updatedAt: contacts.updatedAt,
      createdBy: contacts.createdBy,
      createdByName: sql11`
      CONCAT(
        COALESCE(${users.firstName}, ''), ' ', COALESCE(${users.lastName}, '')
      )
    `.as("createdByName")
    }).from(contacts).leftJoin(users, eq17(users.id, sql11`${contacts.createdBy}::text`)).where(whereClause).limit(pageSize).offset(offset);
    const data = await dataQuery;
    res.json({
      data,
      pagination: {
        page: currentPage,
        limit: pageSize,
        count: data.length,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    });
  }
);
var getContactsWithPaginationOld = asyncHandler(
  async (req, res) => {
    const { search, channelId, page = "1", limit = "10", group, status, createdBy } = req.query;
    const currentPage = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const offset = (currentPage - 1) * pageSize;
    const conditions = [];
    if (channelId && typeof channelId === "string") {
      conditions.push(eq17(contacts.channelId, channelId));
    }
    if (createdBy && typeof createdBy === "string") {
      conditions.push(eq17(contacts.createdBy, createdBy));
    }
    if (search && typeof search === "string") {
      const searchTerm = `%${search.toLowerCase()}%`;
      conditions.push(
        or(
          ilike(contacts.name, searchTerm),
          ilike(contacts.email, searchTerm),
          ilike(contacts.phone, `%${search}%`)
        )
      );
    }
    if (group && typeof group === "string") {
      const groupList = group.split(",").map((g) => g.trim());
      if (groupList.length > 0) {
        const jsonArray = JSON.stringify(groupList);
        conditions.push(
          sql11`${contacts.groups} @> ${sql11.raw(`'${jsonArray}'::jsonb`)}`
        );
      }
    }
    if (status && typeof status === "string") {
      conditions.push(eq17(contacts.status, status));
    }
    const whereClause = conditions.length > 0 ? and9(...conditions) : void 0;
    const totalQuery = db.select({ count: sql11`count(*)` }).from(contacts).where(whereClause);
    const totalResult = await totalQuery;
    const total = totalResult[0]?.count ?? 0;
    const dataQuery = db.select().from(contacts).where(whereClause).limit(pageSize).offset(offset);
    const data = await dataQuery;
    res.json({
      data,
      pagination: {
        page: currentPage,
        limit: pageSize,
        count: data.length,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    });
  }
);
var getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await storage.getContact(id);
  if (!contact) {
    throw new AppError(404, "Contact not found");
  }
  res.json(contact);
});
var createContact = asyncHandler(
  async (req, res) => {
    const validatedContact = insertContactSchema.parse(req.body);
    const createdBy = req.session.user.id;
    let channelId = req.body.channelId || void 0;
    if (!channelId) {
      const activeChannel = await storage.getActiveChannel();
      if (activeChannel) {
        channelId = activeChannel.id;
      }
    }
    if (!channelId) {
      return res.status(400).json({ error: "You must create a channel before adding a contact." });
    }
    const existingContacts = channelId ? await storage.getContactsByChannel(channelId) : await storage.getContacts();
    const duplicate = existingContacts.find(
      (c) => c.phone === validatedContact.phone
    );
    if (duplicate) {
      throw new AppError(409, "This phone number is already exists.");
    }
    const contact = await storage.createContact({
      ...validatedContact,
      channelId,
      createdBy
    });
    res.json(contact);
  }
);
var updateContact = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    const contact = await storage.updateContact(id, req.body);
    if (!contact) {
      throw new AppError(404, "Contact not found");
    }
    res.json(contact);
  }
);
var deleteContact = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    const success = await storage.deleteContact(id);
    if (!success) {
      throw new AppError(404, "Contact not found");
    }
    res.status(204).send();
  }
);
var deleteBulkContacts = asyncHandler(
  async (req, res) => {
    const { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      throw new AppError(400, "No contact IDs provided");
    }
    const result = await db.delete(contacts).where(inArray(contacts.id, ids));
    if (result.rowCount === 0) {
      throw new AppError(404, "No contacts found to delete");
    }
    res.status(204).send();
  }
);
var importContacts = asyncHandler(
  async (req, res) => {
    const { contacts: contacts3, channelId: bodyChannelId } = req.body;
    if (!Array.isArray(contacts3)) {
      throw new AppError(400, "Contacts must be an array");
    }
    let channelId = bodyChannelId || req.query.channelId;
    if (!channelId) {
      const activeChannel = await storage.getActiveChannel();
      if (activeChannel) {
        channelId = activeChannel.id;
      }
    }
    const existingContacts = channelId ? await storage.getContactsByChannel(channelId) : await storage.getContacts();
    const existingPhones = new Set(existingContacts.map((c) => c.phone));
    const createdContacts = [];
    const duplicates = [];
    const errors = [];
    for (const contact of contacts3) {
      try {
        if (existingPhones.has(contact.phone)) {
          duplicates.push({
            contact,
            reason: "Phone number already exists"
          });
          continue;
        }
        const validatedContact = insertContactSchema.parse({
          ...contact,
          channelId,
          createdBy: req.session.user.id
        });
        const created = await storage.createContact(validatedContact);
        createdContacts.push(created);
        existingPhones.add(created.phone);
      } catch (error) {
        errors.push({
          contact,
          error: error instanceof Error ? error.message : "Unknown error"
        });
      }
    }
    res.json({
      created: createdContacts.length,
      duplicates: duplicates.length,
      failed: errors.length,
      total: contacts3.length,
      details: {
        created: createdContacts.length,
        duplicates: duplicates.slice(0, 10),
        // Limit to first 10
        errors: errors.slice(0, 10)
        // Limit to first 10
      }
    });
  }
);

// server/routes/contacts.routes.ts
init_schema();
function registerContactRoutes(app2) {
  app2.get(
    "/api/contacts-all",
    requireAuth,
    requirePermission(PERMISSIONS.CONTACTS_VIEW),
    extractChannelId,
    getContacts
  );
  app2.get(
    "/api/contacts",
    requireAuth,
    requirePermission(PERMISSIONS.CONTACTS_VIEW),
    extractChannelId,
    getContactsWithPagination
  );
  app2.get(
    "/api/contacts/:id",
    requireAuth,
    requirePermission(PERMISSIONS.CONTACTS_VIEW),
    getContact
  );
  app2.post(
    "/api/contacts",
    extractChannelId,
    requireAuth,
    requirePermission(PERMISSIONS.CONTACTS_CREATE),
    requireSubscription("contacts"),
    validateRequest(insertContactSchema),
    createContact
  );
  app2.get("/api/user/contacts/:userId", getContactsByUser);
  app2.put(
    "/api/contacts/:id",
    requireAuth,
    requirePermission(PERMISSIONS.CONTACTS_EDIT),
    updateContact
  );
  app2.delete(
    "/api/contacts/:id",
    requireAuth,
    requirePermission(PERMISSIONS.CONTACTS_DELETE),
    deleteContact
  );
  app2.delete(
    "/api/contacts-bulk",
    requireAuth,
    requirePermission(PERMISSIONS.CONTACTS_DELETE),
    deleteBulkContacts
  );
  app2.post(
    "/api/contacts/import",
    requireAuth,
    requirePermission(PERMISSIONS.CONTACTS_EXPORT),
    // or CONTACTS_IMPORT if you defined it
    extractChannelId,
    requireSubscription("contacts"),
    importContacts
  );
}

// server/utils/async-handler.ts
function asyncHandler2(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// server/controllers/campaigns.controller.ts
init_storage();
import { z as z2 } from "zod";
import { randomUUID as randomUUID2 } from "crypto";

// server/services/whatsapp-api.ts
import * as fs from "fs";
import path from "path";
import axios from "axios";
import FormData from "form-data";
var WhatsAppApiService = class _WhatsAppApiService {
  constructor(channel) {
    this.channel = channel;
    const apiVersion = process.env.WHATSAPP_API_VERSION || "v23.0";
    this.baseUrl = `https://graph.facebook.com/${apiVersion}`;
    this.headers = {
      "Authorization": `Bearer ${channel.accessToken}`,
      "Content-Type": "application/json"
    };
  }
  // Static method for sending template messages
  static async sendTemplateMessage(channel, to, templateName, parameters = [], language = "en_US", isMarketing = true) {
    const apiVersion = process.env.WHATSAPP_API_VERSION || "v23.0";
    const baseUrl = `https://graph.facebook.com/${apiVersion}`;
    const phoneNumber = to.replace(/\D/g, "");
    const formattedPhone = phoneNumber.startsWith("+") ? phoneNumber.substring(1) : phoneNumber;
    const body = {
      messaging_product: "whatsapp",
      to: formattedPhone,
      type: "template",
      template: {
        name: templateName,
        language: { code: language },
        components: parameters.length > 0 ? [{
          type: "body",
          parameters: parameters.map((text2) => ({ type: "text", text: text2 }))
        }] : void 0
      }
    };
    console.log("Sending WhatsApp template message:", {
      to: formattedPhone,
      templateName,
      language,
      parameters,
      phoneNumberId: channel.phoneNumberId,
      isMarketing,
      usingMMLite: isMarketing
    });
    const endpoint = isMarketing ? `${baseUrl}/${channel.phoneNumberId}/marketing_messages` : `${baseUrl}/${channel.phoneNumberId}/messages`;
    console.log("WhatsApp API endpoint:", endpoint);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${channel.accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const responseData = await response.json();
    if (!response.ok) {
      console.error("WhatsApp API Error:", responseData);
      throw new Error(responseData.error?.message || "Failed to send template message");
    }
    console.log("WhatsApp message sent successfully:", responseData);
    return responseData;
  }
  /**
   * Get a temporary media download URL for a WhatsApp mediaId
   */
  async fetchMediaUrl(mediaId) {
    const url = `${this.baseUrl}/${mediaId}`;
    console.log(`Fetching media URL: ${url}`);
    const response = await fetch(url, { headers: this.headers });
    const data = await response.json();
    if (!response.ok) {
      console.error("\u274C WhatsApp API Media Fetch Error:", data);
      throw new Error(data.error?.message || "Failed to fetch media URL");
    }
    if (!data.url) {
      throw new Error("No media URL returned by WhatsApp API");
    }
    console.log("\u2705 Media URL fetched successfully:", data.url);
    return data.url;
  }
  /**
   * Download the media file (image, video, document, etc.)
   * and save it locally
   */
  // async downloadMedia(mediaId: string, savePath: string): Promise<void> {
  //   const mediaUrl = await this.fetchMediaUrl(mediaId);
  //   const response = await fetch(mediaUrl, { headers: this.headers });
  //   if (!response.ok) {
  //     throw new Error(`Failed to download media: ${response.statusText}`);
  //   }
  //   await streamPipeline(response.body as any, fs.createWriteStream(savePath));
  //   console.log(`✅ Media downloaded and saved to ${savePath}`);
  // }
  // Static method for checking rate limits
  static async checkRateLimit(channelId) {
    return true;
  }
  // Format phone number to international format
  formatPhoneNumber(phone) {
    let cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 10) {
      cleaned = "91" + cleaned;
    }
    return cleaned;
  }
  // Deprecated - MM Lite now uses marketing_messages endpoint in sendTemplateMessage
  // Keeping for backward compatibility but routes to sendTemplateMessage
  async sendMMliteMessage(to, templateName, parameters = [], language = "en_US") {
    return _WhatsAppApiService.sendTemplateMessage(
      this.channel,
      to,
      templateName,
      parameters,
      language,
      true
      // isMarketing = true for MM Lite
    );
  }
  async createTemplate(templateData) {
    const components = this.formatTemplateComponents(templateData);
    const body = {
      name: templateData.name,
      category: templateData.category,
      language: templateData.language,
      components
    };
    const response = await fetch(
      `${this.baseUrl}/${this.channel.whatsappBusinessAccountId}/message_templates`,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to create template");
    }
    return await response.json();
  }
  async deleteTemplate(templateName) {
    const response = await fetch(
      `${this.baseUrl}/${this.channel.whatsappBusinessAccountId}/message_templates?name=${encodeURIComponent(templateName)}`,
      {
        method: "DELETE",
        headers: this.headers
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to delete template");
    }
    return await response.json();
  }
  async getTemplates() {
    const response = await fetch(
      `${this.baseUrl}/${this.channel.whatsappBusinessAccountId}/message_templates?fields=id,status,name,language,category,components&limit=100`,
      {
        headers: this.headers
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to fetch templates");
    }
    const data = await response.json();
    return data.data || [];
  }
  async sendMessage(to, templateName, parameters = []) {
    const formattedPhone = this.formatPhoneNumber(to);
    const body = {
      messaging_product: "whatsapp",
      to: formattedPhone,
      type: "template",
      template: {
        name: templateName,
        language: { code: "en_US" },
        components: parameters.length > 0 ? [{
          type: "body",
          parameters: parameters.map((text2) => ({ type: "text", text: text2 }))
        }] : void 0
      }
    };
    console.log("Sending WhatsApp message:", {
      to: formattedPhone,
      templateName,
      parameters,
      phoneNumberId: this.channel.phoneNumberId
    });
    const response = await fetch(
      `${this.baseUrl}/${this.channel.phoneNumberId}/messages`,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      console.error("WhatsApp API Error:", responseData);
      throw new Error(responseData.error?.message || "Failed to send message");
    }
    console.log("WhatsApp message sent successfully:", responseData);
    return responseData;
  }
  async sendTextMessage(to, text2) {
    const formattedPhone = this.formatPhoneNumber(to);
    const body = {
      messaging_product: "whatsapp",
      to: formattedPhone,
      type: "text",
      text: { body: text2 }
    };
    const response = await fetch(
      `${this.baseUrl}/${this.channel.phoneNumberId}/messages`,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to send message");
    }
    return await response.json();
  }
  async getPublicMediaUrl(relativePath) {
    const baseUrl = process.env.APP_URL || "https://whatsway.diploy.in";
    const cleanPath = relativePath.startsWith("/") ? relativePath.substring(1) : relativePath;
    return `${baseUrl}/${cleanPath}`;
  }
  /**
  * Upload media buffer to WhatsApp (for cloud files)
  */
  async uploadMediaBuffer(buffer, mimeType, filename) {
    try {
      const FormData2 = (await import("form-data")).default;
      const form = new FormData2();
      form.append("file", buffer, {
        filename,
        contentType: mimeType
      });
      form.append("messaging_product", "whatsapp");
      const response = await axios.post(
        `${this.baseUrl}/${this.channel.phoneNumberId}/media`,
        form,
        {
          headers: {
            Authorization: `Bearer ${this.channel.accessToken}`,
            ...form.getHeaders()
          }
        }
      );
      console.log("\u2705 WhatsApp media upload response:", response.data);
      return response.data.id;
    } catch (error) {
      console.error("\u274C WhatsApp upload buffer error:", error);
      throw new Error("Failed to upload media buffer to WhatsApp");
    }
  }
  async uploadMedia(filePath, mimeType) {
    const resolvedPath = path.resolve(filePath);
    const formData = new FormData();
    formData.append("messaging_product", "whatsapp");
    formData.append("file", fs.createReadStream(resolvedPath), {
      filename: path.basename(resolvedPath),
      contentType: mimeType
    });
    console.log("Uploading local media:", resolvedPath, mimeType);
    try {
      const response = await axios.post(
        `${this.baseUrl}/${this.channel.phoneNumberId}/media`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${this.channel.accessToken}`,
            ...formData.getHeaders()
          }
        }
      );
      console.log("Media uploaded successfully, ID:", response.data.id);
      return response.data.id;
    } catch (error) {
      console.error("WhatsApp upload error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.error?.message || "Failed to upload media"
      );
    }
  }
  async uploadMediaManual(filePath, mimeType) {
    const resolvedPath = path.resolve(filePath);
    const fileBuffer = fs.readFileSync(resolvedPath);
    const fileName = path.basename(resolvedPath);
    const boundary = `----formdata-node-${Math.random().toString(36)}`;
    const chunks = [];
    chunks.push(Buffer.from(`--${boundary}\r
`));
    chunks.push(Buffer.from(`Content-Disposition: form-data; name="messaging_product"\r
\r
`));
    chunks.push(Buffer.from(`whatsapp\r
`));
    chunks.push(Buffer.from(`--${boundary}\r
`));
    chunks.push(Buffer.from(`Content-Disposition: form-data; name="file"; filename="${fileName}"\r
`));
    chunks.push(Buffer.from(`Content-Type: ${mimeType}\r
\r
`));
    chunks.push(fileBuffer);
    chunks.push(Buffer.from(`\r
`));
    chunks.push(Buffer.from(`--${boundary}--\r
`));
    const body = Buffer.concat(chunks);
    console.log("Uploading local media:", resolvedPath, mimeType);
    const response = await fetch(
      `${this.baseUrl}/${this.channel.phoneNumberId}/media`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.channel.accessToken}`,
          "Content-Type": `multipart/form-data; boundary=${boundary}`
        },
        body
      }
    );
    const data = await response.json();
    if (!response.ok) {
      console.error("WhatsApp upload error response:", data);
      throw new Error(data.error?.message || "Failed to upload media");
    }
    console.log("Media uploaded successfully, ID:", data.id);
    return data.id;
  }
  // async getMediaUrl(mediaId: string): Promise<string> {
  //   console.log("Fetching media URL for ID:", mediaId);
  //   const response = await fetch(
  //     `${this.baseUrl}/${mediaId}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${this.channel.accessToken}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   if (!response.ok) {
  //     console.error("WhatsApp get media URL error:", data);
  //     throw new Error(data.error?.message || "Failed to get media URL");
  //   }
  //   // WhatsApp returns the media URL that can be used to download the file
  //   return data.url;
  // }
  async getMediaUrl(mediaId) {
    try {
      const response = await fetch(`https://graph.facebook.com/v17.0/${mediaId}`, {
        headers: {
          "Authorization": `Bearer ${this.channel.accessToken}`
        }
      });
      if (!response.ok) {
        console.error("Failed to get media URL:", response.status, response.statusText);
        return null;
      }
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error("Error getting media URL:", error);
      return null;
    }
  }
  /**
   * Download media content as buffer
   */
  async getMedia(mediaId) {
    try {
      const mediaUrl = await this.getMediaUrl(mediaId);
      if (!mediaUrl) {
        return null;
      }
      const response = await fetch(mediaUrl, {
        headers: {
          "Authorization": `Bearer ${this.channel.accessToken}`,
          "User-Agent": "WhatsAppBusinessAPI/1.0"
        }
      });
      if (!response.ok) {
        console.error("Failed to download media:", response.status, response.statusText);
        return null;
      }
      const arrayBuffer = await response.arrayBuffer();
      return Buffer.from(arrayBuffer);
    } catch (error) {
      console.error("Error downloading media:", error);
      return null;
    }
  }
  /**
   * Stream media content directly
   */
  async streamMedia(mediaId, res) {
    try {
      const mediaUrl = await this.getMediaUrl(mediaId);
      if (!mediaUrl) {
        return false;
      }
      const response = await axios({
        method: "get",
        url: mediaUrl,
        responseType: "stream",
        headers: {
          "Authorization": `Bearer ${this.channel.accessToken}`,
          "User-Agent": "WhatsAppBusinessAPI/1.0"
        }
      });
      if (response.status !== 200) {
        console.error("Failed to stream media:", response.status, response.statusText);
        return false;
      }
      if (response.headers["content-length"]) {
        res.set("Content-Length", response.headers["content-length"]);
      }
      response.data.pipe(res);
      return new Promise((resolve, reject) => {
        response.data.on("end", () => resolve(true));
        response.data.on("error", (error) => {
          console.error("Stream error:", error);
          reject(false);
        });
      });
    } catch (error) {
      console.error("Error streaming media with axios:", error);
      return false;
    }
  }
  // Optional: Method to download and save media locally
  async downloadAndSaveMedia(mediaUrl, fileName) {
    const response = await fetch(mediaUrl, {
      headers: {
        Authorization: `Bearer ${this.channel.accessToken}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to download media");
    }
    const buffer = await response.arrayBuffer();
    const localPath = path.join("uploads", "media", fileName);
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(localPath, Buffer.from(buffer));
    return localPath;
  }
  async sendMediaMessage(to, mediaId, type, caption) {
    const formattedPhone = this.formatPhoneNumber(to);
    const body = {
      messaging_product: "whatsapp",
      to: formattedPhone,
      type,
      [type]: {
        id: mediaId
      }
    };
    if (caption && (type === "image" || type === "video" || type === "document")) {
      body[type].caption = caption;
    }
    const response = await fetch(
      `${this.baseUrl}/${this.channel.phoneNumberId}/messages`,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to send media message");
    }
    return data;
  }
  async sendDirectMessage(payload) {
    if (payload.to) {
      payload.to = this.formatPhoneNumber(payload.to);
    }
    const body = {
      messaging_product: "whatsapp",
      ...payload
    };
    console.log("Sending direct WhatsApp message with payload:", body);
    const response = await fetch(
      `${this.baseUrl}/${this.channel.phoneNumberId}/messages`,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to send message");
    }
    const data = await response.json();
    console.log("Direct WhatsApp message sent successfully:", data);
    return { success: true, data };
  }
  formatTemplateComponents(templateData) {
    const components = [];
    if (templateData.mediaType && templateData.mediaType !== "text") {
      const headerFormat = templateData.mediaType.toUpperCase();
      if (templateData.header) {
        components.push({
          type: "HEADER",
          format: headerFormat,
          text: templateData.header,
          example: templateData.mediaUrl ? {
            header_handle: [templateData.mediaUrl]
          } : void 0
        });
      }
    } else if (templateData.header) {
      components.push({
        type: "HEADER",
        format: "TEXT",
        text: templateData.header
      });
    }
    components.push({
      type: "BODY",
      text: templateData.body
    });
    if (templateData.footer) {
      components.push({
        type: "FOOTER",
        text: templateData.footer
      });
    }
    if (templateData.buttons && templateData.buttons.length > 0) {
      components.push({
        type: "BUTTONS",
        buttons: templateData.buttons.map((button) => {
          if (button.type === "url") {
            return {
              type: "URL",
              text: button.text,
              url: button.url
            };
          } else if (button.type === "phone") {
            return {
              type: "PHONE_NUMBER",
              text: button.text,
              phone_number: button.phoneNumber
            };
          } else {
            return {
              type: "QUICK_REPLY",
              text: button.text
            };
          }
        })
      });
    }
    return components;
  }
  async getMessageStatus(whatsappMessageId) {
    return {
      status: "sent",
      deliveredAt: null,
      readAt: null,
      errorCode: null,
      errorMessage: null
    };
  }
};

// server/controllers/campaigns.controller.ts
var createCampaignSchema = z2.object({
  channelId: z2.string(),
  name: z2.string(),
  description: z2.string().optional(),
  campaignType: z2.enum(["contacts", "csv", "api"]),
  type: z2.enum(["marketing", "transactional"]),
  apiType: z2.enum(["cloud_api", "marketing_messages", "mm_lite"]),
  templateId: z2.string(),
  templateName: z2.string(),
  templateLanguage: z2.string(),
  variableMapping: z2.record(z2.string()).optional(),
  status: z2.string(),
  scheduledAt: z2.string().nullable(),
  contactGroups: z2.array(z2.string()).optional(),
  csvData: z2.array(z2.any()).optional(),
  recipientCount: z2.number(),
  autoRetry: z2.boolean().optional()
});
var updateStatusSchema = z2.object({
  status: z2.string()
});
var campaignsController = {
  // Get all campaigns
  getCampaigns: asyncHandler2(async (req, res) => {
    const channelId = req.headers["x-channel-id"];
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const campaigns2 = channelId ? await storage.getCampaignsByChannel(channelId, page, limit) : await storage.getCampaigns(page, limit);
    res.json(campaigns2);
  }),
  // Get campaign by ID
  getCampaign: asyncHandler2(async (req, res) => {
    const campaign = await storage.getCampaign(req.params.id);
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    res.json(campaign);
  }),
  getCampaignByUserID: asyncHandler2(async (req, res) => {
    const { userId } = req.body;
    const page = Number(req.body.page) || 1;
    const limit = Number(req.body.limit) || 10;
    const campaign = await storage.getCampaignByUserId(userId, page, limit);
    res.json(campaign);
  }),
  // Create new campaign
  createCampaign: asyncHandler2(async (req, res) => {
    const data = createCampaignSchema.parse(req.body);
    if (!req.user?.id) {
      return res.status(401).json({ status: "error", message: "User not authenticated" });
    }
    const createdBy = req.user.id;
    console.log("req.user:", req.user);
    let apiKey = void 0;
    let apiEndpoint = void 0;
    if (data.campaignType === "api") {
      apiKey = `ww_${randomUUID2().replace(/-/g, "")}`;
      apiEndpoint = `${req.protocol}://${req.get(
        "host"
      )}/api/campaigns/send/${apiKey}`;
    }
    let contactIds = [];
    if (data.campaignType === "csv" && data.csvData) {
      for (const row of data.csvData) {
        if (row.phone) {
          let contact = await storage.getContactByPhone(row.phone);
          if (!contact) {
            contact = await storage.createContact({
              channelId: data.channelId,
              name: row.name || row.phone,
              phone: row.phone,
              email: row.email || null,
              groups: ["csv_import"],
              tags: [`campaign_${data.name}`]
            });
          }
          contactIds.push(contact.id);
        }
      }
    } else if (data.campaignType === "contacts") {
      contactIds = data.contactGroups || [];
    }
    const recipientCount = contactIds.length;
    const campaign = await storage.createCampaign({
      ...data,
      apiKey,
      apiEndpoint,
      recipientCount,
      contactGroups: contactIds,
      scheduledAt: data.scheduledAt ? new Date(data.scheduledAt) : null,
      createdBy
    });
    if (data.status === "active" && !data.scheduledAt) {
      await startCampaignExecution(campaign.id);
    }
    res.json(campaign);
  }),
  // Update campaign status
  updateCampaignStatus: asyncHandler2(async (req, res) => {
    const { status } = updateStatusSchema.parse(req.body);
    const campaign = await storage.updateCampaign(req.params.id, { status });
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    if (status === "active") {
      await startCampaignExecution(campaign.id);
    }
    res.json(campaign);
  }),
  // Delete campaign
  deleteCampaign: asyncHandler2(async (req, res) => {
    const deleted = await storage.deleteCampaign(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    res.json({ success: true });
  }),
  // Start campaign execution
  startCampaign: asyncHandler2(async (req, res) => {
    const campaign = await storage.getCampaign(req.params.id);
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    await startCampaignExecution(campaign.id);
    res.json({ success: true, message: "Campaign started" });
  }),
  // Get campaign analytics
  getCampaignAnalytics: asyncHandler2(async (req, res) => {
    const campaign = await storage.getCampaign(req.params.id);
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    if (!campaign.deliveredCount) {
      return res.status(400).json({ error: "No messages delivered yet for this campaign" });
    }
    if (!campaign.sentCount) {
      return res.status(400).json({ error: "No messages sent yet for this campaign" });
    }
    if (!campaign.recipientCount) {
      return res.status(400).json({ error: "No recipients found for this campaign" });
    }
    if (!campaign.readCount) {
      return res.status(400).json({ error: "No messages read yet for this campaign" });
    }
    res.json({
      id: campaign.id,
      name: campaign.name,
      status: campaign.status,
      metrics: {
        recipientCount: campaign.recipientCount,
        sentCount: campaign.sentCount,
        deliveredCount: campaign.deliveredCount,
        readCount: campaign.readCount,
        repliedCount: campaign.repliedCount,
        failedCount: campaign.failedCount,
        deliveryRate: campaign.sentCount ? (campaign.deliveredCount / campaign.recipientCount * 100).toFixed(
          2
        ) : 0,
        readRate: campaign.deliveredCount ? (campaign.readCount / campaign.deliveredCount * 100).toFixed(2) : 0
      },
      createdAt: campaign.createdAt,
      completedAt: campaign.completedAt
    });
  }),
  // API campaign endpoint
  sendApiCampaign: asyncHandler2(async (req, res) => {
    const { apiKey } = req.params;
    const campaigns2 = await storage.getCampaigns();
    const campaign = campaigns2.find((c) => c.apiKey === apiKey);
    if (!campaign || campaign.campaignType !== "api") {
      return res.status(401).json({ error: "Invalid API key" });
    }
    if (campaign.status !== "active") {
      return res.status(400).json({ error: "Campaign is not active" });
    }
    if (!campaign.channelId) {
      return res.status(400).json({ error: "Channel ID is missing in campaign" });
    }
    const channel = await storage.getChannel(campaign.channelId);
    if (!channel) {
      return res.status(400).json({ error: "Channel not found" });
    }
    const { phone, variables = {} } = req.body;
    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }
    if (!campaign.templateId) {
      return res.status(400).json({ error: "Template ID is missing in campaign" });
    }
    const template = await storage.getTemplate(campaign.templateId);
    if (!template) {
      return res.status(400).json({ error: "Template not found" });
    }
    const templateParams = [];
    if (campaign.variableMapping && typeof campaign.variableMapping === "object" && !Array.isArray(campaign.variableMapping) && Object.keys(campaign.variableMapping).length > 0) {
      const mapping = campaign.variableMapping;
      Object.keys(mapping).forEach((key) => {
        const fieldName = mapping[key];
        const value = variables?.[fieldName] || "";
        templateParams.push({ type: "text", text: value });
      });
    }
    try {
      const response = await WhatsAppApiService.sendTemplateMessage(
        channel,
        phone,
        template.name,
        templateParams.map((p) => p.text),
        template.language || "en_US",
        true
        // Always use MM Lite
      );
      const messageId = response.messages?.[0]?.id || `msg_${randomUUID2()}`;
      let conversation = await storage.getConversationByPhone(phone);
      if (!conversation) {
        let contact = await storage.getContactByPhone(phone);
        if (!contact) {
          contact = await storage.createContact({
            name: phone,
            phone,
            channelId: channel.id
          });
        }
        conversation = await storage.createConversation({
          contactId: contact.id,
          contactPhone: phone,
          contactName: contact.name || phone,
          channelId: channel.id,
          unreadCount: 0
        });
      }
      const createdMessage = await storage.createMessage({
        conversationId: conversation.id,
        content: template.body || "",
        status: "sent",
        whatsappMessageId: messageId,
        messageType: "text",
        metadata: {}
      });
      await storage.updateCampaign(campaign.id, {
        sentCount: (campaign.sentCount || 0) + 1
      });
      res.json({
        success: true,
        messageId,
        message: "Message sent successfully"
      });
    } catch (error) {
      await storage.updateCampaign(campaign.id, {
        failedCount: (campaign.failedCount || 0) + 1
      });
      res.status(500).json({
        error: "Failed to send message",
        details: error.message
      });
    }
  })
};
async function startCampaignExecution(campaignId) {
  console.log("Starting campaign execution for:", campaignId);
  const campaign = await storage.getCampaign(campaignId);
  if (!campaign || campaign.status !== "active") {
    console.log("Campaign not found or not active:", campaignId);
    return;
  }
  if (!campaign.channelId) {
    console.error("Channel ID is missing for campaign:", campaignId);
    return;
  }
  const channel = await storage.getChannel(campaign.channelId);
  if (!channel) {
    console.error("Channel not found for campaign:", campaignId);
    return;
  }
  if (!campaign.templateId) {
    console.error("Template ID is missing for campaign:", campaignId);
    return;
  }
  const template = await storage.getTemplate(campaign.templateId);
  if (!template) {
    console.error("Template not found for campaign:", campaignId);
    return;
  }
  console.log("Campaign details:", {
    campaignId,
    channelId: channel.id,
    templateId: template.id,
    templateName: template.name,
    campaignType: campaign.campaignType,
    contactGroups: campaign.contactGroups
  });
  let contacts3 = [];
  if (campaign.campaignType === "contacts" && campaign.contactGroups) {
    for (const contactId of campaign.contactGroups) {
      const contact = await storage.getContact(contactId);
      if (contact) {
        contacts3.push(contact);
      }
    }
  }
  console.log(`Found ${contacts3.length} contacts for campaign`);
  for (const contact of contacts3) {
    try {
      console.log(`Processing contact: ${contact.name} (${contact.phone})`);
      const templateParams = [];
      if (campaign.variableMapping && typeof campaign.variableMapping === "object" && !Array.isArray(campaign.variableMapping)) {
        Object.entries(campaign.variableMapping).forEach(([key, fieldName]) => {
          let value = "";
          if (fieldName === "name") value = contact.name;
          else if (fieldName === "phone") value = contact.phone;
          else if (fieldName === "email") value = contact.email || "";
          templateParams.push({ type: "text", text: value });
        });
      }
      const response = await WhatsAppApiService.sendTemplateMessage(
        channel,
        contact.phone,
        template.name,
        templateParams.map((p) => p.text),
        template.language || "en_US",
        true
        // Always use MM Lite
      );
      const messageId = response.messages?.[0]?.id || `msg_${randomUUID2()}`;
      let conversation = await storage.getConversationByPhone(contact.phone);
      if (!conversation) {
        conversation = await storage.createConversation({
          contactId: contact.id,
          contactPhone: contact.phone,
          contactName: contact.name || contact.phone,
          channelId: channel.id,
          unreadCount: 0
        });
      }
      const createdMessage = await storage.createMessage({
        conversationId: conversation.id,
        content: template.body || "",
        status: "sent",
        whatsappMessageId: messageId,
        messageType: "text",
        metadata: {}
      });
      const updateCampaign = await storage.updateCampaign(campaignId, {
        sentCount: (campaign.sentCount || 0) + 1
      });
      console.log("Campaign updated:", updateCampaign);
    } catch (error) {
      console.error(`Failed to send message to ${contact.phone}:`, error);
      await storage.updateCampaign(campaignId, {
        failedCount: (campaign.failedCount || 0) + 1
      });
    }
  }
  const updatedCampaign = await storage.getCampaign(campaignId);
  if (updatedCampaign && (updatedCampaign.sentCount || 0) + (updatedCampaign.failedCount || 0) >= (updatedCampaign.recipientCount || 0)) {
    await storage.updateCampaign(campaignId, {
      status: "completed",
      completedAt: /* @__PURE__ */ new Date()
    });
  }
}

// server/routes/campaigns.routes.ts
init_schema();
function registerCampaignRoutes(app2) {
  app2.get(
    "/api/campaigns",
    extractChannelId,
    requireAuth,
    requirePermission(PERMISSIONS.CAMPAIGNS_VIEW),
    campaignsController.getCampaigns
  );
  app2.get(
    "/api/campaigns/:id",
    requireAuth,
    requirePermission(PERMISSIONS.CAMPAIGNS_VIEW),
    campaignsController.getCampaign
  );
  app2.post(
    "/api/campaigns",
    requireAuth,
    requirePermission(PERMISSIONS.CAMPAIGNS_CREATE),
    requireSubscription("campaign"),
    campaignsController.createCampaign
  );
  app2.post("/api/getCampaignsByUserId", requireAuth, campaignsController.getCampaignByUserID);
  app2.patch(
    "/api/campaigns/:id/status",
    requireAuth,
    requirePermission(PERMISSIONS.CAMPAIGNS_EDIT),
    campaignsController.updateCampaignStatus
  );
  app2.delete(
    "/api/campaigns/:id",
    requireAuth,
    requirePermission(PERMISSIONS.CAMPAIGNS_DELETE),
    campaignsController.deleteCampaign
  );
  app2.post(
    "/api/campaigns/:id/start",
    campaignsController.startCampaign
  );
  app2.get(
    "/api/campaigns/:id/analytics",
    campaignsController.getCampaignAnalytics
  );
  app2.post(
    "/api/campaigns/send/:apiKey",
    requireAuth,
    requirePermission(PERMISSIONS.CAMPAIGNS_SEND),
    campaignsController.sendApiCampaign
  );
}

// server/controllers/templates.controller.ts
init_storage();
init_schema();
var getTemplatesOld = asyncHandler(async (req, res) => {
  const channelId = req.query.channelId;
  console.log("Fetching templates for channelId:", channelId);
  const templates2 = channelId ? await storage.getTemplatesByChannel(channelId) : await storage.getTemplates();
  res.json(templates2);
});
var getTemplates = asyncHandler(
  async (req, res) => {
    const channelId = req.query.channelId;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    let result;
    console.log("Fetching templates for channelId:", channelId, " page:", page, " limit:", limit);
    if (channelId) {
      result = await storage.getTemplatesByChannel(channelId, page, limit);
    } else {
      result = await storage.getTemplates(page, limit);
    }
    res.status(200).json({
      success: true,
      data: result.data,
      pagination: result.pagination
    });
  }
);
var getTemplatesByUser = asyncHandler(async (req, res) => {
  const channelId = req.query.channelId;
  const userId = req.session.user.id;
  console.log("\u{1F680} Request Params - channelId:", channelId, "userId:", userId);
  if (!channelId) {
    return res.status(400).json({ message: "channelId is required" });
  }
  const templates2 = await storage.getTemplatesByChannelAndUser(channelId, userId);
  res.json(templates2);
});
var getTemplate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const template = await storage.getTemplate(id);
  if (!template) {
    throw new AppError(404, "Template not found");
  }
  res.json(template);
});
var getTemplateByUserID = asyncHandler(async (req, res) => {
  const { userId, page = 1, limit = 10 } = req.body;
  const templates2 = await storage.getTemplatesByUserId(userId, Number(page), Number(limit));
  if (!templates2 || templates2.data.length === 0) {
    return res.status(404).json({ status: "error", message: "Template not found" });
  }
  res.json({
    status: "success",
    data: templates2.data,
    pagination: {
      page: templates2.page,
      limit: templates2.limit,
      total: templates2.total,
      totalPages: Math.ceil(templates2.total / templates2.limit)
    }
  });
});
var createTemplate = asyncHandler(async (req, res) => {
  console.log("Template creation request body:", JSON.stringify(req.body, null, 2));
  const validatedTemplate = insertTemplateSchema.parse(req.body);
  console.log("Validated template buttons:", validatedTemplate.buttons);
  let channelId = validatedTemplate.channelId;
  if (!channelId) {
    const activeChannel = await storage.getActiveChannel();
    if (!activeChannel) {
      throw new AppError(400, "No active channel found. Please configure a channel first.");
    }
    channelId = activeChannel.id;
  }
  const createdBy = req.user?.id;
  if (!createdBy) {
    throw new AppError(401, "User not authenticated");
  }
  const template = await storage.createTemplate({
    ...validatedTemplate,
    channelId,
    status: "pending",
    createdBy
  });
  const channel = await storage.getChannel(channelId);
  if (!channel) {
    throw new AppError(400, "Channel not found");
  }
  try {
    const whatsappApi = new WhatsAppApiService(channel);
    const result = await whatsappApi.createTemplate(validatedTemplate);
    if (result.id) {
      await storage.updateTemplate(template.id, {
        whatsappTemplateId: result.id,
        status: result.status || "pending"
      });
    }
    res.json(template);
  } catch (error) {
    console.error("WhatsApp API error:", error);
    res.json({
      ...template,
      warning: "Template created locally but failed to submit to WhatsApp"
    });
  }
});
var updateTemplate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const validatedData = insertTemplateSchema.parse(req.body);
  const existingTemplate = await storage.getTemplate(id);
  if (!existingTemplate) {
    throw new AppError(404, "Template not found");
  }
  const template = await storage.updateTemplate(id, validatedData);
  if (!template) {
    throw new AppError(404, "Template not found");
  }
  const channel = await storage.getChannel(template.channelId);
  if (!channel) {
    throw new AppError(400, "Channel not found");
  }
  if (existingTemplate.whatsappTemplateId) {
    try {
      const whatsappApi = new WhatsAppApiService(channel);
      await whatsappApi.deleteTemplate(existingTemplate.name);
      const result = await whatsappApi.createTemplate(validatedData);
      if (result.id) {
        await storage.updateTemplate(template.id, {
          whatsappTemplateId: result.id,
          status: result.status || "pending"
        });
      }
      res.json({
        ...template,
        message: "Template updated and resubmitted to WhatsApp for approval"
      });
    } catch (error) {
      console.error("WhatsApp API error during update:", error);
      res.json({
        ...template,
        warning: "Template updated locally but failed to resubmit to WhatsApp"
      });
    }
  } else {
    try {
      const whatsappApi = new WhatsAppApiService(channel);
      const result = await whatsappApi.createTemplate(validatedData);
      if (result.id) {
        await storage.updateTemplate(template.id, {
          whatsappTemplateId: result.id,
          status: result.status || "pending"
        });
      }
      res.json({
        ...template,
        message: "Template updated and submitted to WhatsApp for approval"
      });
    } catch (error) {
      console.error("WhatsApp API error:", error);
      res.json({
        ...template,
        warning: "Template updated locally but failed to submit to WhatsApp"
      });
    }
  }
});
var deleteTemplate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const success = await storage.deleteTemplate(id);
  if (!success) {
    throw new AppError(404, "Template not found");
  }
  res.status(204).send();
});
var syncTemplates = asyncHandler(async (req, res) => {
  let channelId = req.body.channelId || req.query.channelId || req.channelId;
  if (!channelId) {
    const activeChannel = await storage.getActiveChannel();
    if (!activeChannel) {
      throw new AppError(400, "No active channel found");
    }
    channelId = activeChannel.id;
  }
  const channel = await storage.getChannel(channelId);
  if (!channel) {
    throw new AppError(404, "Channel not found");
  }
  try {
    const whatsappApi = new WhatsAppApiService(channel);
    const whatsappTemplates = await whatsappApi.getTemplates();
    const existingTemplates = await storage.getTemplatesByChannel(channelId);
    const existingByName = new Map(existingTemplates.map((t) => [`${t.name}_${t.language}`, t]));
    let updatedCount = 0;
    let createdCount = 0;
    for (const waTemplate of whatsappTemplates) {
      const key = `${waTemplate.name}_${waTemplate.language}`;
      const existing = existingByName.get(key);
      let bodyText = "";
      if (waTemplate.components && Array.isArray(waTemplate.components)) {
        const bodyComponent = waTemplate.components.find((c) => c.type === "BODY");
        if (bodyComponent && bodyComponent.text) {
          bodyText = bodyComponent.text;
        }
      }
      if (existing) {
        if (existing.status !== waTemplate.status || existing.whatsappTemplateId !== waTemplate.id) {
          await storage.updateTemplate(existing.id, {
            status: waTemplate.status,
            whatsappTemplateId: waTemplate.id,
            body: bodyText || existing.body
          });
          updatedCount++;
        }
      } else {
        await storage.createTemplate({
          name: waTemplate.name,
          language: waTemplate.language,
          category: waTemplate.category || "marketing",
          status: waTemplate.status,
          body: bodyText || `Template ${waTemplate.name}`,
          channelId,
          whatsappTemplateId: waTemplate.id
        });
        createdCount++;
      }
    }
    res.json({
      message: `Synced templates: ${createdCount} created, ${updatedCount} updated`,
      createdCount,
      updatedCount,
      totalTemplates: whatsappTemplates.length
    });
  } catch (error) {
    console.error("Template sync error:", error);
    throw new AppError(500, "Failed to sync templates with WhatsApp");
  }
});
var seedTemplates = asyncHandler(async (req, res) => {
  const channelId = req.query.channelId;
  let finalChannelId = channelId;
  if (!finalChannelId) {
    const activeChannel = await storage.getActiveChannel();
    if (activeChannel) {
      finalChannelId = activeChannel.id;
    } else {
      throw new AppError(400, "No active channel found. Please configure a channel first.");
    }
  }
  const templates2 = [
    {
      name: "hello_world",
      body: "Hello {{1}}! Welcome to our WhatsApp Business platform.",
      category: "utility",
      language: "en",
      status: "pending",
      channelId: finalChannelId
    },
    {
      name: "order_confirmation",
      body: "Hi {{1}}, your order #{{2}} has been confirmed and will be delivered by {{3}}.",
      category: "utility",
      language: "en",
      status: "pending",
      channelId: finalChannelId
    },
    {
      name: "appointment_reminder",
      body: "Hello {{1}}, this is a reminder about your appointment on {{2}} at {{3}}. Reply YES to confirm.",
      category: "utility",
      language: "en",
      status: "pending",
      channelId: finalChannelId
    }
  ];
  const createdTemplates = await Promise.all(
    templates2.map((template) => storage.createTemplate(template))
  );
  res.json({ message: "Templates seeded successfully", templates: createdTemplates });
});

// server/routes/templates.routes.ts
init_schema();
init_schema();
function registerTemplateRoutes(app2) {
  app2.get(
    "/api/templates",
    extractChannelId,
    requireAuth,
    requirePermission(PERMISSIONS.TEMPLATES_VIEW),
    getTemplates
  );
  app2.get(
    "/api/templates/:id",
    requireAuth,
    requirePermission(PERMISSIONS.TEMPLATES_VIEW),
    getTemplate
  );
  app2.post("/api/getTemplateByUserId", requireAuth, getTemplateByUserID);
  app2.get(
    "/api/templatesByUserId",
    requireAuth,
    requirePermission(PERMISSIONS.TEMPLATES_VIEW),
    getTemplatesByUser
  );
  app2.post(
    "/api/templates",
    requireAuth,
    requirePermission(PERMISSIONS.TEMPLATES_CREATE),
    validateRequest(insertTemplateSchema),
    createTemplate
  );
  app2.put(
    "/api/templates/:id",
    requireAuth,
    requirePermission(PERMISSIONS.TEMPLATES_EDIT),
    updateTemplate
  );
  app2.delete(
    "/api/templates/:id",
    requireAuth,
    requirePermission(PERMISSIONS.TEMPLATES_DELETE),
    deleteTemplate
  );
  app2.post(
    "/api/templates/sync",
    requireAuth,
    requirePermission(PERMISSIONS.TEMPLATES_SYNC),
    syncTemplates
  );
  app2.post(
    "/api/templates/seed",
    extractChannelId,
    seedTemplates
  );
}

// server/routes/media.routes.ts
import crypto from "crypto";
function registerMediaRoutes(app2) {
  app2.post("/api/media/upload-url", async (req, res) => {
    try {
      const { fileName, fileType } = req.body;
      const fileExtension = fileName.split(".").pop();
      const uniqueFileName = `${crypto.randomBytes(16).toString("hex")}.${fileExtension}`;
      const uploadUrl = `https://storage.example.com/upload/${uniqueFileName}`;
      const fileUrl = `https://storage.example.com/files/${uniqueFileName}`;
      res.json({
        uploadUrl,
        fileUrl
      });
    } catch (error) {
      console.error("Error generating upload URL:", error);
      res.status(500).json({ message: "Failed to generate upload URL" });
    }
  });
}

// server/controllers/conversations.controller.ts
init_storage();
init_schema();
init_db();
import { eq as eq19, desc as desc14, and as and11, sql as sql13 } from "drizzle-orm";

// server/services/automation-execution.service.ts
init_db();
init_schema();
import { sql as sql12 } from "drizzle-orm";
import { eq as eq18, and as and10 } from "drizzle-orm";

// server/services/messageService.ts
init_storage();
async function sendBusinessMessage({ to, message, templateName, parameters, channelId, conversationId }) {
  if (!channelId) {
    const activeChannel = await storage.getActiveChannel();
    if (!activeChannel) {
      throw new AppError(400, "No active channel found. Please select a channel.");
    }
    channelId = activeChannel.id;
  }
  const channel = await storage.getChannel(channelId);
  if (!channel) {
    throw new AppError(404, "Channel not found");
  }
  console.log("Sending message via channel:", channelId, "to:", to);
  const whatsappApi = new WhatsAppApiService(channel);
  let result;
  if (templateName) {
    result = await whatsappApi.sendMessage(to, templateName, parameters || []);
  } else {
    result = await whatsappApi.sendTextMessage(to, message || "Test message");
  }
  console.log("WhatsApp API result:", result);
  let conversation = conversationId ? await storage.getConversation(conversationId) : await storage.getConversationByPhone(to);
  if (!conversation) {
    let contact = await storage.getContactByPhone(to);
    if (!contact) {
      contact = await storage.createContact({
        name: to,
        phone: to,
        channelId
      });
    }
    conversation = await storage.createConversation({
      contactId: contact.id,
      contactPhone: to,
      contactName: contact.name || to,
      channelId,
      unreadCount: 0
    });
  }
  let newMsg = templateName ? (await storage.getTemplatesByName(templateName))[0] : null;
  console.log("Using template for message body:", {
    conversationId: conversation.id,
    content: message || newMsg?.body,
    sender: "business",
    status: "sent",
    whatsappMessageId: result.messages?.[0]?.id
  });
  const createdMessage = await storage.createMessage({
    conversationId: conversation.id,
    content: message ?? newMsg?.body ?? "",
    status: "sent",
    whatsappMessageId: result.messages?.[0]?.id
  });
  await storage.updateConversation(conversation.id, {
    lastMessageAt: /* @__PURE__ */ new Date(),
    lastMessageText: message || newMsg?.body
  });
  if (global.broadcastToConversation) {
    global.broadcastToConversation(conversation.id, {
      type: "new-message",
      message: createdMessage
    });
  }
  console.log("Broadcasted new message to conversation:", conversation.id);
  return {
    success: true,
    messageId: result.messages?.[0]?.id,
    conversationId: conversation.id,
    createdMessage
  };
}

// server/services/automation-execution.service.ts
init_storage();
var AutomationExecutionService = class {
  constructor() {
    this.pendingExecutions = /* @__PURE__ */ new Map();
  }
  /**
   * Start automation execution (called from your controller)
   */
  async executeAutomation(executionId) {
    console.log(`Starting execution: ${executionId}`);
    try {
      const execution = await db.query.automationExecutions.findFirst({
        where: eq18(automationExecutions.id, executionId)
      });
      if (!execution) {
        throw new Error(`Execution ${executionId} not found`);
      }
      const automation = await this.getAutomationWithFlow(execution.automationId);
      if (!automation) {
        throw new Error(`Automation ${execution.automationId} not found`);
      }
      await db.update(automations).set({
        executionCount: automation.executionCount !== null ? automation.executionCount + 1 : null,
        lastExecutedAt: /* @__PURE__ */ new Date()
      }).where(eq18(automations.id, execution.automationId));
      const triggerData = execution.triggerData ?? {};
      const context = {
        executionId: execution.id,
        automationId: execution.automationId,
        contactId: execution.contactId ?? void 0,
        conversationId: execution.conversationId ?? void 0,
        variables: {
          contactId: execution.contactId ?? void 0,
          conversationId: execution.conversationId ?? void 0,
          ...triggerData
        },
        triggerData,
        lastUserMessage: execution.triggerData.message?.content || execution.triggerData.message?.text || ""
      };
      const firstNode = automation.nodes.find(
        (n) => !automation.edges.some((e) => e.targetNodeId === n.nodeId)
      );
      if (firstNode) {
        await this.executeNode(firstNode, automation, context);
      } else {
        await this.completeExecution(executionId, "completed", "No start node found");
      }
    } catch (error) {
      console.error(`Error executing automation ${executionId}:`, error);
      await this.completeExecution(executionId, "failed", error.message);
      throw error;
    }
  }
  /**
   * Execute a single node
   */
  async executeNode(node, automation, context) {
    const startTime = /* @__PURE__ */ new Date();
    console.log(`Executing node ${node.nodeId} (${node.type})`);
    try {
      await this.logNodeExecution(
        context.executionId,
        node.nodeId,
        node.type,
        "running",
        node.data,
        null,
        null
      );
      let result = null;
      switch (node.type) {
        case "custom_reply":
          result = await this.executeCustomReply(node, context);
          break;
        case "user_reply":
          result = await this.executeUserReply(node, context);
          break;
        case "time_gap":
          result = await this.executeTimeGap(node, context);
          return;
        // Time gap handles its own continuation
        case "send_template":
          result = await this.executeSendTemplate(node, context);
          break;
        case "assign_user":
          result = await this.executeAssignUser(node, context);
          break;
        case "conditions":
          result = await this.executeConditions(node, automation, context);
          return;
        // Conditions handle their own routing
        default:
          throw new Error(`Unknown node type: ${node.type}`);
      }
      await this.logNodeExecution(
        context.executionId,
        node.nodeId,
        node.type,
        "completed",
        node.data,
        result,
        null
      );
      await this.continueToNextNode(node, automation, context);
    } catch (error) {
      console.error(`Error executing node ${node.nodeId}:`, error);
      await this.logNodeExecution(
        context.executionId,
        node.nodeId,
        node.type,
        "failed",
        node.data,
        null,
        error.message
      );
      await this.completeExecution(context.executionId, "failed", `Node ${node.nodeId} failed: ${error.message}`);
      throw error;
    }
  }
  /**
   * Execute conditions node - NEW
   */
  async executeConditions(node, automation, context) {
    const conditionData = node.data;
    const conditionType = conditionData.conditionType || "keyword";
    const matchType = conditionData.matchType || "any";
    const keywords = conditionData.keywords || [];
    console.log(`\u{1F50D} Evaluating condition: ${conditionType}, match: ${matchType}, keywords: ${keywords.join(", ")}`);
    let conditionMet = false;
    let matchedKeyword = null;
    let userInput = context.lastUserMessage || "";
    const lowerInput = userInput.toLowerCase().trim();
    const lowerKeywords = keywords.map((k) => k.toLowerCase().trim());
    switch (conditionType) {
      case "keyword":
        if (matchType === "any") {
          for (const keyword of lowerKeywords) {
            if (lowerInput.includes(keyword)) {
              conditionMet = true;
              matchedKeyword = keyword;
              break;
            }
          }
        } else if (matchType === "all") {
          conditionMet = lowerKeywords.every((keyword) => lowerInput.includes(keyword));
          matchedKeyword = conditionMet ? lowerKeywords.join(", ") : null;
        } else if (matchType === "exact") {
          conditionMet = lowerKeywords.includes(lowerInput);
          matchedKeyword = conditionMet ? lowerInput : null;
        }
        break;
      case "regex":
        try {
          const pattern = new RegExp(keywords[0] || "", "i");
          conditionMet = pattern.test(userInput);
          matchedKeyword = conditionMet ? keywords[0] : null;
        } catch (error) {
          console.error("Invalid regex pattern:", keywords[0], error);
          conditionMet = false;
        }
        break;
      case "variable":
        const variableCondition = keywords[0] || "";
        conditionMet = this.evaluateVariableCondition(variableCondition, context.variables);
        matchedKeyword = conditionMet ? variableCondition : null;
        break;
      default:
        console.warn(`Unknown condition type: ${conditionType}`);
        conditionMet = false;
    }
    context.variables.lastConditionResult = conditionMet;
    context.variables.matchedKeyword = matchedKeyword;
    const result = {
      conditionMet,
      matchedKeyword,
      userInput,
      conditionType,
      matchType,
      keywords
    };
    await this.logNodeExecution(
      context.executionId,
      node.nodeId,
      node.type,
      "completed",
      conditionData,
      result,
      null
    );
    console.log(`\u{1F3AF} Condition ${conditionMet ? "MET" : "NOT MET"}: "${matchedKeyword || "none"}"`);
    await this.routeFromCondition(node, automation, context, conditionMet);
    return result;
  }
  /**
   * Route execution based on condition result
   */
  async routeFromCondition(conditionNode, automation, context, conditionMet) {
    const outgoingEdges = automation.edges.filter(
      (e) => e.sourceNodeId === conditionNode.nodeId
    );
    if (outgoingEdges.length === 0) {
      console.log(`\u26A0\uFE0F  No outgoing edges from condition node ${conditionNode.nodeId}`);
      await this.completeExecution(context.executionId, "completed", "Condition evaluated but no next steps defined");
      return;
    }
    if (conditionMet) {
      const trueEdge = outgoingEdges[0];
      const nextNode = automation.nodes.find((n) => n.nodeId === trueEdge.targetNodeId);
      if (nextNode) {
        console.log(`\u27A1\uFE0F  Condition TRUE: Following path to ${nextNode.type} node`);
        await this.executeNode(nextNode, automation, context);
      } else {
        console.warn(`Node ${trueEdge.targetNodeId} not found for TRUE path`);
        await this.completeExecution(context.executionId, "completed", "TRUE path node not found");
      }
    } else {
      if (outgoingEdges.length > 1) {
        const falseEdge = outgoingEdges[1];
        const nextNode = automation.nodes.find((n) => n.nodeId === falseEdge.targetNodeId);
        if (nextNode) {
          console.log(`\u27A1\uFE0F  Condition FALSE: Following alternative path to ${nextNode.type} node`);
          await this.executeNode(nextNode, automation, context);
        } else {
          console.warn(`Node ${falseEdge.targetNodeId} not found for FALSE path`);
          await this.completeExecution(context.executionId, "completed", "FALSE path node not found");
        }
      } else {
        console.log(`\u{1F6D1} Condition FALSE: No alternative path defined, ending execution`);
        await this.completeExecution(context.executionId, "completed", "Condition not met and no alternative path");
      }
    }
  }
  /**
   * Evaluate variable-based conditions
   */
  evaluateVariableCondition(condition, variables) {
    try {
      const resolvedCondition = this.replaceVariables(condition, variables);
      if (resolvedCondition.includes("===")) {
        const [left, right] = resolvedCondition.split("===").map((s) => s.trim().replace(/['"]/g, ""));
        return left === right;
      }
      if (resolvedCondition.includes("!==")) {
        const [left, right] = resolvedCondition.split("!==").map((s) => s.trim().replace(/['"]/g, ""));
        return left !== right;
      }
      if (resolvedCondition.includes("contains")) {
        const [left, right] = resolvedCondition.split("contains").map((s) => s.trim().replace(/['"]/g, ""));
        return left.toLowerCase().includes(right.toLowerCase());
      }
      return Boolean(resolvedCondition);
    } catch (error) {
      console.error("Error evaluating variable condition:", error);
      return false;
    }
  }
  /**
   * Continue to next node(s) using edges
   */
  async continueToNextNode(currentNode, automation, context) {
    const outgoingEdges = automation.edges.filter(
      (e) => e.sourceNodeId === currentNode.nodeId
    );
    if (outgoingEdges.length === 0) {
      await this.completeExecution(context.executionId, "completed", "All nodes executed successfully");
      return;
    }
    for (const edge of outgoingEdges) {
      const nextNode = automation.nodes.find((n) => n.nodeId === edge.targetNodeId);
      if (nextNode) {
        await this.executeNode(nextNode, automation, context);
      }
    }
  }
  /**
   * Execute custom reply node
   */
  // private async executeCustomReply(node: any, context: ExecutionContext) {
  //   const message = this.replaceVariables(node.data.message || '', context.variables);
  //   console.log(`Sending message to conversation ${context.conversationId}: "${message}"`);
  //   const getContact = await db.query.contacts.findFirst({
  //     where: eq(contacts?.id, context.contactId),
  //   });
  //   if (getContact?.phone) {
  //     await sendBusinessMessage({
  //       to: getContact?.phone,
  //       message,
  //       channelId: getContact?.channelId,
  //     });
  //   }
  //   console.log(`✅ Message sent: ${message}`);
  //   return {
  //     action: 'message_sent',
  //     message,
  //     conversationId: context.conversationId
  //   };
  // }
  /**
   * Enhanced handleUserResponse to update context with user message for conditions
   */
  async handleUserResponse(conversationId, userResponse, interactiveData) {
    console.log(`\u{1F4E8} Received user response for conversation ${conversationId}: "${userResponse}"`);
    const pendingExecution = this.findPendingExecutionByConversation(conversationId);
    if (!pendingExecution) {
      console.warn(`No pending execution found for conversation ${conversationId}`);
      return null;
    }
    try {
      this.pendingExecutions.delete(pendingExecution.pendingId);
      let processedResponse = userResponse;
      let selectedButtonId = null;
      if (interactiveData && interactiveData.type === "button_reply") {
        selectedButtonId = interactiveData.button_reply.id;
        processedResponse = interactiveData.button_reply.title;
        console.log(`\u{1F518} Button clicked: ${selectedButtonId} - "${processedResponse}"`);
      } else if (pendingExecution.expectedButtons && pendingExecution.expectedButtons.length > 0) {
        const matchedButton = this.matchTextToButton(userResponse, pendingExecution.expectedButtons);
        if (matchedButton) {
          selectedButtonId = matchedButton.id;
          processedResponse = matchedButton.text;
          console.log(`\u{1F3AF} Matched text "${userResponse}" to button: ${selectedButtonId} - "${processedResponse}"`);
        }
      }
      const context = pendingExecution.context;
      context.lastUserMessage = processedResponse;
      if (pendingExecution.saveAs) {
        context.variables[pendingExecution.saveAs] = processedResponse;
        if (selectedButtonId) {
          context.variables[`${pendingExecution.saveAs}_button_id`] = selectedButtonId;
        }
        console.log(`\u{1F4BE} Saved user response to variable: ${pendingExecution.saveAs} = "${processedResponse}"`);
      }
      await this.logNodeExecution(
        context.executionId,
        pendingExecution.nodeId,
        "user_reply",
        "completed",
        { question: "User response received", interactiveData },
        {
          userResponse: processedResponse,
          selectedButtonId,
          savedAs: pendingExecution.saveAs
        },
        null
      );
      await db.update(automationExecutions).set({
        status: "running",
        result: null
      }).where(eq18(automationExecutions.id, context.executionId));
      console.log(`\u25B6\uFE0F  Resuming execution ${context.executionId} with user response`);
      const automation = await this.getAutomationWithFlow(context.automationId);
      if (!automation) {
        throw new Error(`Automation ${context.automationId} not found during resume`);
      }
      const currentNode = automation.nodes.find((n) => n.nodeId === pendingExecution.nodeId);
      if (currentNode) {
        await this.continueToNextNode(currentNode, automation, context);
      } else {
        throw new Error(`Node ${pendingExecution.nodeId} not found during resume`);
      }
      return {
        success: true,
        executionId: context.executionId,
        userResponse: processedResponse,
        selectedButtonId,
        savedVariable: pendingExecution.saveAs,
        resumedAt: /* @__PURE__ */ new Date()
      };
    } catch (error) {
      console.error(`Error resuming execution for conversation ${conversationId}:`, error);
      await this.completeExecution(
        pendingExecution.executionId,
        "failed",
        `Failed to resume after user response: ${error.message}`
      );
      throw error;
    }
  }
  // // ... [Rest of your existing methods remain the same] ...
  // private async executeUserReply(node: any, context: ExecutionContext) {
  //   const question = this.replaceVariables(node.data.question || '', context.variables);
  //   const buttons = node.data.buttons || [];
  //   console.log(`Asking question to conversation ${context.conversationId}: "${question}"`);
  //   console.log('Question buttons:', buttons);
  //   // Get contact information
  //   const getContact = await db.query.contacts.findFirst({
  //     where: eq(contacts?.id, context.contactId),
  //   });
  //   if (!getContact?.phone) {
  //     throw new Error('Contact phone number not found');
  //   }
  //   // Send the question with buttons (if any)
  //   if (buttons.length > 0) {
  //     // Send interactive message with buttons
  //     await this.sendInteractiveMessage(
  //       getContact.phone,
  //       question,
  //       buttons,
  //       getContact.channelId,
  //       context.conversationId
  //     );
  //   } else {
  //     // Send regular text message
  //     await sendBusinessMessage({
  //       to: getContact.phone,
  //       message: question,
  //       channelId: getContact.channelId,
  //       conversationId: context.conversationId,
  //     });
  //   }
  //   // Create a unique pending execution ID
  //   const pendingId = `${context.executionId}_${node.nodeId}_${Date.now()}`;
  //   // Store the execution state for resumption
  //   const pendingExecution: PendingExecution = {
  //     executionId: context.executionId,
  //     automationId: context.automationId,
  //     nodeId: node.nodeId,
  //     conversationId: context.conversationId,
  //     contactId: context.contactId,
  //     context: { ...context },
  //     saveAs: node.data.saveAs,
  //     timestamp: new Date(),
  //     status: 'waiting_for_response',
  //     expectedButtons: buttons // Store buttons for validation
  //   };
  //   this.pendingExecutions.set(pendingId, pendingExecution);
  //   // Update execution status to paused
  //   await db.update(automationExecutions)
  //     .set({
  //       status: 'paused',
  //       result: `Waiting for user response to: "${question}"`
  //     })
  //     .where(eq(automationExecutions.id, context.executionId));
  //   // Log that we're waiting
  //   await this.logNodeExecution(
  //     context.executionId,
  //     node.nodeId,
  //     node.type,
  //     'waiting_for_response',
  //     { ...node.data, question, buttons },
  //     { pendingId, action: 'interactive_question_sent' },
  //     null
  //   );
  //   console.log(`✅ Interactive question sent: ${question} with ${buttons.length} buttons`);
  //   console.log(`⏸️  Execution paused. Waiting for user response (pending ID: ${pendingId})`);
  //   return {
  //     action: 'execution_paused',
  //     question,
  //     buttons,
  //     conversationId: context.conversationId,
  //     pendingId,
  //     saveAs: node.data.saveAs
  //   };
  // }
  // Enhanced executeCustomReply method with media support
  async executeCustomReply(node, context) {
    const message = this.replaceVariables(node.data.message || "", context.variables);
    const nodeData = node.data;
    console.log(`Sending message to conversation ${context.conversationId}: "${message}"`);
    const getContact2 = await db.query.contacts.findFirst({
      where: eq18(contacts?.id, context.contactId)
    });
    if (!getContact2?.phone) {
      throw new Error("Contact phone number not found");
    }
    const hasMedia = nodeData.imageFile || nodeData.videoFile || nodeData.audioFile || nodeData.documentFile;
    if (hasMedia) {
      await this.sendMediaMessage(getContact2, nodeData, message, context);
    } else {
      if (!getContact2?.phone) {
        throw new Error("Contact phone number not found");
      }
      if (!getContact2?.channelId) {
        throw new Error("channelId not found");
      }
      await sendBusinessMessage({
        to: getContact2.phone,
        message,
        channelId: getContact2.channelId
      });
    }
    console.log(`\u2705 Message sent: ${message}`);
    return {
      action: "message_sent",
      message,
      conversationId: context.conversationId,
      hasMedia
    };
  }
  /**
   * Send media message with WhatsApp API
   */
  async sendMediaMessage(contact, nodeData, caption, context) {
    try {
      const channel = await storage.getChannel(contact.channelId);
      if (!channel) {
        throw new Error(`Channel ${contact.channelId} not found`);
      }
      const whatsappApi = new WhatsAppApiService(channel);
      const formattedPhone = this.formatPhoneNumber(contact.phone);
      let mediaPayload = {
        messaging_product: "whatsapp",
        to: formattedPhone
      };
      console.log("nodeData for media:", nodeData);
      if (nodeData.imageFile) {
        mediaPayload.type = "image";
        mediaPayload.image = {
          link: await this.getPublicMediaUrl(nodeData.imageFile.path),
          caption: caption || void 0
        };
      } else if (nodeData.videoFile) {
        mediaPayload.type = "video";
        mediaPayload.video = {
          link: await this.getPublicMediaUrl(nodeData.videoFile.path),
          caption: caption || void 0
        };
      } else if (nodeData.audioFile) {
        mediaPayload.type = "audio";
        mediaPayload.audio = {
          link: await this.getPublicMediaUrl(nodeData.audioFile.path)
        };
        if (caption) {
          await this.sendTextMessage(whatsappApi, formattedPhone, caption);
        }
      } else if (nodeData.documentFile) {
        mediaPayload.type = "document";
        mediaPayload.document = {
          link: await this.getPublicMediaUrl(nodeData.documentFile.path),
          filename: nodeData.documentFile.filename,
          caption: caption || void 0
        };
      }
      console.log("Media payload:", mediaPayload);
      const response = await fetch(
        `https://graph.facebook.com/v23.0/${channel.phoneNumberId}/messages`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${channel.accessToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(mediaPayload)
        }
      );
      if (!response.ok) {
        const error = await response.json();
        console.error("WhatsApp Media API Error:", error);
        throw new Error(error.error?.message || "Failed to send media message");
      }
      const result = await response.json();
      await this.saveMediaMessage(contact, nodeData, caption, context, result);
      console.log(`\u2705 Media message sent successfully to ${contact.phone}`);
      return result;
    } catch (error) {
      console.error("Error sending media message:", error);
      const fallbackMessage = `${caption}

[Media file: ${this.getMediaFileName(nodeData)}]`;
      await sendBusinessMessage({
        to: contact.phone,
        message: fallbackMessage,
        channelId: contact.channelId
      });
      throw error;
    }
  }
  /**
   * Enhanced executeUserReply with media support
   */
  async executeUserReply(node, context) {
    const question = this.replaceVariables(node.data.question || "", context.variables);
    const buttons = node.data.buttons || [];
    const nodeData = node.data;
    console.log(`Asking question to conversation ${context.conversationId}: "${question}"`);
    console.log("Question buttons:", buttons);
    const getContact2 = await db.query.contacts.findFirst({
      where: eq18(contacts?.id, context.contactId)
    });
    if (!getContact2?.phone) {
      throw new Error("Contact phone number not found");
    }
    const hasMedia = nodeData.imageFile || nodeData.videoFile || nodeData.audioFile || nodeData.documentFile;
    if (hasMedia) {
      await this.sendMediaMessage(getContact2, nodeData, question, context);
    }
    if (!getContact2?.channelId) {
      throw new Error("channelId not found");
    }
    if (buttons.length > 0) {
      await this.sendInteractiveMessage(
        getContact2.phone,
        hasMedia ? "Please choose an option:" : question,
        // Avoid duplicate text if media was sent
        buttons,
        getContact2.channelId,
        context.conversationId
      );
    } else if (!hasMedia) {
      await sendBusinessMessage({
        to: getContact2.phone,
        message: question,
        channelId: getContact2.channelId,
        conversationId: context.conversationId
      });
    }
    const pendingId = `${context.executionId}_${node.nodeId}_${Date.now()}`;
    if (!context.conversationId) {
      throw new Error("conversationId is required to wait for user response");
    }
    const pendingExecution = {
      executionId: context.executionId,
      automationId: context.automationId,
      nodeId: node.nodeId,
      conversationId: context.conversationId,
      contactId: context.contactId,
      context: { ...context },
      saveAs: node.data.saveAs,
      timestamp: /* @__PURE__ */ new Date(),
      status: "waiting_for_response",
      expectedButtons: buttons
    };
    this.pendingExecutions.set(pendingId, pendingExecution);
    await db.update(automationExecutions).set({
      status: "paused",
      result: `Waiting for user response to: "${question}"`
    }).where(eq18(automationExecutions.id, context.executionId));
    await this.logNodeExecution(
      context.executionId,
      node.nodeId,
      node.type,
      "waiting_for_response",
      { ...node.data, question, buttons, hasMedia },
      { pendingId, action: "interactive_question_sent" },
      null
    );
    console.log(`\u2705 Interactive question sent: ${question} with ${buttons.length} buttons and media: ${hasMedia}`);
    console.log(`\u23F8\uFE0F  Execution paused. Waiting for user response (pending ID: ${pendingId})`);
    return {
      action: "execution_paused",
      question,
      buttons,
      hasMedia,
      conversationId: context.conversationId,
      pendingId,
      saveAs: node.data.saveAs
    };
  }
  /**
   * Helper method to send text message
   */
  async sendTextMessage(whatsappApi, to, message) {
    const payload = {
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: message }
    };
    const response = await fetch(
      `https://graph.facebook.com/v23.0/${whatsappApi.channel.phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${whatsappApi.channel.accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to send text message");
    }
    return await response.json();
  }
  /**
   * Convert relative media path to public URL
   */
  async getPublicMediaUrl(relativePath) {
    const baseUrl = process.env.APP_URL || "https://whatsway.diploy.in";
    const cleanPath = relativePath.startsWith("/") ? relativePath.substring(1) : relativePath;
    return `${baseUrl}/${cleanPath}`;
  }
  /**
   * Save media message to database
   */
  async saveMediaMessage(contact, nodeData, caption, context, whatsappResult) {
    try {
      let messageType = "text";
      let messageContent = caption;
      let metadata = {};
      if (nodeData.imageFile) {
        messageType = "image";
        metadata = {
          mediaType: "image",
          mediaPath: nodeData.imageFile.path,
          fileName: nodeData.imageFile.filename,
          fileSize: nodeData.imageFile.size,
          mimeType: nodeData.imageFile.mimetype
        };
      } else if (nodeData.videoFile) {
        messageType = "video";
        metadata = {
          mediaType: "video",
          mediaPath: nodeData.videoFile.path,
          fileName: nodeData.videoFile.filename,
          fileSize: nodeData.videoFile.size,
          mimeType: nodeData.videoFile.mimetype
        };
      } else if (nodeData.audioFile) {
        messageType = "audio";
        metadata = {
          mediaType: "audio",
          mediaPath: nodeData.audioFile.path,
          fileName: nodeData.audioFile.filename,
          fileSize: nodeData.audioFile.size,
          mimeType: nodeData.audioFile.mimetype
        };
      } else if (nodeData.documentFile) {
        messageType = "document";
        metadata = {
          mediaType: "document",
          mediaPath: nodeData.documentFile.path,
          fileName: nodeData.documentFile.filename,
          fileSize: nodeData.documentFile.size,
          mimeType: nodeData.documentFile.mimetype
        };
      }
      if (!context.conversationId) {
        console.warn("No conversationId in context, cannot save media message");
        return;
      }
      const conversation = await storage.getConversation(context.conversationId);
      if (!conversation) {
        console.warn("Conversation not found for media message");
        return;
      }
      console.log("Saving media message ", metadata, metadata.mediaPath, nodeData.documentFile.path, this.getPublicMediaUrl(metadata.mediaPath || ""), {
        conversationId: conversation.id,
        content: messageContent,
        status: "sent",
        whatsappMessageId: whatsappResult.messages?.[0]?.id,
        messageType,
        metadata: JSON.stringify(metadata),
        mediaUrl: await this.getPublicMediaUrl(metadata.mediaPath || "")
      });
      const createdMessage = await storage.createMessage({
        conversationId: conversation.id,
        content: messageContent,
        status: "sent",
        whatsappMessageId: whatsappResult.messages?.[0]?.id,
        messageType,
        metadata: JSON.stringify(metadata),
        mediaUrl: await this.getPublicMediaUrl(metadata.mediaPath || "")
      });
      await storage.updateConversation(conversation.id, {
        lastMessageAt: /* @__PURE__ */ new Date(),
        lastMessageText: messageContent || `[${messageType}]`
      });
      if (global.broadcastToConversation) {
        global.broadcastToConversation(conversation.id, {
          type: "new-message",
          message: createdMessage
        });
      }
    } catch (error) {
      console.error("Error saving media message to database:", error);
    }
  }
  /**
   * Get media file name for fallback messages
   */
  getMediaFileName(nodeData) {
    if (nodeData.imageFile) return nodeData.imageFile.filename;
    if (nodeData.videoFile) return nodeData.videoFile.filename;
    if (nodeData.audioFile) return nodeData.audioFile.filename;
    if (nodeData.documentFile) return nodeData.documentFile.filename;
    return "media file";
  }
  /**
   * Enhanced sendInteractiveMessage to handle media better
   */
  async sendInteractiveMessage(to, question, buttons, channelId, conversationId) {
    try {
      const channel = await storage.getChannel(channelId);
      if (!channel) {
        throw new Error(`Channel ${channelId} not found`);
      }
      const interactivePayload = {
        messaging_product: "whatsapp",
        to: this.formatPhoneNumber(to),
        type: "interactive",
        interactive: {
          type: "button",
          body: {
            text: question
          },
          action: {
            buttons: buttons.slice(0, 3).map((btn, index2) => ({
              type: "reply",
              reply: {
                id: btn.id || `btn_${index2}`,
                title: btn.text?.substring(0, 20) || `Option ${index2 + 1}`
              }
            }))
          }
        }
      };
      const whatsappApi = new WhatsAppApiService(channel);
      const result = await this.sendInteractiveMessageDirect(whatsappApi, interactivePayload);
      const messageContent = `${question}

Options:
${buttons.map((btn, i) => `${i + 1}. ${btn.text}`).join("\n")}`;
      const conversation = conversationId ? await storage.getConversation(conversationId) : await storage.getConversationByPhone(to);
      if (conversation) {
        const createdMessage = await storage.createMessage({
          conversationId: conversation.id,
          content: messageContent,
          status: "sent",
          whatsappMessageId: result.messages?.[0]?.id,
          messageType: "interactive",
          metadata: JSON.stringify({ buttons, interactiveType: "button" })
        });
        await storage.updateConversation(conversation.id, {
          lastMessageAt: /* @__PURE__ */ new Date(),
          lastMessageText: question
        });
        if (global.broadcastToConversation) {
          global.broadcastToConversation(conversation.id, {
            type: "new-message",
            message: createdMessage
          });
        }
      }
      console.log(`\u2705 Interactive message sent successfully to ${to}`);
      return result;
    } catch (error) {
      console.error("Error sending interactive message:", error);
      console.log("\u{1F4F1} Falling back to text message with options...");
      const fallbackMessage = `${question}

Reply with:
${buttons.map((btn, i) => `${i + 1}. ${btn.text}`).join("\n")}`;
      return await sendBusinessMessage({
        to,
        message: fallbackMessage,
        channelId,
        conversationId
      });
    }
  }
  // private async sendInteractiveMessage(
  //   to: string, 
  //   question: string, 
  //   buttons: any[], 
  //   channelId: string, 
  //   conversationId?: string
  // ) {
  //   try {
  //     // Get channel information
  //     const channel = await storage.getChannel(channelId);
  //     if (!channel) {
  //       throw new Error(`Channel ${channelId} not found`);
  //     }
  //     // Create WhatsApp interactive message payload
  //     const interactivePayload = {
  //       messaging_product: "whatsapp",
  //       to: this.formatPhoneNumber(to),
  //       type: "interactive",
  //       interactive: {
  //         type: "button",
  //         body: {
  //           text: question
  //         },
  //         action: {
  //           buttons: buttons.slice(0, 3).map((btn, index) => ({ // WhatsApp allows max 3 buttons
  //             type: "reply",
  //             reply: {
  //               id: btn.id || `btn_${index}`,
  //               title: btn.text?.substring(0, 20) || `Option ${index + 1}` // Max 20 chars
  //             }
  //           }))
  //         }
  //       }
  //     };
  //     // Send via WhatsApp API
  //     const whatsappApi = new WhatsAppApiService(channel);
  //     const result = await this.sendInteractiveMessageDirect(whatsappApi, interactivePayload);
  //     // Save the message to database
  //     const messageContent = `${question}\n\nOptions:\n${buttons.map((btn, i) => `${i + 1}. ${btn.text}`).join('\n')}`;
  //     // Find or create conversation
  //     let conversation = conversationId
  //       ? await storage.getConversation(conversationId)
  //       : await storage.getConversationByPhone(to);
  //     if (!conversation) {
  //       let contact = await storage.getContactByPhone(to);
  //       if (!contact) {
  //         contact = await storage.createContact({
  //           name: to,
  //           phone: to,
  //           channelId,
  //         });
  //       }
  //       conversation = await storage.createConversation({
  //         contactId: contact.id,
  //         contactPhone: to,
  //         contactName: contact.name || to,
  //         channelId,
  //         unreadCount: 0,
  //       });
  //     }
  //     // Save message
  //     const createdMessage = await storage.createMessage({
  //       conversationId: conversation.id,
  //       content: messageContent,
  //       sender: "business",
  //       status: "sent",
  //       whatsappMessageId: result.messages?.[0]?.id,
  //       messageType: "interactive",
  //       metadata: JSON.stringify({ buttons, interactiveType: "button" })
  //     });
  //     // Update conversation
  //     await storage.updateConversation(conversation.id, {
  //       lastMessageAt: new Date(),
  //       lastMessageText: question,
  //     });
  //     // Broadcast to websocket
  //     if ((global as any).broadcastToConversation) {
  //       (global as any).broadcastToConversation(conversation.id, {
  //         type: "new-message",
  //         message: createdMessage,
  //       });
  //     }
  //     console.log(`✅ Interactive message sent successfully to ${to}`);
  //     return result;
  //   } catch (error) {
  //     console.error('Error sending interactive message:', error);
  //     // Fallback to regular text message with numbered options
  //     console.log('📱 Falling back to text message with options...');
  //     const fallbackMessage = `${question}\n\nReply with:\n${buttons.map((btn, i) => `${i + 1}. ${btn.text}`).join('\n')}`;
  //     return await sendBusinessMessage({
  //       to,
  //       message: fallbackMessage,
  //       channelId,
  //       conversationId
  //     });
  //   }
  // }
  async sendInteractiveMessageDirect(whatsappApi, payload) {
    const response = await fetch(
      `https://graph.facebook.com/v23.0/${whatsappApi.channel.phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${whatsappApi.channel.accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );
    if (!response.ok) {
      const error = await response.json();
      console.error("WhatsApp API Error:", error);
      throw new Error(error.error?.message || "Failed to send interactive message");
    }
    return await response.json();
  }
  matchTextToButton(text2, buttons) {
    const lowerText = text2.toLowerCase().trim();
    let match = buttons.find((btn) => btn.text.toLowerCase() === lowerText);
    if (match) return match;
    const numberMatch = lowerText.match(/^(\d+)$/);
    if (numberMatch) {
      const index2 = parseInt(numberMatch[1]) - 1;
      if (index2 >= 0 && index2 < buttons.length) {
        return buttons[index2];
      }
    }
    match = buttons.find(
      (btn) => btn.text.toLowerCase().includes(lowerText) || lowerText.includes(btn.text.toLowerCase())
    );
    return match;
  }
  formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 10) {
      return `1${cleaned}`;
    }
    return cleaned;
  }
  findPendingExecutionByConversation(conversationId) {
    for (const [pendingId, execution] of this.pendingExecutions.entries()) {
      if (execution.conversationId === conversationId) {
        return { pendingId, ...execution };
      }
    }
    return null;
  }
  async executeTimeGap(node, context, automation) {
    const delay = node.data?.delay || 60;
    console.log(`\u23F3 Delaying execution by ${delay} seconds`);
    setTimeout(async () => {
      try {
        console.log(`\u23F0 Delay completed, continuing execution`);
        const freshAutomation = await this.getAutomationWithFlow(context.automationId);
        await this.continueToNextNode(node, freshAutomation, context);
      } catch (error) {
        console.error("Error continuing after delay:", error);
        await this.completeExecution(context.executionId, "failed", `Delay continuation failed: ${error.message}`);
      }
    }, delay * 1e3);
    return {
      action: "delay_started",
      delay,
      scheduledFor: new Date(Date.now() + delay * 1e3)
    };
  }
  async executeSendTemplate(node, context) {
    const templateId = node.data?.templateId;
    console.log("node & context", node, context);
    if (!templateId) {
      throw new Error("No template ID provided");
    }
    if (!context.contactId) {
      throw new Error("No contact ID in context");
    }
    if (!context.conversationId) {
      throw new Error("No conversation ID in context");
    }
    const getContact2 = await db.query.contacts.findFirst({
      where: eq18(contacts?.id, context.contactId)
    });
    if (!getContact2?.phone) {
      throw new Error("Contact phone number not found");
    }
    console.log(`\u{1F4C4} Sending template ${templateId} to conversation ${context.conversationId}`);
    if (!getContact2?.channelId) {
      throw new Error("Contact has no channelId");
    }
    const getTemplate2 = await db.query.templates.findFirst({
      where: and10(
        eq18(templates.id, templateId),
        eq18(templates.channelId, getContact2.channelId)
      )
    });
    if (!getContact2?.channelId) {
      throw new Error("channelId not found");
    }
    if (getContact2?.phone) {
      await sendBusinessMessage({
        to: getContact2?.phone,
        templateName: getTemplate2?.name || "",
        parameters: node.data?.parameters || [],
        channelId: getContact2?.channelId
      });
    }
    console.log(`\u2705 Template sent: ${templateId}`);
    return {
      action: "template_sent",
      templateId,
      conversationId: context.conversationId
    };
  }
  async executeAssignUser(node, context) {
    const assigneeId = node.data?.assigneeId;
    if (!assigneeId) {
      throw new Error("No assignee ID provided");
    }
    console.log(`\u{1F464} Assigning conversation ${context.conversationId} to user ${assigneeId}`);
    if (!context.conversationId) {
      throw new Error("No conversationId provided in context");
    }
    const conversation = await storage.updateConversation(context.conversationId, { assignedTo: assigneeId, status: "assigned" });
    if (!conversation) {
      throw new Error("Conversation not found for assignment");
    }
    console.log(`\u2705 Conversation assigned to: ${assigneeId}`);
    return {
      action: "user_assigned",
      assigneeId,
      conversationId: context.conversationId
    };
  }
  getPendingExecutions() {
    return Array.from(this.pendingExecutions.entries()).map(([pendingId, execution]) => ({
      pendingId,
      executionId: execution.executionId,
      conversationId: execution.conversationId,
      nodeId: execution.nodeId,
      contactId: execution.contactId,
      saveAs: execution.saveAs,
      timestamp: execution.timestamp,
      waitingTime: Date.now() - execution.timestamp.getTime()
    }));
  }
  hasPendingExecution(conversationId) {
    return this.findPendingExecutionByConversation(conversationId) !== null;
  }
  async cleanupExpiredExecutions(timeoutMs = 30 * 60 * 1e3) {
    const now = Date.now();
    const expired = [];
    for (const [pendingId, execution] of this.pendingExecutions.entries()) {
      if (now - execution.timestamp.getTime() > timeoutMs) {
        expired.push({ pendingId, execution });
      }
    }
    for (const { pendingId, execution } of expired) {
      this.pendingExecutions.delete(pendingId);
      await this.completeExecution(
        execution.executionId,
        "failed",
        "Execution timed out waiting for user response"
      );
      console.warn(`\u26A0\uFE0F  Cleaned up expired execution: ${pendingId} (conversation: ${execution.conversationId})`);
    }
    return expired.length;
  }
  async cancelExecution(conversationId) {
    const pending = this.findPendingExecutionByConversation(conversationId);
    if (pending) {
      this.pendingExecutions.delete(pending.pendingId);
      await this.completeExecution(pending.executionId, "failed", "Execution cancelled by user");
      console.log(`\u274C Cancelled execution for conversation: ${conversationId}`);
      return true;
    }
    return false;
  }
  async completeExecution(executionId, status, result) {
    await db.update(automationExecutions).set({
      status,
      completedAt: /* @__PURE__ */ new Date(),
      result
    }).where(eq18(automationExecutions.id, executionId));
    console.log(`\u{1F3C1} Execution ${executionId} ${status}: ${result}`);
  }
  async logNodeExecution(executionId, nodeId, nodeType, status, input, output, error) {
    await db.insert(automationExecutionLogs).values({
      executionId,
      nodeId,
      nodeType,
      status,
      input: JSON.stringify(input),
      output: JSON.stringify(output),
      error
    });
  }
  replaceVariables(text2, variables) {
    return text2.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return variables[key] || match;
    });
  }
  async getAutomationWithFlow(automationId) {
    const automation = await db.query.automations.findFirst({
      where: eq18(automations.id, automationId),
      with: {
        nodes: true,
        edges: true
      }
    });
    return automation;
  }
};
var AutomationTriggerService = class {
  constructor() {
    this.executionService = new AutomationExecutionService();
  }
  /**
   * Handle new conversation trigger
   */
  async handleNewConversation(conversationId, channelId, contactId) {
    console.log(`\u{1F3AF} New conversation trigger: ${conversationId}`);
    const activeAutomations = await db.select().from(automations).where(and10(
      eq18(automations.channelId, channelId),
      eq18(automations.trigger, "new_conversation"),
      eq18(automations.status, "active")
    ));
    console.log(`Found ${activeAutomations.length} active automation(s)`);
    for (const automation of activeAutomations) {
      try {
        const [execution] = await db.insert(automationExecutions).values({
          automationId: automation.id,
          contactId,
          conversationId,
          triggerData: {
            trigger: "new_conversation",
            channelId,
            timestamp: /* @__PURE__ */ new Date()
          },
          status: "running"
        }).returning();
        await this.executionService.executeAutomation(execution.id);
      } catch (error) {
        console.error(`Failed to execute automation ${automation.id}:`, error);
      }
    }
  }
  /**
   * Handle message received trigger - ENHANCED for conditions
   */
  // async handleMessageReceived(conversationId: string, message: any, channelId: string, contactId?: string) {
  //   console.log(`💬 Message received trigger: ${conversationId}`);
  //   // First, check if this is a response to a pending user_reply node
  //   if (this.executionService.hasPendingExecution(conversationId)) {
  //     console.log(`📨 Processing as user response to pending execution`);
  //     try {
  //       await this.executionService.handleUserResponse(conversationId, message.content || message.text || message, message.interactive);
  //       return; // Don't trigger new automations if this was a response
  //     } catch (error) {
  //       console.error(`Error handling user response:`, error);
  //       // Continue to trigger new automations as fallback
  //     }
  //   }
  //   // Normal message-based automation triggers
  //   const activeAutomations = await db.select()
  //     .from(automations)
  //     .where(and(
  //       eq(automations.channelId, channelId),
  //       eq(automations.trigger, 'message_received'),
  //       eq(automations.status, 'active')
  //     ));
  //   for (const automation of activeAutomations) {
  //     try {
  //       const [execution] = await db.insert(automationExecutions).values({
  //         automationId: automation.id,
  //         contactId,
  //         conversationId,
  //         triggerData: {
  //           trigger: 'message_received',
  //           message,
  //           channelId,
  //           timestamp: new Date()
  //         },
  //         status: 'running'
  //       }).returning();
  //       await this.executionService.executeAutomation(execution.id);
  //     } catch (error) {
  //       console.error(`Failed to execute automation ${automation.id}:`, error);
  //     }
  //   }
  // }
  async handleMessageReceived(conversationId, message, channelId, contactId) {
    console.log(`\u{1F4AC} Message received trigger: ${conversationId}`);
    console.log(`\u{1F50D} Channel ID: ${channelId}, Contact ID: ${contactId}`);
    console.log(`\u{1F4DD} Message: "${message.content || message.text || message}"`);
    if (this.executionService.hasPendingExecution(conversationId)) {
      console.log(`\u{1F4E8} Processing as user response to pending execution`);
      try {
        await this.executionService.handleUserResponse(conversationId, message.content || message.text || message, message.interactive);
        return;
      } catch (error) {
        console.error(`Error handling user response:`, error);
      }
    }
    const allAutomations = await db.select().from(automations).where(eq18(automations.channelId, channelId));
    console.log(`\u{1F4CA} Total automations for channel ${channelId}: ${allAutomations.length}`);
    allAutomations.forEach((auto) => {
      console.log(`   - ID: ${auto.id}, Name: "${auto.name}", Trigger: ${auto.trigger}, Status: ${auto.status}`);
    });
    const activeAutomations = await db.select().from(automations).where(and10(
      eq18(automations.channelId, channelId),
      eq18(automations.status, "active")
    ));
    console.log(`\u{1F3AF} Found ${activeAutomations.length} active message_received automation(s)`);
    if (activeAutomations.length === 0) {
      console.warn(`\u26A0\uFE0F No active automations found for message_received trigger on channel ${channelId}`);
      return;
    }
    for (const automation of activeAutomations) {
      console.log(`\u{1F680} Starting automation: ${automation.id} - "${automation.name}"`);
      try {
        const nodeCount = await db.select({ count: sql12`count(*)` }).from(automationNodes).where(eq18(automationNodes.automationId, automation.id));
        console.log(`\u{1F517} Automation ${automation.id} has ${nodeCount[0]?.count || 0} nodes`);
        if (!nodeCount[0]?.count || nodeCount[0].count === 0) {
          console.warn(`\u26A0\uFE0F Automation ${automation.id} has no nodes, skipping`);
          continue;
        }
        const [execution] = await db.insert(automationExecutions).values({
          automationId: automation.id,
          contactId,
          conversationId,
          triggerData: {
            trigger: "message_received",
            message,
            channelId,
            timestamp: /* @__PURE__ */ new Date()
          },
          status: "running"
        }).returning();
        console.log(`\u2705 Created execution record: ${execution.id}`);
        await this.executionService.executeAutomation(execution.id);
        console.log(`\u{1F389} Automation ${automation.id} execution completed`);
      } catch (error) {
        console.error(`\u274C Failed to execute automation ${automation.id}:`, error);
        console.error(`Stack trace:`, error.stack);
      }
    }
  }
  /**
   * Get execution service for external access
   */
  getExecutionService() {
    return this.executionService;
  }
};
var executionService = new AutomationExecutionService();
var triggerService = new AutomationTriggerService();
setInterval(() => {
  executionService.cleanupExpiredExecutions();
}, 5 * 60 * 1e3);

// server/controllers/conversations.controller.ts
async function getConversations(req, res) {
  try {
    const channelId = String(req.query.channelId || "");
    const latestMessages = db.select({
      conversationId: messages.conversationId,
      lastMessageAt: sql13`MAX(${messages.createdAt})`.as("lastMessageAt")
    }).from(messages).groupBy(messages.conversationId).as("latestMessages");
    const rows = await db.select({
      conversation: conversations,
      contact: contacts,
      assignedToName: sql13`${users.firstName} || ' ' || ${users.lastName}`.as("assignedBy"),
      lastMessageAt: latestMessages.lastMessageAt,
      lastMessageText: messages.content
    }).from(conversations).leftJoin(contacts, eq19(conversations.contactId, contacts.id)).leftJoin(users, eq19(conversations.assignedTo, users.id)).leftJoin(latestMessages, eq19(latestMessages.conversationId, conversations.id)).leftJoin(
      messages,
      and11(
        eq19(messages.conversationId, latestMessages.conversationId),
        eq19(messages.createdAt, latestMessages.lastMessageAt)
      )
    ).where(eq19(conversations.channelId, channelId)).orderBy(desc14(latestMessages.lastMessageAt));
    const formatted = rows.map((row) => ({
      ...row.conversation,
      lastMessageAt: row.lastMessageAt || null,
      lastMessageText: row.lastMessageText || null,
      assignedToName: row.assignedToName || null,
      contact: row.contact || null
    }));
    res.json(formatted);
  } catch (err) {
    console.error("Error fetching conversations:", err);
    res.status(500).json({ error: "Unexpected error" });
  }
}
var getConversation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const conversation = await storage.getConversation(id);
  if (!conversation) {
    throw new AppError(404, "Conversation not found");
  }
  res.json(conversation);
});
var createConversation = asyncHandler(async (req, res) => {
  const validatedConversation = insertConversationSchema.parse(req.body);
  let channelId = validatedConversation.channelId;
  if (!channelId) {
    const activeChannel = await storage.getActiveChannel();
    if (activeChannel) {
      channelId = activeChannel.id;
    }
  }
  const conversation = await storage.createConversation({
    ...validatedConversation,
    channelId
  });
  try {
    if (!validatedConversation.channelId) {
      throw new Error("channelId is missing");
    }
    if (!validatedConversation.contactId) {
      throw new Error("contactId is missing");
    }
    await triggerService.handleNewConversation(
      conversation.id,
      validatedConversation.channelId,
      validatedConversation.contactId
    );
    console.log(`Triggered automations for new conversation: ${conversation.id}`);
  } catch (error) {
    console.error(`Failed to trigger automations:`, error);
  }
  res.json(conversation);
});
var updateConversation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const conversation = await storage.updateConversation(id, { assignedTo: req.body.assignedTo, status: req.body.status });
  if (!conversation) {
    throw new AppError(404, "Conversation not found");
  }
  const validatedConversation = insertConversationAssignmentSchema.parse({
    conversationId: id,
    userId: req.body.assignedTo,
    assignedBy: req.user?.id,
    assignedAt: new Date(req.body.assignedAt),
    status: req.body.status
  });
  if (req.body.status === "assigned") {
    const insertConversation = await db.insert(conversationAssignments).values(validatedConversation).returning();
  }
  res.json(
    { ...conversation, assignedToName: req.body.assignedToName }
  );
});
var deleteConversation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const success = await storage.deleteConversation(id);
  if (!success) {
    throw new AppError(404, "Conversation not found");
  }
  res.status(204).send();
});
var markAsRead = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const conversation = await storage.updateConversation(id, {
    unreadCount: 0
  });
  if (!conversation) {
    throw new AppError(404, "Conversation not found");
  }
  res.json(conversation);
});

// server/routes/conversations.routes.ts
init_schema();
init_storage();

// server/controllers/webhooks.controller.ts
init_storage();
init_schema();
import crypto2 from "crypto";
init_db();
import { desc as desc15, eq as eq20 } from "drizzle-orm";
var getWebhookConfigs = asyncHandler(
  async (req, res) => {
    const configs2 = await storage.getWebhookConfigs();
    res.json(configs2);
  }
);
var getWebhookConfigsByChannelId = asyncHandler(
  async (req, res) => {
    const channelId = req.params.id;
    console.log("Fetching webhook configs for channel ID:", channelId);
    const configs2 = await db.select().from(webhookConfigs).where(eq20(webhookConfigs.channelId, channelId));
    res.json(configs2);
  }
);
var getGlobalWebhookUrl = asyncHandler(
  async (req, res) => {
    const protocol = req.protocol;
    const host = req.get("host");
    const webhookUrl = `${protocol}://${host}/webhook/:id`;
    res.json({ webhookUrl });
  }
);
var createWebhookConfig = asyncHandler(
  async (req, res) => {
    const { verifyToken, appSecret, events, channelId } = req.body;
    if (!verifyToken) {
      throw new AppError(400, "Verify token is required");
    }
    const protocol = req.protocol;
    const host = req.get("host");
    const webhookUrl = `${protocol}://${host}/webhook/${channelId || ":id"}`;
    const config2 = await storage.createWebhookConfig({
      webhookUrl,
      verifyToken,
      appSecret: appSecret || "",
      events: events || [
        "messages",
        "message_status",
        "message_template_status_update"
      ],
      isActive: true,
      channelId
      // Global webhook
    });
    res.json(config2);
  }
);
var updateWebhookConfig = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const config2 = await storage.updateWebhookConfig(id, updates);
    if (!config2) {
      throw new AppError(404, "Webhook config not found");
    }
    res.json(config2);
  }
);
var deleteWebhookConfig = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    const deleted = await storage.deleteWebhookConfig(id);
    if (!deleted) {
      throw new AppError(404, "Webhook config not found");
    }
    res.json({ success: true, message: "Webhook config deleted" });
  }
);
var testWebhook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const config2 = await storage.getWebhookConfig(id);
  if (!config2) {
    throw new AppError(404, "Webhook config not found");
  }
  const testPayload = {
    entry: [
      {
        id: "test-entry",
        changes: [
          {
            value: {
              messaging_product: "whatsapp",
              metadata: {
                display_phone_number: "15550555555",
                phone_number_id: "test-phone-id"
              },
              test: true
            },
            field: "messages"
          }
        ]
      }
    ]
  };
  try {
    const response = await fetch(config2.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(testPayload)
    });
    if (!response.ok) {
      throw new AppError(
        500,
        `Test webhook failed with status ${response.status}`
      );
    }
    res.json({ success: true, message: "Test webhook sent successfully" });
  } catch (error) {
    throw new AppError(
      500,
      `Failed to send test webhook: ${error.message}`
    );
  }
});
var handleWebhook = asyncHandler(
  async (req, res) => {
    const {
      "hub.mode": mode,
      "hub.challenge": challenge,
      "hub.verify_token": verifyToken
    } = req.query;
    if (mode && challenge) {
      const configs3 = await storage.getWebhookConfigs();
      const activeConfig2 = configs3.find((c) => c.isActive);
      if (mode === "subscribe" && activeConfig2 && verifyToken === activeConfig2.verifyToken) {
        console.log("Webhook verified");
        await storage.updateWebhookConfig(activeConfig2.id, {
          lastPingAt: /* @__PURE__ */ new Date()
        });
        return res.send(challenge);
      }
      throw new AppError(403, "Verification failed");
    }
    const body = req.body;
    console.log("Webhook received:", JSON.stringify(body, null, 2));
    const configs2 = await storage.getWebhookConfigs();
    const activeConfig = configs2.find((c) => c.isActive);
    if (activeConfig) {
      await storage.updateWebhookConfig(activeConfig.id, {
        lastPingAt: /* @__PURE__ */ new Date()
      });
    }
    if (body.entry) {
      for (const entry of body.entry) {
        const changes = entry.changes || [];
        for (const change of changes) {
          if (change.field === "messages") {
            await handleMessageChange(change.value);
          } else if (change.field === "message_template_status_update") {
            await handleTemplateStatusUpdate(change.value);
          }
        }
      }
    }
    res.sendStatus(200);
  }
);
async function handleMessageChange(value) {
  const { messages: messages2, contacts: contacts3, metadata, statuses } = value;
  if (statuses && statuses.length > 0) {
    await handleMessageStatuses(statuses, metadata);
    return;
  }
  if (!messages2 || messages2.length === 0) {
    return;
  }
  const phoneNumberId = metadata?.phone_number_id;
  if (!phoneNumberId) {
    console.error("No phone_number_id in webhook");
    return;
  }
  const channel = await storage.getChannelByPhoneNumberId(phoneNumberId);
  if (!channel) {
    console.error(`No channel found for phone_number_id: ${phoneNumberId}`);
    return;
  }
  const waApi = new WhatsAppApiService(channel);
  for (const message of messages2) {
    const { from, id: whatsappMessageId, text: text2, type, timestamp: timestamp2, interactive } = message;
    let messageContent = "";
    let interactiveData = null;
    let mediaId = null;
    let mediaUrl = null;
    let mediaMimeType = null;
    let mediaSha256 = null;
    if (type === "text" && text2) {
      messageContent = text2.body;
    } else if (type === "interactive" && interactive) {
      if (interactive.type === "button_reply") {
        messageContent = interactive.button_reply.title;
        interactiveData = interactive;
        console.log("Interactive button response:", interactive.button_reply);
      } else if (interactive.type === "list_reply") {
        messageContent = interactive.list_reply.title;
        interactiveData = interactive;
        console.log("Interactive list response:", interactive.list_reply);
      }
    } else if (type === "image" && message.image) {
      messageContent = message.image.caption || "[Image]";
      mediaId = message.image.id;
      mediaMimeType = message.image.mime_type;
      mediaSha256 = message.image.sha256;
    } else if (type === "document" && message.document) {
      messageContent = message.document.caption || `[Document: ${message.document.filename || "file"}]`;
      mediaId = message.document.id;
      mediaMimeType = message.document.mime_type;
      mediaSha256 = message.document.sha256;
    } else if (type === "audio" && message.audio) {
      messageContent = "[Audio message]";
      mediaId = message.audio.id;
      mediaMimeType = message.audio.mime_type;
      mediaSha256 = message.audio.sha256;
    } else if (type === "video" && message.video) {
      messageContent = message.video.caption || "[Video]";
      mediaId = message.video.id;
      mediaMimeType = message.video.mime_type;
      mediaSha256 = message.video.sha256;
    } else {
      messageContent = `[${type} message]`;
    }
    if (mediaId) {
      try {
        mediaUrl = await waApi.fetchMediaUrl(mediaId);
      } catch (err) {
        console.error("\u274C Failed to fetch media URL:", err);
      }
    }
    let conversation = await storage.getConversationByPhone(from);
    let contact = await storage.getContactByPhone(from);
    let isNewConversation = false;
    if (!conversation) {
      isNewConversation = true;
      if (!contact) {
        const contactName = contacts3?.find((c) => c.wa_id === from)?.profile?.name || from;
        contact = await storage.createContact({
          name: contactName,
          phone: from,
          channelId: channel.id
        });
      }
      conversation = await storage.createConversation({
        contactId: contact.id,
        contactPhone: from,
        contactName: contact.name || from,
        channelId: channel.id,
        unreadCount: 1
      });
    } else {
      await storage.updateConversation(conversation.id, {
        unreadCount: (conversation.unreadCount || 0) + 1,
        lastMessageAt: /* @__PURE__ */ new Date(),
        lastMessageText: messageContent
      });
    }
    console.log(
      "Webhook Message:",
      messageContent,
      "Type:",
      type,
      "Interactive:",
      !!interactiveData
    );
    const newMessage = await storage.createMessage({
      conversationId: conversation.id,
      content: messageContent,
      fromUser: false,
      direction: "inbound",
      status: "received",
      whatsappMessageId,
      messageType: type,
      metadata: interactiveData ? JSON.stringify(interactiveData) : null,
      timestamp: new Date(parseInt(timestamp2, 10) * 1e3),
      // Media fields
      mediaId,
      mediaUrl,
      mediaMimeType,
      mediaSha256
    });
    if (global.broadcastToConversation) {
      global.broadcastToConversation(conversation.id, {
        type: "new-message",
        message: newMessage
      });
    }
    try {
      const shouldSendAiReply = await checkAndSendAiReply(
        messageContent,
        conversation,
        contact,
        waApi
      );
      if (shouldSendAiReply) {
        console.log(`\u2705 AI auto-reply sent for conversation ${conversation.id}`);
        continue;
      }
    } catch (aiError) {
      console.error(`\u274C AI auto-reply error:`, aiError);
    }
    try {
      const hasPendingExecution = triggerService.getExecutionService().hasPendingExecution(conversation.id);
      if (hasPendingExecution) {
        console.log(
          `Processing as user response to pending automation execution`
        );
        const result = await triggerService.getExecutionService().handleUserResponse(
          conversation.id,
          messageContent,
          interactiveData
        );
        if (result && result.success) {
          console.log(
            `Successfully processed user response for execution ${result.executionId}`
          );
          if (global.broadcastToConversation) {
            global.broadcastToConversation(conversation.id, {
              type: "automation-resumed",
              data: {
                executionId: result.executionId,
                userResponse: result.userResponse,
                savedVariable: result.savedVariable,
                resumedAt: result.resumedAt
              }
            });
          }
          continue;
        } else {
          console.warn(
            `Failed to process user response, will try triggering new automations`
          );
        }
      }
      if (isNewConversation) {
        console.log(
          `New conversation automation trigger for: ${conversation.id}`
        );
        await triggerService.handleNewConversation(
          conversation.id,
          channel.id,
          contact?.id
        );
      } else {
        console.log(
          `Message received automation trigger for: ${conversation.id}`
        );
        console.log(
          `Debug info - Channel ID: ${channel.id}, Message: "${messageContent}"`
        );
        const messageData = {
          content: messageContent,
          text: messageContent,
          body: messageContent,
          type,
          from,
          whatsappMessageId,
          timestamp: timestamp2,
          interactive: interactiveData,
          messageType: type,
          hasInteraction: !!interactiveData,
          buttonId: interactiveData?.button_reply?.id || null,
          buttonTitle: interactiveData?.button_reply?.title || null,
          listId: interactiveData?.list_reply?.id || null,
          listTitle: interactiveData?.list_reply?.title || null
        };
        await triggerService.handleMessageReceived(
          conversation.id,
          messageData,
          channel.id,
          contact?.id
        );
      }
    } catch (automationError) {
      console.error(
        `\u274C Automation error for conversation ${conversation.id}:`,
        automationError
      );
      if (global.broadcastToConversation) {
        global.broadcastToConversation(conversation.id, {
          type: "automation-error",
          error: {
            message: automationError.message,
            conversationId: conversation.id,
            timestamp: /* @__PURE__ */ new Date()
          }
        });
      }
    }
  }
}
async function checkAndSendAiReply(messageContent, conversation, contact, whatsappApi) {
  const getAiSettings = await db.select().from(aiSettings).where(eq20(aiSettings.channelId, conversation.channelId)).limit(1).then((res) => res[0]);
  if (!getAiSettings || !getAiSettings.isActive) {
    return false;
  }
  let triggerWords = [];
  if (Array.isArray(getAiSettings.words)) {
    triggerWords = getAiSettings.words;
  } else if (typeof getAiSettings.words === "string") {
    try {
      triggerWords = JSON.parse(getAiSettings.words);
    } catch {
      console.warn("\u26A0\uFE0F AI settings words not valid JSON, using empty array");
      triggerWords = [];
    }
  }
  if (!Array.isArray(triggerWords) || triggerWords.length === 0) {
    console.log("\u2139\uFE0F No trigger words configured, skipping AI auto-reply");
    return false;
  }
  const messageLower = messageContent.toLowerCase().trim();
  const hasMatch = triggerWords.some(
    (word) => messageLower.includes(word.toLowerCase().trim())
  );
  if (!hasMatch) {
    return false;
  }
  console.log(`\u{1F916} Trigger word matched for message: "${messageContent}"`);
  const conversationHistory = await db.select().from(messages).where(eq20(messages.conversationId, conversation.id)).orderBy(desc15(messages.timestamp));
  const aiResponse = await generateAiResponse(
    messageContent,
    conversationHistory,
    contact,
    getAiSettings
  );
  if (!aiResponse) {
    console.error("\u274C Failed to generate AI response");
    return false;
  }
  try {
    const result = await whatsappApi.sendTextMessage(
      conversation.contactPhone,
      aiResponse
    );
    const aiMessage = await storage.createMessage({
      conversationId: conversation.id,
      content: aiResponse,
      fromUser: true,
      direction: "outbound",
      status: "sent",
      whatsappMessageId: result.messages?.[0]?.id || null,
      messageType: "text",
      metadata: JSON.stringify({ aiGenerated: true, trigger: messageContent }),
      timestamp: /* @__PURE__ */ new Date()
    });
    await storage.updateConversation(conversation.id, {
      lastMessageAt: /* @__PURE__ */ new Date(),
      lastMessageText: aiResponse
    });
    if (global.broadcastToConversation) {
      global.broadcastToConversation(conversation.id, {
        type: "new-message",
        message: aiMessage
      });
      global.broadcastToConversation(conversation.id, {
        type: "ai-reply-sent",
        data: {
          messageId: aiMessage.id,
          trigger: messageContent,
          response: aiResponse
        }
      });
    }
    return true;
  } catch (error) {
    console.error("\u274C Failed to send AI reply:", error);
    throw error;
  }
}
async function generateAiResponse(userMessage, conversationHistory, contact, aiSettings2) {
  try {
    const { provider, apiKey, model, endpoint, temperature, maxTokens } = aiSettings2;
    const messages2 = [
      {
        role: "system",
        content: `You are a helpful WhatsApp assistant. Respond naturally and helpfully to customer messages. Keep responses concise and friendly. Customer name: ${contact?.name || "Customer"}`
      }
    ];
    conversationHistory.slice(-10).reverse().forEach((msg) => {
      messages2.push({
        role: msg.fromUser ? "assistant" : "user",
        content: msg.content
      });
    });
    messages2.push({
      role: "user",
      content: userMessage
    });
    let aiResponse = null;
    if (provider === "openai") {
      aiResponse = await callOpenAI(
        messages2,
        apiKey,
        model,
        endpoint || "https://api.openai.com/v1",
        parseFloat(temperature || "0.7"),
        parseInt(maxTokens || "2048", 10)
      );
    } else if (provider === "anthropic") {
      aiResponse = await callAnthropic(
        messages2,
        apiKey,
        model,
        endpoint || "https://api.anthropic.com/v1",
        parseFloat(temperature || "0.7"),
        parseInt(maxTokens || "2048", 10)
      );
    } else {
      console.error(`Unsupported AI provider: ${provider}`);
      return null;
    }
    return aiResponse;
  } catch (error) {
    console.error("\u274C Error generating AI response:", error);
    return null;
  }
}
async function callOpenAI(messages2, apiKey, model, endpoint, temperature, maxTokens) {
  try {
    const response = await fetch(`${endpoint}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: messages2,
        temperature,
        max_tokens: maxTokens
      })
    });
    if (!response.ok) {
      const error = await response.text();
      console.error("OpenAI API error:", error);
      return null;
    }
    const data = await response.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (error) {
    console.error("OpenAI API call failed:", error);
    return null;
  }
}
async function callAnthropic(messages2, apiKey, model, endpoint, temperature, maxTokens) {
  try {
    const systemMessage = messages2.find((m) => m.role === "system")?.content || "";
    const conversationMessages = messages2.filter((m) => m.role !== "system").map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content
    }));
    const response = await fetch(`${endpoint}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model,
        messages: conversationMessages,
        system: systemMessage,
        temperature,
        max_tokens: maxTokens
      })
    });
    if (!response.ok) {
      const error = await response.text();
      console.error("Anthropic API error:", error);
      return null;
    }
    const data = await response.json();
    return data.content?.[0]?.text || null;
  } catch (error) {
    console.error("Anthropic API call failed:", error);
    return null;
  }
}
async function handleMessageStatuses(statuses, metadata) {
  const phoneNumberId = metadata?.phone_number_id;
  if (!phoneNumberId) {
    console.error("No phone_number_id in webhook status update");
    return;
  }
  const channel = await storage.getChannelByPhoneNumberId(phoneNumberId);
  if (!channel) {
    console.error(`No channel found for phone_number_id: ${phoneNumberId}`);
    return;
  }
  for (const statusUpdate of statuses) {
    const {
      id: whatsappMessageId,
      status,
      timestamp: timestamp2,
      errors,
      recipient_id
    } = statusUpdate;
    console.log(
      `\u{1F4CA} Message status update: ${whatsappMessageId} - ${status}`,
      errors ? `Errors: ${errors.length}` : ""
    );
    const message = await storage.getMessageByWhatsAppId(whatsappMessageId);
    if (!message) {
      console.log(`\u26A0\uFE0F Message not found for WhatsApp ID: ${whatsappMessageId}`);
      continue;
    }
    let messageStatus = "sent";
    let errorDetails = null;
    if (status === "sent") {
      messageStatus = "sent";
    } else if (status === "delivered") {
      messageStatus = "delivered";
    } else if (status === "read") {
      messageStatus = "read";
    } else if (status === "failed" && errors && errors.length > 0) {
      messageStatus = "failed";
      const error = errors[0];
      errorDetails = {
        code: error.code,
        title: error.title,
        message: error.message || error.details,
        errorData: error.error_data,
        recipientId: recipient_id,
        timestamp: timestamp2
      };
      console.error(`\u274C Message failed with error:`, errorDetails);
    }
    const updatedMessage = await storage.updateMessage(message.id, {
      status: messageStatus,
      errorDetails: errorDetails ? JSON.stringify(errorDetails) : null,
      deliveredAt: messageStatus === "delivered" ? new Date(parseInt(timestamp2, 10) * 1e3) : message.deliveredAt,
      readAt: messageStatus === "read" ? new Date(parseInt(timestamp2, 10) * 1e3) : message.readAt,
      updatedAt: /* @__PURE__ */ new Date()
    });
    if (global.broadcastToConversation && message.conversationId) {
      global.broadcastToConversation(message.conversationId, {
        type: "message-status-update",
        data: {
          messageId: message.id,
          whatsappMessageId,
          status: messageStatus,
          errorDetails,
          timestamp: new Date(parseInt(timestamp2, 10) * 1e3)
        }
      });
    }
    if (message.campaignId) {
      const campaign = await storage.getCampaign(message.campaignId);
      if (campaign) {
        const updates = {};
        if (messageStatus === "delivered" && message.status !== "delivered") {
          updates.deliveredCount = (campaign.deliveredCount || 0) + 1;
        } else if (messageStatus === "read" && message.status !== "read") {
          updates.readCount = (campaign.readCount || 0) + 1;
        } else if (messageStatus === "failed" && message.status !== "failed") {
          updates.failedCount = (campaign.failedCount || 0) + 1;
          if (message.status === "sent") {
            updates.sentCount = Math.max(0, (campaign.sentCount || 0) - 1);
          }
        }
        if (Object.keys(updates).length > 0) {
          await storage.updateCampaign(campaign.id, updates);
        }
      }
    }
  }
}
async function handleTemplateStatusUpdate(value) {
  const { message_template_id, message_template_name, event, reason } = value;
  console.log(
    `Template status update: ${message_template_name} - ${event}${reason ? ` - Reason: ${reason}` : ""}`
  );
  if (message_template_id && event) {
    let status = "pending";
    if (event === "APPROVED") {
      status = "approved";
    } else if (event === "REJECTED") {
      status = "rejected";
    }
    const templates2 = await storage.getTemplates();
    const template = templates2.find(
      (t) => t.whatsappTemplateId === message_template_id
    );
    if (template) {
      const updateData = { status };
      if (event === "REJECTED" && reason) {
        updateData.rejectionReason = reason;
      }
      await storage.updateTemplate(template.id, updateData);
      console.log(
        `Updated template ${template.name} status to ${status}${reason ? ` with reason: ${reason}` : ""}`
      );
    }
  }
}
var getConversationAutomationStatus = asyncHandler(
  async (req, res) => {
    const { conversationId } = req.params;
    const executionService2 = triggerService.getExecutionService();
    const hasPending = executionService2.hasPendingExecution(conversationId);
    const pendingExecutions = executionService2.getPendingExecutions().filter((pe) => pe.conversationId === conversationId);
    res.json({
      conversationId,
      hasPendingExecution: hasPending,
      pendingExecutions,
      totalPendingCount: pendingExecutions.length
    });
  }
);
var cancelConversationAutomation = asyncHandler(
  async (req, res) => {
    const { conversationId } = req.params;
    const executionService2 = triggerService.getExecutionService();
    const cancelled = await executionService2.cancelExecution(conversationId);
    res.json({
      success: cancelled,
      conversationId,
      message: cancelled ? "Automation execution cancelled successfully" : "No pending execution found for this conversation"
    });
  }
);
var getAllPendingExecutions = asyncHandler(
  async (req, res) => {
    const executionService2 = triggerService.getExecutionService();
    const pendingExecutions = executionService2.getPendingExecutions();
    res.json({
      totalCount: pendingExecutions.length,
      executions: pendingExecutions
    });
  }
);
var cleanupExpiredExecutions = asyncHandler(
  async (req, res) => {
    const { timeoutMinutes = 30 } = req.query;
    const timeoutMs = parseInt(timeoutMinutes) * 60 * 1e3;
    const executionService2 = triggerService.getExecutionService();
    const cleanedCount = await executionService2.cleanupExpiredExecutions(
      timeoutMs
    );
    res.json({
      success: true,
      cleanedCount,
      message: `Cleaned up ${cleanedCount} expired executions`
    });
  }
);
var razorpayWebhook = async (req, res) => {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || "";
    const signature = req.headers["x-razorpay-signature"];
    const expectedSignature = crypto2.createHmac("sha256", webhookSecret).update(JSON.stringify(req.body)).digest("hex");
    if (signature !== expectedSignature) {
      return res.status(400).json({
        success: false,
        message: "Invalid webhook signature"
      });
    }
    const event = req.body;
    const eventType = event.event;
    console.log("Razorpay Webhook Event:", eventType);
    switch (eventType) {
      case "payment.authorized":
        await handleRazorpayPaymentAuthorized(event);
        break;
      case "payment.captured":
        await handleRazorpayPaymentCaptured(event);
        break;
      case "payment.failed":
        await handleRazorpayPaymentFailed(event);
        break;
      case "order.paid":
        await handleRazorpayOrderPaid(event);
        break;
      case "refund.created":
        await handleRazorpayRefundCreated(event);
        break;
      default:
        console.log("Unhandled Razorpay event:", eventType);
    }
    res.status(200).json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("Razorpay webhook error:", error);
    res.status(500).json({ success: false, message: "Webhook processing failed", error });
  }
};
var stripeWebhook = async (req, res) => {
  try {
    const stripe2 = __require("stripe")(process.env.STRIPE_SECRET_KEY);
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";
    const signature = req.headers["stripe-signature"];
    let event;
    try {
      event = stripe2.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.error("Stripe signature verification failed:", err.message);
      return res.status(400).json({
        success: false,
        message: `Webhook signature verification failed: ${err.message}`
      });
    }
    const eventType = event.type;
    console.log("Stripe Webhook Event:", eventType);
    switch (eventType) {
      case "payment_intent.succeeded":
        await handleStripePaymentIntentSucceeded(event.data.object);
        break;
      case "payment_intent.payment_failed":
        await handleStripePaymentIntentFailed(event.data.object);
        break;
      case "charge.succeeded":
        await handleStripeChargeSucceeded(event.data.object);
        break;
      case "charge.refunded":
        await handleStripeChargeRefunded(event.data.object);
        break;
      case "invoice.paid":
        await handleStripeInvoicePaid(event.data.object);
        break;
      case "invoice.payment_failed":
        await handleStripeInvoicePaymentFailed(event.data.object);
        break;
      case "customer.subscription.created":
        await handleStripeSubscriptionCreated(event.data.object);
        break;
      case "customer.subscription.updated":
        await handleStripeSubscriptionUpdated(event.data.object);
        break;
      case "customer.subscription.deleted":
        await handleStripeSubscriptionDeleted(event.data.object);
        break;
      default:
        console.log("Unhandled Stripe event:", eventType);
    }
    res.status(200).json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    res.status(500).json({ success: false, message: "Webhook processing failed", error });
  }
};
async function handleRazorpayPaymentAuthorized(event) {
  const payment = event.payload.payment.entity;
  console.log("Payment authorized:", payment.id);
  await updateTransactionByProviderOrderId(
    payment.order_id,
    {
      status: "authorized",
      providerPaymentId: payment.id,
      metadata: {
        method: payment.method,
        amount: payment.amount / 100,
        currency: payment.currency
      }
    }
  );
}
async function handleRazorpayPaymentCaptured(event) {
  const payment = event.payload.payment.entity;
  console.log("Payment captured:", payment.id);
  const transaction = await findTransactionByProviderOrderId(payment.order_id);
  if (transaction) {
    await db.update(transactions).set({
      status: "completed",
      providerPaymentId: payment.id,
      paidAt: /* @__PURE__ */ new Date(),
      metadata: {
        method: payment.method,
        amount: payment.amount / 100,
        currency: payment.currency,
        cardId: payment.card_id,
        bank: payment.bank,
        wallet: payment.wallet
      },
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq20(transactions.id, transaction.id));
    await createSubscriptionFromTransaction(transaction);
  }
}
async function handleRazorpayPaymentFailed(event) {
  const payment = event.payload.payment.entity;
  console.log("Payment failed:", payment.id);
  await updateTransactionByProviderOrderId(
    payment.order_id,
    {
      status: "failed",
      providerPaymentId: payment.id,
      metadata: {
        errorCode: payment.error_code,
        errorDescription: payment.error_description,
        errorReason: payment.error_reason
      }
    }
  );
}
async function handleRazorpayOrderPaid(event) {
  const order = event.payload.order.entity;
  console.log("Order paid:", order.id);
  await updateTransactionByProviderOrderId(
    order.id,
    {
      status: "completed",
      paidAt: /* @__PURE__ */ new Date()
    }
  );
}
async function handleRazorpayRefundCreated(event) {
  const refund = event.payload.refund.entity;
  console.log("Refund created:", refund.id);
  await updateTransactionByProviderPaymentId(
    refund.payment_id,
    {
      status: "refunded",
      refundedAt: /* @__PURE__ */ new Date(),
      metadata: {
        refundId: refund.id,
        refundAmount: refund.amount / 100
      }
    }
  );
}
async function handleStripePaymentIntentSucceeded(paymentIntent) {
  console.log("Payment intent succeeded:", paymentIntent.id);
  const transaction = await findTransactionByProviderTransactionId(paymentIntent.id);
  if (transaction) {
    await db.update(transactions).set({
      status: "completed",
      paidAt: /* @__PURE__ */ new Date(),
      metadata: {
        paymentMethod: paymentIntent.payment_method,
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency
      },
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq20(transactions.id, transaction.id));
    await createSubscriptionFromTransaction(transaction);
  }
}
async function handleStripePaymentIntentFailed(paymentIntent) {
  console.log("Payment intent failed:", paymentIntent.id);
  await updateTransactionByProviderTransactionId(
    paymentIntent.id,
    {
      status: "failed",
      metadata: {
        errorMessage: paymentIntent.last_payment_error?.message,
        errorCode: paymentIntent.last_payment_error?.code
      }
    }
  );
}
async function handleStripeChargeSucceeded(charge) {
  console.log("Charge succeeded:", charge.id);
  await updateTransactionByProviderTransactionId(
    charge.payment_intent,
    {
      providerPaymentId: charge.id,
      metadata: {
        cardLast4: charge.payment_method_details?.card?.last4,
        cardBrand: charge.payment_method_details?.card?.brand,
        receiptUrl: charge.receipt_url
      }
    }
  );
}
async function handleStripeChargeRefunded(charge) {
  console.log("Charge refunded:", charge.id);
  await updateTransactionByProviderPaymentId(
    charge.id,
    {
      status: "refunded",
      refundedAt: /* @__PURE__ */ new Date(),
      metadata: {
        refundAmount: charge.amount_refunded / 100
      }
    }
  );
}
async function handleStripeInvoicePaid(invoice) {
  console.log("Invoice paid:", invoice.id);
}
async function handleStripeInvoicePaymentFailed(invoice) {
  console.log("Invoice payment failed:", invoice.id);
}
async function handleStripeSubscriptionCreated(subscription) {
  console.log("Subscription created:", subscription.id);
}
async function handleStripeSubscriptionUpdated(subscription) {
  console.log("Subscription updated:", subscription.id);
}
async function handleStripeSubscriptionDeleted(subscription) {
  console.log("Subscription deleted:", subscription.id);
}
async function findTransactionByProviderOrderId(orderId) {
  const result = await db.select().from(transactions).where(eq20(transactions.providerOrderId, orderId)).limit(1);
  return result.length > 0 ? result[0] : null;
}
async function findTransactionByProviderTransactionId(transactionId) {
  const result = await db.select().from(transactions).where(eq20(transactions.providerTransactionId, transactionId)).limit(1);
  return result.length > 0 ? result[0] : null;
}
async function findTransactionByProviderPaymentId(paymentId) {
  const result = await db.select().from(transactions).where(eq20(transactions.providerPaymentId, paymentId)).limit(1);
  return result.length > 0 ? result[0] : null;
}
async function updateTransactionByProviderOrderId(orderId, updateData) {
  const transaction = await findTransactionByProviderOrderId(orderId);
  if (transaction) {
    await db.update(transactions).set({ ...updateData, updatedAt: /* @__PURE__ */ new Date() }).where(eq20(transactions.id, transaction.id));
  }
}
async function updateTransactionByProviderTransactionId(transactionId, updateData) {
  const transaction = await findTransactionByProviderTransactionId(transactionId);
  if (transaction) {
    await db.update(transactions).set({ ...updateData, updatedAt: /* @__PURE__ */ new Date() }).where(eq20(transactions.id, transaction.id));
  }
}
async function updateTransactionByProviderPaymentId(paymentId, updateData) {
  const transaction = await findTransactionByProviderPaymentId(paymentId);
  if (transaction) {
    await db.update(transactions).set({ ...updateData, updatedAt: /* @__PURE__ */ new Date() }).where(eq20(transactions.id, transaction.id));
  }
}
async function createSubscriptionFromTransaction(transaction) {
  if (transaction.subscriptionId) {
    return;
  }
  const startDate = /* @__PURE__ */ new Date();
  const endDate = /* @__PURE__ */ new Date();
  if (transaction.billingCycle === "annual") {
    endDate.setFullYear(endDate.getFullYear() + 1);
  } else {
    endDate.setMonth(endDate.getMonth() + 1);
  }
  const newSubscription = await db.insert(subscriptions).values({
    userId: transaction.userId,
    planId: transaction.planId,
    status: "active",
    billingCycle: transaction.billingCycle,
    startDate,
    endDate,
    autoRenew: true
  }).returning();
  await db.update(transactions).set({ subscriptionId: newSubscription[0].id }).where(eq20(transactions.id, transaction.id));
  console.log("Subscription created:", newSubscription[0].id);
}

// server/routes/conversations.routes.ts
function registerConversationRoutes(app2) {
  app2.get("/api/conversations/unread-count", async (req, res) => {
    try {
      const activeChannel = await storage.getActiveChannel();
      if (!activeChannel) {
        return res.json({ count: 0 });
      }
      const conversations2 = await storage.getConversationsByChannel(activeChannel.id);
      const unreadCount = conversations2.reduce((sum, conv) => sum + (conv.unreadCount || 0), 0);
      res.json({ count: unreadCount });
    } catch (error) {
      console.error("Error getting unread count:", error);
      res.json({ count: 0 });
    }
  });
  app2.get(
    "/api/conversations",
    extractChannelId,
    getConversations
  );
  app2.get("/api/conversations/:id", getConversation);
  app2.post(
    "/api/conversations",
    validateRequest(insertConversationSchema),
    createConversation
  );
  app2.put(
    "/api/conversations/:id",
    requireAuth,
    requirePermission(PERMISSIONS.INBOX_ASSIGN),
    updateConversation
  );
  app2.delete("/api/conversations/:id", deleteConversation);
  app2.put("/api/conversations/:id/read", markAsRead);
  app2.patch("/api/conversations/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      if (!["open", "resolved", "closed"].includes(status)) {
        return res.status(400).json({
          message: "Invalid status. Must be open, resolved, or closed"
        });
      }
      await storage.updateConversation(id, { status });
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating conversation status:", error);
      res.status(500).json({ message: "Failed to update conversation status" });
    }
  });
  app2.get("/api/conversations/:conversationId/automation-status", getConversationAutomationStatus);
  app2.post("/api/conversations/:conversationId/cancel-automation", cancelConversationAutomation);
}

// server/routes/automation.routes.ts
init_schema();
import { z as z3 } from "zod";

// server/controllers/automation.controller.ts
init_db();
init_schema();
import { eq as eq21, and as and12 } from "drizzle-orm";
init_storage();
import path2 from "path";
var getAutomations = asyncHandler(async (req, res) => {
  const channelId = req.query.channelId;
  const rows = channelId ? await db.select().from(automations).leftJoin(automationNodes, eq21(automations.id, automationNodes.automationId)).leftJoin(automationEdges, eq21(automations.id, automationEdges.automationId)).where(eq21(automations.channelId, channelId)) : await db.select().from(automations).leftJoin(automationNodes, eq21(automations.id, automationNodes.automationId)).leftJoin(automationEdges, eq21(automations.id, automationEdges.automationId));
  const automationMap = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const automationRow = row.automations;
    const node = row.automation_nodes;
    const edge = row.automation_edges;
    if (!automationMap.has(automationRow.id)) {
      automationMap.set(automationRow.id, {
        ...automationRow,
        automation_nodes: [],
        automation_edges: []
      });
    }
    const automationEntry = automationMap.get(automationRow.id);
    if (node && !automationEntry.automation_nodes.some((n) => n.id === node.id)) {
      automationEntry.automation_nodes.push(node);
    }
    if (edge && !automationEntry.automation_edges.some((e) => e.id === edge.id)) {
      automationEntry.automation_edges.push(edge);
    }
  }
  const result = Array.from(automationMap.values());
  res.json(result);
});
var getAutomation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const automation = await db.query.automations.findFirst({
    where: eq21(automations.id, id)
  });
  if (!automation) throw new AppError(404, "Automation not found");
  const nodes = await db.select().from(automationNodes).where(eq21(automationNodes.automationId, id));
  res.json({ ...automation, nodes });
});
var createAutomation = asyncHandler(async (req, res) => {
  try {
    const { name, description, trigger, triggerConfig, nodes, edges } = req.body;
    const validatedAutomation = insertAutomationSchema.parse(req.body);
    let channelId = validatedAutomation.channelId;
    if (!channelId) {
      const activeChannel = await storage.getActiveChannel();
      if (activeChannel) {
        channelId = activeChannel.id;
      }
    }
    let parsedNodes = [];
    let parsedEdges = [];
    try {
      parsedNodes = typeof nodes === "string" ? JSON.parse(nodes) : nodes;
      if (!Array.isArray(parsedNodes)) parsedNodes = [];
    } catch {
      parsedNodes = [];
    }
    try {
      parsedEdges = typeof edges === "string" ? JSON.parse(edges) : edges;
      if (!Array.isArray(parsedEdges)) parsedEdges = [];
    } catch {
      parsedEdges = [];
    }
    if (req.files && Array.isArray(req.files)) {
      const files = req.files;
      for (const file of files) {
        const match = file.fieldname.match(/^node_(.+)_(.+)$/);
        if (!match) continue;
        const nodeId = `node_${match[1]}`;
        const field = match[2];
        const node = parsedNodes.find((n) => n.id === nodeId);
        if (!node || !node.data) continue;
        const isCloudFile = !!file.cloudUrl;
        const filePath = file.cloudUrl || `/uploads/${path2.basename(path2.dirname(file.path))}/${file.filename}`;
        console.log(`\u{1F4E4} Processing media: ${isCloudFile ? "Cloud" : "Local"} (${filePath})`);
        node.data[field] = {
          filename: file.filename,
          mimetype: file.mimetype,
          size: file.size,
          path: filePath
        };
        node.data[`${field.replace("File", "Preview")}`] = filePath;
      }
    }
    const [automation] = await db.insert(automations).values({
      name,
      description,
      channelId,
      trigger,
      triggerConfig: JSON.parse(triggerConfig || "{}")
    }).returning();
    for (const node of parsedNodes) {
      await db.insert(automationNodes).values({
        automationId: automation.id,
        nodeId: node.id,
        type: node.type,
        position: node.position,
        measured: node.measured,
        data: node.data
      });
    }
    for (const edge of parsedEdges) {
      await db.insert(automationEdges).values({
        id: edge.id,
        automationId: automation.id,
        sourceNodeId: edge.source,
        targetNodeId: edge.target,
        animated: !!edge.animated
      });
    }
    res.json({
      success: true,
      automation,
      nodes: parsedNodes,
      edges: parsedEdges
    });
  } catch (err) {
    console.error("\u274C Automation creation failed:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});
var updateAutomation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, trigger, triggerConfig, nodes, edges, ...rest } = req.body;
  let parsedNodes = [];
  let parsedEdges = [];
  try {
    parsedNodes = typeof nodes === "string" ? JSON.parse(nodes) : nodes;
    if (!Array.isArray(parsedNodes)) parsedNodes = [];
  } catch {
    parsedNodes = [];
  }
  try {
    parsedEdges = typeof edges === "string" ? JSON.parse(edges) : edges;
    if (!Array.isArray(parsedEdges)) parsedEdges = [];
  } catch {
    parsedEdges = [];
  }
  if (req.files && Array.isArray(req.files)) {
    const files = req.files;
    for (const file of files) {
      const match = file.fieldname.match(/^node_(.+)_(.+)$/);
      if (!match) continue;
      const nodeId = `node_${match[1]}`;
      const field = match[2];
      const node = parsedNodes.find((n) => n.id === nodeId);
      if (!node || !node.data) continue;
      const isCloudFile = !!file.cloudUrl;
      const filePath = file.cloudUrl || `/uploads/${path2.basename(path2.dirname(file.path))}/${file.filename}`;
      console.log(`\u{1F4E4} Updating media: ${isCloudFile ? "Cloud" : "Local"} (${filePath})`);
      node.data[field] = {
        filename: file.filename,
        mimetype: file.mimetype,
        size: file.size,
        path: filePath
      };
      node.data[`${field.replace("File", "Preview")}`] = filePath;
    }
  }
  const [automation] = await db.update(automations).set({
    name,
    description,
    trigger,
    triggerConfig: JSON.parse(triggerConfig || "{}"),
    ...rest
  }).where(eq21(automations.id, id)).returning();
  if (!automation) {
    throw new AppError(404, "Automation not found");
  }
  console.log(`\u{1F504} Updating automation with ID: ${automation.id}`);
  await db.delete(automationNodes).where(eq21(automationNodes.automationId, automation.id));
  await db.delete(automationEdges).where(eq21(automationEdges.automationId, automation.id));
  if (parsedNodes.length > 0) {
    await db.insert(automationNodes).values(
      parsedNodes.map((node) => ({
        automationId: automation.id,
        nodeId: node.id,
        type: node.type,
        subtype: node.subtype,
        position: node.position,
        measured: node.measured,
        data: node.data,
        connections: node.connections
      }))
    );
  }
  if (parsedEdges.length > 0) {
    await db.insert(automationEdges).values(
      parsedEdges.map((edge) => ({
        id: edge.id,
        automationId: automation.id,
        sourceNodeId: edge.source,
        targetNodeId: edge.target,
        animated: !!edge.animated
      }))
    );
  }
  res.json({
    success: true,
    automation,
    nodes: parsedNodes,
    edges: parsedEdges
  });
});
var deleteAutomation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleted = await db.delete(automations).where(eq21(automations.id, id)).returning();
  if (!deleted.length) throw new AppError(404, "Automation not found");
  res.status(200).json({ deleted: deleted[0] });
});
var toggleAutomation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const automation = await db.query.automations.findFirst({
    where: eq21(automations.id, id)
  });
  if (!automation) throw new AppError(404, "Automation not found");
  const [updated] = await db.update(automations).set({ status: automation.status === "active" ? "inactive" : "active" }).where(eq21(automations.id, id)).returning();
  res.json(updated);
});
var saveAutomationNodes = asyncHandler(async (req, res) => {
  const { automationId } = req.params;
  const { nodes } = req.body;
  console.log("Saving nodes for automationId:", automationId, "Nodes:", nodes);
  const getDelete = await db.delete(automationNodes).where(eq21(automationNodes.automationId, automationId));
  console.log("Deleted nodes result:", getDelete);
  if (nodes?.length) {
    const getNodes = await db.insert(automationNodes).values(
      nodes.map((n) => ({
        automationId,
        nodeId: n.id,
        type: n.type,
        subtype: n.subtype,
        position: n.position,
        data: n.data,
        connections: n.connections
      }))
    );
    console.log("Inserted nodes result:", getNodes);
  }
  res.json({ success: true });
});
var saveAutomationEdges = asyncHandler(async (req, res) => {
  const { automationId } = req.params;
  const { edges } = req.body;
  await db.delete(automationEdges).where(eq21(automationEdges.automationId, automationId));
  if (edges?.length) {
    await db.insert(automationEdges).values(
      edges.map((n) => ({
        id: n.id,
        automationId,
        sourceNodeId: n.source,
        targetNodeId: n.target,
        animated: n.animated
      }))
    );
  }
  res.json({ success: true });
});
var logAutomationNodeExecution = asyncHandler(async (req, res) => {
  const { executionId } = req.params;
  const { nodeId, nodeType, status, input, output, error } = req.body;
  const [log2] = await db.insert(automationExecutionLogs).values({
    executionId,
    nodeId,
    nodeType,
    status,
    input,
    output,
    error
  }).returning();
  res.status(201).json(log2);
});
var startAutomationExecution = asyncHandler(async (req, res) => {
  const { automationId } = req.params;
  const { contactId, conversationId, triggerData } = req.body;
  const [execution] = await db.insert(automationExecutions).values({
    automationId,
    contactId,
    conversationId,
    triggerData,
    status: "running"
  }).returning();
  try {
    executionService.executeAutomation(execution.id).catch((error) => {
      console.error(`Background execution failed for ${execution.id}:`, error);
    });
    res.status(201).json({
      ...execution,
      message: "Execution started successfully"
    });
  } catch (error) {
    console.error(`Failed to start execution:`, error);
    await db.update(automationExecutions).set({
      status: "failed",
      completedAt: /* @__PURE__ */ new Date(),
      result: error.message
    }).where(eq21(automationExecutions.id, execution.id));
    throw new AppError(500, `Failed to start automation execution: ${error.message}`);
  }
});
var startAutomationExecutionFunction = asyncHandler(
  async (contactId, conversationId, triggerData = {}) => {
    const getAutomations2 = await db.query.automations.findMany({
      where: (fields) => and12(
        eq21(fields.trigger, "new_conversation"),
        eq21(fields.status, "active")
      )
    });
    for (const automation of getAutomations2) {
      console.log("Found automation for new conversation trigger:", automation.id, automation.name);
      const [execution] = await db.insert(automationExecutions).values({
        automationId: automation.id,
        contactId,
        conversationId,
        triggerData,
        status: "running"
      }).returning();
      try {
        executionService.executeAutomation(execution.id).catch((error) => {
          console.error(`Background execution failed for ${execution.id}:`, error);
        });
        return {
          ...execution,
          message: "Execution started successfully"
        };
      } catch (error) {
        console.error(`Failed to start execution:`, error);
        await db.update(automationExecutions).set({
          status: "failed",
          completedAt: /* @__PURE__ */ new Date(),
          result: error.message
        }).where(eq21(automationExecutions.id, execution.id));
        throw new AppError(500, `Failed to start automation execution: ${error.message}`);
      }
    }
  }
);
var testAutomation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { conversationId, contactId } = req.body;
  console.log("Testing automation with id:", id, "Body:", req.body);
  const automation = await db.query.automations.findFirst({
    where: eq21(automations.id, id)
  });
  if (!automation) {
    throw new AppError(404, "Automation not found");
  }
  const [execution] = await db.insert(automationExecutions).values({
    automationId: id,
    contactId,
    conversationId,
    triggerData: {
      trigger: "manual_test",
      timestamp: /* @__PURE__ */ new Date(),
      testMode: true
    },
    status: "running"
  }).returning();
  try {
    executionService.executeAutomation(execution.id).catch((error) => {
      console.error(`Test execution failed for ${execution.id}:`, error);
    });
    res.status(200).json({
      success: true,
      execution,
      message: `Test execution started for automation: ${automation.name}`
    });
  } catch (error) {
    await db.update(automationExecutions).set({
      status: "failed",
      completedAt: /* @__PURE__ */ new Date(),
      result: error.message
    }).where(eq21(automationExecutions.id, execution.id));
    throw new AppError(500, `Test execution failed: ${error.message}`);
  }
});
var getExecutionStatus = asyncHandler(async (req, res) => {
  const { executionId } = req.params;
  const execution = await db.query.automationExecutions.findFirst({
    where: eq21(automationExecutions.id, executionId)
  });
  if (!execution) {
    throw new AppError(404, "Execution not found");
  }
  const logs = await db.select().from(automationExecutionLogs).where(eq21(automationExecutionLogs.executionId, executionId)).orderBy(automationExecutionLogs.executedAt);
  res.json({
    execution,
    logs,
    logCount: logs.length
  });
});
var getAutomationExecutions = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { limit = 10, offset = 0 } = req.query;
  const executions = await db.select().from(automationExecutions).where(eq21(automationExecutions.automationId, id)).limit(parseInt(limit)).offset(parseInt(offset)).orderBy(automationExecutions.startedAt);
  res.json(executions);
});
var triggerNewConversation = asyncHandler(async (req, res) => {
  const { conversationId, channelId, contactId } = req.body;
  if (!conversationId || !channelId) {
    throw new AppError(400, "conversationId and channelId are required");
  }
  try {
    await triggerService.handleNewConversation(conversationId, channelId, contactId);
    res.json({
      success: true,
      message: "New conversation triggers processed",
      conversationId,
      channelId
    });
  } catch (error) {
    console.error("Error processing new conversation triggers:", error);
    throw new AppError(500, `Failed to process triggers: ${error.message}`);
  }
});
var triggerMessageReceived = asyncHandler(async (req, res) => {
  const { conversationId, message, channelId, contactId } = req.body;
  if (!conversationId || !message || !channelId) {
    throw new AppError(400, "conversationId, message, and channelId are required");
  }
  try {
    await triggerService.handleMessageReceived(conversationId, message, channelId, contactId);
    res.json({
      success: true,
      message: "Message received triggers processed",
      conversationId,
      channelId
    });
  } catch (error) {
    console.error("Error processing message triggers:", error);
    throw new AppError(500, `Failed to process triggers: ${error.message}`);
  }
});

// server/middlewares/upload.middleware.ts
import multer from "multer";
import path3 from "path";
import fs2 from "fs";

// server/config/digitalOceanConfig.ts
init_schema();
init_db();
import { S3Client } from "@aws-sdk/client-s3";
import { eq as eq22 } from "drizzle-orm";
var createDOClient = async () => {
  try {
    console.log("\u{1F50D} Fetching storage settings from database...");
    const settings = await db.select().from(storageSettings).where(eq22(storageSettings.isActive, true)).limit(1);
    if (!settings || settings.length === 0) {
      console.log("\u26A0\uFE0F No active storage settings found in database");
      return null;
    }
    const config2 = settings[0];
    let cleanEndpoint = config2.endpoint.trim();
    cleanEndpoint = cleanEndpoint.replace(/\/$/, "");
    const urlParts = new URL(cleanEndpoint);
    const hostParts = urlParts.host.split(".");
    if (hostParts.length > 3) {
      hostParts.shift();
      urlParts.host = hostParts.join(".");
      cleanEndpoint = urlParts.toString();
    }
    console.log("\u2705 Active storage settings found:");
    console.log(`   Provider: ${config2.provider}`);
    console.log(`   Space Name: ${config2.spaceName}`);
    console.log(`   Region: ${config2.region}`);
    console.log(`   Original Endpoint: ${config2.endpoint}`);
    console.log(`   Cleaned Endpoint: ${cleanEndpoint}`);
    console.log(`   Is Active: ${config2.isActive}`);
    const s3Client = new S3Client({
      endpoint: cleanEndpoint,
      region: config2.region,
      credentials: {
        accessKeyId: config2.accessKey,
        secretAccessKey: config2.secretKey
      },
      forcePathStyle: false
      // Use virtual-hosted-style URLs
    });
    console.log("\u2705 S3 Client created successfully");
    return {
      s3: s3Client,
      bucket: config2.spaceName,
      endpoint: cleanEndpoint
    };
  } catch (error) {
    console.error("\u274C Error creating DO client:", error);
    return null;
  }
};

// server/middlewares/upload.middleware.ts
import { PutObjectCommand } from "@aws-sdk/client-s3";
var allowedTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/jpg",
  "image/x-icon",
  "image/vnd.microsoft.icon",
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/avi",
  "video/mov",
  "audio/mp3",
  "audio/wav",
  "audio/ogg",
  "audio/mpeg",
  "audio/m4a",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain"
];
var ensureDirectoryExists = (dirPath) => {
  if (!fs2.existsSync(dirPath)) {
    fs2.mkdirSync(dirPath, { recursive: true });
  }
};
var localStorage = multer.diskStorage({
  destination: (req, _file, cb) => {
    const userId = req.user?.id || req.body?.userId || "guest";
    const uploadPath = path3.join("uploads", userId.toString());
    ensureDirectoryExists(uploadPath);
    console.log(`\u{1F4C1} Saving file to local directory: ${uploadPath}`);
    cb(null, uploadPath);
  },
  filename: (_req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    console.log(`\u{1F4DD} Generated filename: ${uniqueName}`);
    cb(null, uniqueName);
  }
});
var fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    console.log(`\u2705 File type accepted: ${file.mimetype}`);
    cb(null, true);
  } else {
    console.log(`\u274C File type rejected: ${file.mimetype}`);
    req.fileFilterError = `Unsupported file type: ${file.mimetype}`;
    cb(null, false);
  }
};
var upload = multer({
  storage: localStorage,
  limits: { fileSize: 50 * 1024 * 1024 },
  // 50MB
  fileFilter
});
var handleDigitalOceanUpload = async (req, _res, next) => {
  try {
    console.log("\n\u{1F50D} Checking DigitalOcean Spaces configuration...");
    const doClient = await createDOClient();
    console.log("\u{1F4CA} DO Client Status:", doClient ? "\u2705 Active" : "\u274C Inactive");
    let files = [];
    if (req.file) {
      files = [req.file];
      console.log("\u{1F4E6} Processing 1 file (single upload)");
    } else if (req.files) {
      if (Array.isArray(req.files)) {
        files = req.files;
        console.log(`\u{1F4E6} Processing ${files.length} file(s) (array upload)`);
      } else {
        files = Object.values(req.files).flat();
        console.log(`\u{1F4E6} Processing ${files.length} file(s) (fields upload)`);
      }
    }
    if (files.length === 0) {
      console.log("\u26A0\uFE0F No files to process");
      return next();
    }
    if (!doClient) {
      console.log("\u{1F4BE} DigitalOcean not configured/active, files saved locally");
      console.log(files);
      files.forEach((file) => {
        console.log(`   \u{1F4CD} Local path: ${file.path}`);
        console.log(`   \u{1F310} Access URL: /uploads/${path3.basename(path3.dirname(file.path))}/${file.filename}`);
        file.cloudUrl = `${path3.basename(path3.dirname(file.path))}/${file.filename}`;
      });
      return next();
    }
    const { s3, bucket, endpoint } = doClient;
    console.log(`\u2601\uFE0F Uploading to DigitalOcean Spaces: ${bucket}`);
    for (const file of files) {
      try {
        console.log(`
\u{1F4E4} Uploading: ${file.originalname}`);
        console.log(`   Local path: ${file.path}`);
        if (!fs2.existsSync(file.path)) {
          console.error(`   \u274C File not found: ${file.path}`);
          continue;
        }
        const fileBuffer = fs2.readFileSync(file.path);
        const { conversationId } = req.params;
        console.log(`   File read successfully: ${file.path} , conversationId: ${conversationId}`);
        const userId = req.user?.id || req.body?.userId || conversationId || "guest";
        const fileKey = `uploads/${userId}/${Date.now()}-${path3.basename(file.originalname)}`;
        console.log(`   Cloud key: ${fileKey}`);
        console.log(`   File size: ${fileBuffer.length} bytes`);
        await s3.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: fileKey,
            Body: fileBuffer,
            ACL: "public-read",
            ContentType: file.mimetype
          })
        );
        const endpointUrl = new URL(endpoint || "");
        file.cloudUrl = `https://${bucket}.${endpointUrl.host}/${fileKey}`;
        console.log(`   \u2705 Upload successful!`);
        console.log(`   \u{1F310} Cloud URL: ${file.cloudUrl}`);
        fs2.unlinkSync(file.path);
        console.log(`   \u{1F5D1}\uFE0F Local file deleted`);
      } catch (uploadError) {
        console.error(`   \u274C Upload failed for ${file.originalname}:`, uploadError);
        console.log(`   \u{1F4BE} Keeping local file: ${file.path}`);
      }
    }
    next();
  } catch (error) {
    console.error("\u274C DigitalOcean Upload Middleware Error:", error);
    console.log("\u{1F4BE} Falling back to local storage");
    next();
  }
};
var initializeUploadsDirectory = () => {
  ensureDirectoryExists("uploads");
  console.log("\u2705 Uploads directory initialized");
};

// server/routes/automation.routes.ts
var automationWithNodesSchema = z3.object({
  automation: insertAutomationSchema,
  nodes: z3.array(insertAutomationNodeSchema)
});
function registerAutomationRoutes(app2) {
  app2.get(
    "/api/automations",
    requireAuth,
    extractChannelId,
    getAutomations
  );
  app2.get(
    "/api/automations/:id",
    requireAuth,
    extractChannelId,
    getAutomation
  );
  app2.post(
    "/api/automations",
    requireAuth,
    extractChannelId,
    requireSubscription("automation"),
    upload.any(),
    handleDigitalOceanUpload,
    createAutomation
  );
  app2.put(
    "/api/automations/:id",
    requireAuth,
    extractChannelId,
    upload.any(),
    handleDigitalOceanUpload,
    updateAutomation
  );
  app2.delete(
    "/api/automations/:id",
    requireAuth,
    extractChannelId,
    deleteAutomation
  );
  app2.post(
    "/api/automations/:id/toggle",
    requireAuth,
    extractChannelId,
    toggleAutomation
  );
  app2.post(
    "/api/automations/:automationId/nodes",
    requireAuth,
    extractChannelId,
    saveAutomationNodes
  );
  app2.post(
    "/api/automations/:automationId/edges",
    requireAuth,
    extractChannelId,
    saveAutomationNodes
  );
  app2.post(
    "/api/automations/:automationId/executions",
    requireAuth,
    extractChannelId,
    startAutomationExecution
  );
  app2.post(
    "/api/automations/executions/:executionId/logs",
    requireAuth,
    extractChannelId,
    logAutomationNodeExecution
  );
  app2.post("/api/automations/:automationId/execute", startAutomationExecution);
  app2.post("/api/automations/:id/test", testAutomation);
  app2.get("/api/automations/:id/executions", getAutomationExecutions);
  app2.get("/api/automations/executions/:executionId/status", getExecutionStatus);
  app2.post("/api/automations/executions/:executionId/logs", logAutomationNodeExecution);
  app2.post("/api/automations/triggers/new-conversation", triggerNewConversation);
  app2.post("/api/automations/triggers/message-received", triggerMessageReceived);
  app2.get("/api/automations/pending-executions", getAllPendingExecutions);
  app2.post("/api/automations/cleanup-expired", cleanupExpiredExecutions);
}

// server/routes/whatsapp.routes.ts
init_storage();
init_schema();
function registerWhatsAppRoutes(app2) {
  app2.get("/api/whatsapp/channels", async (req, res) => {
    try {
      const channels2 = await storage.getActiveChannel();
      res.json(channels2);
    } catch (error) {
      console.error("Error fetching WhatsApp channels:", error);
      res.status(500).json({ message: "Failed to fetch WhatsApp channels" });
    }
  });
  app2.get("/api/whatsapp/channels/:id", async (req, res) => {
    try {
      const channel = await storage.getWhatsappChannel(req.params.id);
      if (!channel) {
        return res.status(404).json({ message: "WhatsApp channel not found" });
      }
      res.json(channel);
    } catch (error) {
      console.error("Error fetching WhatsApp channel:", error);
      res.status(500).json({ message: "Failed to fetch WhatsApp channel" });
    }
  });
  app2.post("/api/whatsapp/channels", async (req, res) => {
    try {
      const data = insertWhatsappChannelSchema.parse(req.body);
      const channel = await storage.createWhatsappChannel(data);
      res.status(201).json(channel);
    } catch (error) {
      console.error("Error creating WhatsApp channel:", error);
      res.status(500).json({ message: "Failed to create WhatsApp channel" });
    }
  });
  app2.put("/api/whatsapp/channels/:id", async (req, res) => {
    try {
      const channel = await storage.updateWhatsappChannel(req.params.id, req.body);
      if (!channel) {
        return res.status(404).json({ message: "WhatsApp channel not found" });
      }
      res.json(channel);
    } catch (error) {
      console.error("Error updating WhatsApp channel:", error);
      res.status(500).json({ message: "Failed to update WhatsApp channel" });
    }
  });
  app2.delete("/api/whatsapp/channels/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteChannel(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "WhatsApp channel not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting WhatsApp channel:", error);
      res.status(500).json({ message: "Failed to delete WhatsApp channel" });
    }
  });
  app2.post("/api/whatsapp/channels/:id/send", async (req, res) => {
    try {
      console.log("Req params.id : ===> ", req.params.id);
      const channel = await storage.getChannel(req.params.id);
      if (!channel) {
        return res.status(404).json({ message: "Channel not found" });
      }
      if (!channel.phoneNumberId || !channel.accessToken) {
        return res.status(400).json({ message: "Channel is not configured for WhatsApp" });
      }
      const { to, type, message, templateName, templateLanguage, templateVariables } = req.body;
      console.log("Req body : ===> ", req.body);
      let payload;
      let newMsg = null;
      if (type === "template") {
        payload = {
          to,
          type: "template",
          template: {
            name: templateName,
            language: {
              code: templateLanguage || "en"
            }
          }
        };
        newMsg = (await storage.getTemplatesByName(templateName))[0] ?? null;
        if (templateVariables && templateVariables.length > 0) {
          payload.template.components = [
            {
              type: "body",
              parameters: templateVariables.map((value) => ({
                type: "text",
                text: value
              }))
            }
          ];
        }
      } else {
        payload = {
          to,
          type: "text",
          text: {
            body: message
          }
        };
      }
      const whatsappApi = new WhatsAppApiService(channel);
      const result = await whatsappApi.sendDirectMessage(payload);
      if (result.success && result.data) {
        const messageId = result.data.messages?.[0]?.id;
        const contacts3 = await storage.searchContacts(to);
        let contact = contacts3.find((c) => c.phone === to);
        if (!contact) {
          contact = await storage.createContact({
            name: to,
            phone: to,
            email: "",
            channelId: channel.id,
            status: "active"
          });
        }
        console.log("conversation start ===> ", req.body);
        let conversation = await storage.getConversationByPhone(to);
        console.log("conversation mid ===> ", conversation);
        if (!conversation) {
          conversation = await storage.createConversation({
            channelId: channel.id,
            contactId: contact.id,
            contactPhone: to,
            contactName: contact.name,
            status: "active",
            lastMessageAt: /* @__PURE__ */ new Date(),
            lastMessageText: newMsg?.body || null
          });
        }
        console.log("conversation end ===> ");
        await storage.createMessage({
          conversationId: conversation.id,
          content: type === "text" ? message : newMsg?.body,
          direction: "outgoing",
          type,
          status: "sent",
          whatsappMessageId: messageId || void 0
        });
        console.log("updateConversation : ===> ", {
          lastMessageAt: /* @__PURE__ */ new Date(),
          lastMessageText: newMsg?.body
        });
        await storage.updateConversation(conversation.id, {
          lastMessageAt: /* @__PURE__ */ new Date(),
          lastMessageText: newMsg?.body || null
        });
        res.json({
          success: true,
          messageId,
          message: "Message sent successfully"
        });
      } else {
        res.status(400).json({
          success: false,
          message: result.error || "Failed to send message"
        });
      }
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
      res.status(500).json({ message: "Failed to send WhatsApp message" });
    }
  });
  app2.post("/api/whatsapp/channels/:id/test", async (req, res) => {
    try {
      const channel = await storage.getChannel(req.params.id);
      if (!channel) {
        return res.status(404).json({ message: "Channel not found" });
      }
      if (!channel.phoneNumberId || !channel.accessToken) {
        return res.status(400).json({ message: "Channel is not configured for WhatsApp" });
      }
      const testPhone = req.body.phoneNumber || "919310797700";
      const result = await WhatsAppApiService.sendTemplateMessage(
        channel,
        testPhone,
        "hello_world",
        [],
        "en_US",
        false
        // not marketing
      );
      await storage.createApiLog({
        channelId: channel.id,
        requestType: "test_connection",
        endpoint: `https://graph.facebook.com/v22.0/${channel.phoneNumberId}/messages`,
        method: "POST",
        requestBody: {
          messaging_product: "whatsapp",
          to: testPhone,
          type: "template",
          template: {
            name: "hello_world",
            language: { code: "en_US" }
          }
        },
        responseStatus: 200,
        responseBody: result,
        duration: 0
      });
      res.json({ success: true, message: "Test message sent successfully", result });
    } catch (error) {
      console.error("Error testing WhatsApp connection:", error);
      res.status(500).json({ message: "Failed to test WhatsApp connection" });
    }
  });
  app2.get("/api/whatsapp/api-logs", async (req, res) => {
    try {
      const channelId = req.query.channelId;
      const limit = parseInt(req.query.limit) || 100;
      if (!channelId) {
        return res.status(400).json({ message: "Missing required query parameter: channelId" });
      }
      const logs = await storage.getApiLogs(channelId, limit);
      res.json(logs);
    } catch (error) {
      console.error("Error fetching API logs:", error);
      res.status(500).json({ message: "Failed to fetch API logs" });
    }
  });
}

// server/routes/webhooks.routes.ts
function registerWebhookRoutes(app2) {
  app2.get("/api/webhook-configs-channel-id/:id", getWebhookConfigsByChannelId);
  app2.get("/api/webhook-configs", getWebhookConfigs);
  app2.post("/api/webhook-configs", createWebhookConfig);
  app2.patch("/api/webhook-configs/:id", updateWebhookConfig);
  app2.delete("/api/webhook-configs/:id", deleteWebhookConfig);
  app2.post("/api/webhook-configs/:id/test", testWebhook);
  app2.get("/api/webhook/global-url", getGlobalWebhookUrl);
  app2.all("/webhook/:id", handleWebhook);
  app2.post("/webhooks/razorpay", razorpayWebhook);
  app2.post("/webhooks/stripe", stripeWebhook);
}

// server/controllers/messages.controller.ts
init_storage();
init_schema();
var getMessages = asyncHandler(async (req, res) => {
  const { conversationId } = req.params;
  const messages2 = await storage.getMessages(conversationId);
  await storage.updateConversation(conversationId, {
    unreadCount: null
  });
  res.json(messages2);
});
var createMessage = asyncHandler(async (req, res) => {
  const { conversationId } = req.params;
  const { content, fromUser, caption, templateName, parameters } = req.body;
  const file = req.file;
  const conversation = await storage.getConversation(conversationId);
  if (!conversation) throw new AppError(404, "Conversation not found");
  let msgBody = content;
  let messageType = "text";
  let result = null;
  let mediaId = null;
  let mediaUrl = null;
  let messageStatus = "sent";
  if (fromUser) {
    if (!conversation.channelId) throw new Error("ChannelId is missing");
    if (!conversation.contactPhone) throw new Error("Contact phone is missing");
    const channel = await storage.getChannel(conversation.channelId);
    if (!channel) throw new AppError(404, "Channel not found");
    const whatsappApi = new WhatsAppApiService(channel);
    try {
      if (templateName) {
        result = await whatsappApi.sendMessage(conversation.contactPhone, templateName, parameters || []);
        const newMsg = await storage.getTemplatesByName(templateName);
        msgBody = newMsg[0]?.body || `[template: ${templateName}]`;
        messageType = "template";
      } else if (file) {
        const mimeType = file.mimetype;
        const isCloudFile = !!file.cloudUrl;
        const filePath = file.cloudUrl || file.path;
        console.log(`\u{1F4E4} Processing media: ${isCloudFile ? "Cloud" : "Local"}`);
        console.log(`   File location: ${filePath}`);
        console.log(`   MIME type: ${mimeType}`);
        if (isCloudFile) {
          console.log("\u2B07\uFE0F Downloading from cloud for WhatsApp upload...");
          const response = await fetch(file.cloudUrl);
          const buffer = Buffer.from(await response.arrayBuffer());
          mediaId = await whatsappApi.uploadMediaBuffer(buffer, mimeType, file.originalname);
          console.log("\u2705 Media uploaded to WhatsApp, ID:", mediaId);
        } else {
          console.log("\u{1F4C1} Uploading local file to WhatsApp...");
          mediaId = await whatsappApi.uploadMedia(file.path, mimeType);
          console.log("\u2705 Media uploaded to WhatsApp, ID:", mediaId);
        }
        try {
          mediaUrl = await whatsappApi.getMediaUrl(mediaId);
          console.log("\u{1F310} WhatsApp media URL retrieved:", mediaUrl);
        } catch (error) {
          console.warn("\u26A0\uFE0F Failed to get WhatsApp media URL:", error);
          mediaUrl = file.cloudUrl || null;
        }
        if (mimeType.startsWith("image")) messageType = "image";
        else if (mimeType.startsWith("video")) messageType = "video";
        else if (mimeType.startsWith("audio")) messageType = "audio";
        else messageType = "document";
        result = await whatsappApi.sendMediaMessage(
          conversation.contactPhone,
          mediaId,
          messageType,
          caption || content
        );
        msgBody = caption || `[${messageType}]`;
      } else {
        try {
          result = await whatsappApi.sendTextMessage(conversation.contactPhone, content);
        } catch (error) {
          console.warn("\u274C WhatsApp send failed:", error.message || error);
          messageStatus = "failed";
        }
        msgBody = content;
        messageType = "text";
      }
      const message = await storage.createMessage({
        conversationId,
        fromUser: true,
        content: msgBody,
        status: "sent",
        whatsappMessageId: result?.messages?.[0]?.id,
        messageType,
        type: messageType,
        mediaId: mediaId || void 0,
        mediaUrl: mediaUrl || file?.cloudUrl || void 0,
        // Use cloud URL if available
        mediaMimeType: file?.mimetype || void 0,
        metadata: file ? {
          mimeType: file.mimetype,
          originalName: file.originalname,
          cloudUrl: file.cloudUrl,
          // Store cloud URL
          isCloud: !!file.cloudUrl,
          fileSize: file.size
        } : {}
      });
      await storage.updateConversation(conversationId, {
        lastMessageAt: /* @__PURE__ */ new Date(),
        lastMessageText: msgBody
      });
      if (global.broadcastToConversation) {
        global.broadcastToConversation(conversationId, {
          type: "new-message",
          message
        });
      }
      return res.json(message);
    } catch (error) {
      console.error("\u274C Error sending WhatsApp message:", error);
      throw new AppError(500, error instanceof Error ? error.message : "Failed to send message");
    }
  } else {
    const validatedMessage = insertMessageSchema.parse({
      ...req.body,
      conversationId
    });
    const message = await storage.createMessage(validatedMessage);
    try {
      if (!conversation.channelId) throw new Error("ChannelId is missing");
      if (!conversation.contactId) throw new Error("contactId is missing");
      await triggerService.handleMessageReceived(
        conversationId,
        message,
        conversation.channelId,
        conversation.contactId
      );
      console.log(`\u2705 Triggered automations for message: ${message.id}`);
    } catch (error) {
      console.error("\u274C Failed to trigger message automations:", error);
    }
    await storage.updateConversation(conversationId, {
      lastMessageAt: /* @__PURE__ */ new Date(),
      lastMessageText: msgBody
    });
    if (global.broadcastToConversation) {
      global.broadcastToConversation(conversationId, {
        type: "new-message",
        message
      });
    }
    return res.json(message);
  }
});
var getMediaById = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const message = await storage.getMessage(messageId);
  if (!message) {
    throw new AppError(404, "Message not found");
  }
  if (!message.mediaId) {
    throw new AppError(404, "No media found for this message");
  }
  if (!message.conversationId) {
    throw new AppError(400, "Message missing conversationId");
  }
  const conversation = await storage.getConversation(message.conversationId);
  if (!conversation || !conversation.channelId) {
    throw new AppError(404, "Conversation or channel not found");
  }
  const channel = await storage.getChannel(conversation.channelId);
  if (!channel) {
    throw new AppError(404, "Channel not found");
  }
  try {
    const whatsappApi = new WhatsAppApiService(channel);
    let mediaUrl = message.mediaUrl;
    if (!mediaUrl) {
      mediaUrl = await whatsappApi.getMediaUrl(message.mediaId);
      await storage.updateMessage(messageId, { mediaUrl });
    }
    if (!mediaUrl) {
      throw new AppError(500, "Failed to get media URL from WhatsApp");
    }
    const mediaResponse = await fetch(mediaUrl, {
      headers: {
        Authorization: `Bearer ${channel.accessToken}`
      }
    });
    if (!mediaResponse.ok) {
      throw new AppError(500, "Failed to fetch media from WhatsApp");
    }
    const contentType = message.mediaMimeType || "application/octet-stream";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400");
    const arrayBuffer = await mediaResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    res.send(buffer);
  } catch (error) {
    console.error("Error serving media:", error);
    throw new AppError(500, "Failed to serve media");
  }
});
var getMediaUrl = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const message = await storage.getMessage(messageId);
  if (!message || !message.mediaId) {
    throw new AppError(404, "Message or media not found");
  }
  if (message.mediaUrl) {
    return res.json({ url: `/api/media/${messageId}`, whatsappUrl: message.mediaUrl });
  }
  if (!message.conversationId) {
    throw new AppError(400, "Message missing conversationId");
  }
  const conversation = await storage.getConversation(message.conversationId);
  const channel = await storage.getChannel(conversation.channelId);
  const whatsappApi = new WhatsAppApiService(channel);
  try {
    const mediaUrl = await whatsappApi.getMediaUrl(message.mediaId);
    await storage.updateMessage(messageId, { mediaUrl });
    res.json({
      url: `/api/media/${messageId}`,
      whatsappUrl: mediaUrl
    });
  } catch (error) {
    console.error("Error getting media URL:", error);
    throw new AppError(500, "Failed to get media URL");
  }
});
var getMediaProxy = asyncHandler(async (req, res) => {
  try {
    const { messageId } = req.query;
    const { download } = req.query;
    console.log("Media proxy hit for messageId:", messageId, "download:", download);
    if (typeof messageId !== "string") {
      return res.status(400).json({ error: "Invalid messageId" });
    }
    const message = await storage.getMessage(messageId);
    if (!message || !message.mediaId) {
      return res.status(404).json({ error: "Media not found" });
    }
    if (!message.conversationId) {
      return res.status(400).json({ error: "Message missing conversationId" });
    }
    const conversation = await storage.getConversation(message.conversationId);
    const channel = await storage.getChannel(conversation.channelId);
    const whatsappApi = new WhatsAppApiService(channel);
    console.log("Streaming media for mediaId:", message.mediaId);
    const contentType = message.mediaMimeType || "application/octet-stream";
    res.set({
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=300"
    });
    if (download === "true") {
      const filename = message.metadata || `media_${messageId}`;
      res.set("Content-Disposition", `attachment; filename="${filename}"`);
    }
    const success = await whatsappApi.streamMedia(message.mediaId, res);
    if (!success) {
      const mediaBuffer = await whatsappApi.getMedia(message.mediaId);
      if (!mediaBuffer) {
        return res.status(404).json({ error: "Media not accessible" });
      }
      res.set("Content-Length", mediaBuffer.length.toString());
      res.send(mediaBuffer);
    }
  } catch (error) {
    console.error("Media proxy error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
var sendMessage = asyncHandler(async (req, res) => {
  const { to, message, templateName, parameters, channelId: bodyChannelId, caption, type } = req.body;
  const file = req.file;
  let channelId = bodyChannelId;
  if (!channelId) {
    const activeChannel = await storage.getActiveChannel();
    if (!activeChannel) {
      throw new AppError(400, "No active channel found. Please select a channel.");
    }
    channelId = activeChannel.id;
  }
  const channel = await storage.getChannel(channelId);
  if (!channel) throw new AppError(404, "Channel not found");
  const whatsappApi = new WhatsAppApiService(channel);
  let result;
  let msgBody = message;
  let messageType = "text";
  if (templateName) {
    result = await whatsappApi.sendMessage(to, templateName, parameters || []);
    const newMsg = await storage.getTemplatesByName(templateName);
    msgBody = newMsg[0].body;
    messageType = "template";
  } else if (file) {
    const mimeType = file.mimetype;
    const mediaId = await whatsappApi.uploadMedia(file.path, mimeType);
    if (mimeType.startsWith("image")) messageType = "image";
    else if (mimeType.startsWith("video")) messageType = "video";
    else if (mimeType.startsWith("audio")) messageType = "audio";
    else messageType = "document";
    result = await whatsappApi.sendMediaMessage(to, mediaId, messageType, caption || message);
    msgBody = caption || `[${messageType}]`;
  } else {
    result = await whatsappApi.sendTextMessage(to, message);
    msgBody = message;
    messageType = "text";
  }
  let conversation = await storage.getConversationByPhone(to);
  if (!conversation) {
    let contact = await storage.getContactByPhone(to);
    if (!contact) {
      contact = await storage.createContact({ name: to, phone: to, channelId });
    }
    conversation = await storage.createConversation({
      contactId: contact.id,
      contactPhone: to,
      contactName: contact.name || to,
      channelId,
      unreadCount: 0
    });
  }
  const createdMessage = await storage.createMessage({
    conversationId: conversation.id,
    content: msgBody,
    status: "sent",
    whatsappMessageId: result.messages?.[0]?.id,
    messageType,
    metadata: file ? { mimeType: file.mimetype, originalName: file.originalname } : {}
  });
  await storage.updateConversation(conversation.id, {
    lastMessageAt: /* @__PURE__ */ new Date(),
    lastMessageText: msgBody
  });
  if (global.broadcastToConversation) {
    global.broadcastToConversation(conversation.id, {
      type: "new-message",
      message: createdMessage
    });
  }
  res.json({
    success: true,
    messageId: result.messages?.[0]?.id,
    conversationId: conversation.id
  });
});

// server/routes/messages.routes.ts
function registerMessageRoutes(app2) {
  app2.get("/api/conversations/:conversationId/messages", upload.single("media"), handleDigitalOceanUpload, getMessages);
  app2.post(
    "/api/conversations/:conversationId/messages",
    upload.single("media"),
    handleDigitalOceanUpload,
    createMessage
  );
  app2.post("/api/messages/send", sendMessage);
  app2.get("/api/messages/media-url", getMediaUrl);
  app2.get("/api/messages/media-proxy", getMediaProxy);
}

// server/controllers/payment.providers.controller.ts
init_db();
init_schema();
import { eq as eq23 } from "drizzle-orm";
var getAllProviders = async (req, res) => {
  try {
    const providers = await db.select().from(paymentProviders);
    res.status(200).json({ success: true, data: providers });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching providers", error });
  }
};
var getActiveProviders = async (req, res) => {
  try {
    const providers = await db.select({
      id: paymentProviders.id,
      name: paymentProviders.name,
      providerKey: paymentProviders.providerKey,
      logo: paymentProviders.logo
    }).from(paymentProviders).where(eq23(paymentProviders.isActive, true));
    res.status(200).json({ success: true, data: providers });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching active providers",
      error
    });
  }
};
var getProviderById = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await db.select().from(paymentProviders).where(eq23(paymentProviders.id, id));
    if (provider.length === 0) {
      return res.status(404).json({ success: false, message: "Provider not found" });
    }
    res.status(200).json({ success: true, data: provider[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching provider", error });
  }
};
var getProviderByKey = async (req, res) => {
  try {
    const { key } = req.params;
    const provider = await db.select().from(paymentProviders).where(eq23(paymentProviders.providerKey, key));
    if (provider.length === 0) {
      return res.status(404).json({ success: false, message: "Provider not found" });
    }
    res.status(200).json({ success: true, data: provider[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching provider", error });
  }
};
var createProvider = async (req, res) => {
  try {
    const {
      name,
      providerKey,
      description,
      logo,
      isActive,
      config: config2,
      supportedCurrencies,
      supportedMethods
    } = req.body;
    const newProvider = await db.insert(paymentProviders).values({
      name,
      providerKey,
      description,
      logo,
      isActive: isActive ?? true,
      config: config2,
      supportedCurrencies,
      supportedMethods
    }).returning();
    res.status(201).json({ success: true, data: newProvider[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating provider", error });
  }
};
var updateProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedProvider = await db.update(paymentProviders).set({ ...updateData, updatedAt: /* @__PURE__ */ new Date() }).where(eq23(paymentProviders.id, id)).returning();
    if (updatedProvider.length === 0) {
      return res.status(404).json({ success: false, message: "Provider not found" });
    }
    res.status(200).json({ success: true, data: updatedProvider[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating provider", error });
  }
};
var toggleProviderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const updatedProvider = await db.update(paymentProviders).set({ isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq23(paymentProviders.id, id)).returning();
    if (updatedProvider.length === 0) {
      return res.status(404).json({ success: false, message: "Provider not found" });
    }
    res.status(200).json({
      success: true,
      message: `Provider ${isActive ? "activated" : "deactivated"} successfully`,
      data: updatedProvider[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error toggling provider status", error });
  }
};
var deleteProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProvider = await db.delete(paymentProviders).where(eq23(paymentProviders.id, id)).returning();
    if (deletedProvider.length === 0) {
      return res.status(404).json({ success: false, message: "Provider not found" });
    }
    res.status(200).json({ success: true, message: "Provider deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting provider", error });
  }
};

// server/controllers/transactions.controller.ts
init_db();
init_schema();
import { eq as eq24, and as and13, desc as desc16, gte as gte6, lte as lte2, or as or2, like, sql as sql14, ne } from "drizzle-orm";
import Stripe from "stripe";
import Razorpay from "razorpay";
import crypto3 from "crypto";
import ExcelJS2 from "exceljs";
var stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || process.env.TESTING_STRIPE_SECRET_KEY || "",
  {
    apiVersion: "2025-10-29.clover"
  }
);
var getAllTransactions = async (req, res) => {
  try {
    const {
      search,
      status,
      paymentMethod,
      billingCycle,
      providerId,
      startDate,
      endDate,
      minAmount,
      maxAmount,
      page = "1",
      limit = "20"
    } = req.query;
    const conditions = [];
    if (search && typeof search === "string") {
      conditions.push(
        or2(
          like(users.email, `%${search}%`),
          like(transactions.providerTransactionId, `%${search}%`),
          like(transactions.providerOrderId, `%${search}%`)
        )
      );
    }
    if (status && typeof status === "string") {
      conditions.push(eq24(transactions.status, status));
    } else {
      conditions.push(ne(transactions.status, "pending"));
    }
    if (paymentMethod && typeof paymentMethod === "string") {
      conditions.push(eq24(transactions.paymentMethod, paymentMethod));
    }
    if (billingCycle && typeof billingCycle === "string") {
      conditions.push(eq24(transactions.billingCycle, billingCycle));
    }
    if (providerId && typeof providerId === "string") {
      conditions.push(eq24(transactions.paymentProviderId, providerId));
    }
    if (startDate && typeof startDate === "string") {
      conditions.push(gte6(transactions.createdAt, new Date(startDate)));
    }
    if (endDate && typeof endDate === "string") {
      conditions.push(lte2(transactions.createdAt, new Date(endDate)));
    }
    if (minAmount && typeof minAmount === "string") {
      conditions.push(gte6(transactions.amount, minAmount));
    }
    if (maxAmount && typeof maxAmount === "string") {
      conditions.push(lte2(transactions.amount, maxAmount));
    }
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const offset = (pageNum - 1) * limitNum;
    const whereClause = conditions.length > 0 ? and13(...conditions) : void 0;
    const allTransactions = await db.select({
      transaction: transactions,
      user: {
        id: users.id,
        firstName: users.firstName,
        lastName: users.lastName,
        email: users.email
      },
      plan: {
        id: plans.id,
        name: plans.name,
        price: plans.annualPrice,
        monthlyPrice: plans.monthlyPrice,
        permissions: plans.permissions,
        features: plans.features
      },
      provider: {
        id: paymentProviders.id,
        name: paymentProviders.name,
        providerKey: paymentProviders.providerKey
      }
    }).from(transactions).leftJoin(users, eq24(transactions.userId, users.id)).leftJoin(plans, eq24(transactions.planId, plans.id)).leftJoin(paymentProviders, eq24(transactions.paymentProviderId, paymentProviders.id)).where(whereClause).orderBy(desc16(transactions.createdAt)).limit(limitNum).offset(offset);
    const totalCountResult = await db.select({ count: sql14`count(*)` }).from(transactions).leftJoin(users, eq24(transactions.userId, users.id)).where(whereClause);
    const totalCount = Number(totalCountResult[0]?.count || 0);
    res.status(200).json({
      success: true,
      data: allTransactions,
      pagination: {
        page: pageNum,
        limit: limitNum,
        totalCount,
        totalPages: Math.ceil(totalCount / limitNum)
      }
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching transactions",
      error
    });
  }
};
var getTransactionStats = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const conditions = [];
    if (startDate && typeof startDate === "string") {
      conditions.push(gte6(transactions.createdAt, new Date(startDate)));
    }
    if (endDate && typeof endDate === "string") {
      conditions.push(lte2(transactions.createdAt, new Date(endDate)));
    }
    const whereClause = conditions.length > 0 ? and13(...conditions) : void 0;
    const revenueResult = await db.select({
      total: sql14`SUM(CAST(${transactions.amount} AS DECIMAL))`
    }).from(transactions).where(
      whereClause ? and13(whereClause, eq24(transactions.status, "completed")) : eq24(transactions.status, "completed")
    );
    const statusCounts = await db.select({
      status: transactions.status,
      count: sql14`count(*)`
    }).from(transactions).where(whereClause).groupBy(transactions.status);
    const billingCycleRevenue = await db.select({
      billingCycle: transactions.billingCycle,
      total: sql14`SUM(CAST(${transactions.amount} AS DECIMAL))`
    }).from(transactions).where(
      whereClause ? and13(whereClause, eq24(transactions.status, "completed")) : eq24(transactions.status, "completed")
    ).groupBy(transactions.billingCycle);
    res.status(200).json({
      success: true,
      data: {
        totalRevenue: Number(revenueResult[0]?.total || 0),
        statusCounts: statusCounts.map((s) => ({
          status: s.status,
          count: Number(s.count)
        })),
        billingCycleRevenue: billingCycleRevenue.map((b) => ({
          billingCycle: b.billingCycle,
          total: Number(b.total)
        }))
      }
    });
  } catch (error) {
    console.error("Error fetching transaction stats:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching transaction statistics",
      error
    });
  }
};
var getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await db.select({
      transaction: transactions,
      user: users,
      plan: plans,
      provider: paymentProviders
    }).from(transactions).leftJoin(users, eq24(transactions.userId, users.id)).leftJoin(plans, eq24(transactions.planId, plans.id)).leftJoin(
      paymentProviders,
      eq24(transactions.paymentProviderId, paymentProviders.id)
    ).where(eq24(transactions.id, id)).limit(1);
    if (!transaction || transaction.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found"
      });
    }
    res.status(200).json({
      success: true,
      data: transaction[0]
    });
  } catch (error) {
    console.error("Error fetching transaction:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching transaction",
      error
    });
  }
};
var exportTransactions = async (req, res) => {
  try {
    const allTransactions = await db.select({
      transaction: transactions,
      user: users,
      plan: plans,
      provider: paymentProviders
    }).from(transactions).where(ne(transactions.status, "pending")).leftJoin(users, eq24(transactions.userId, users.id)).leftJoin(plans, eq24(transactions.planId, plans.id)).leftJoin(
      paymentProviders,
      eq24(transactions.paymentProviderId, paymentProviders.id)
    ).orderBy(desc16(transactions.createdAt));
    const workbook = new ExcelJS2.Workbook();
    const worksheet = workbook.addWorksheet("Transactions");
    worksheet.columns = [
      { header: "Transaction ID", key: "id", width: 25 },
      { header: "User Email", key: "userEmail", width: 30 },
      { header: "Plan", key: "planName", width: 20 },
      { header: "Provider", key: "provider", width: 20 },
      { header: "Amount", key: "amount", width: 15 },
      { header: "Currency", key: "currency", width: 10 },
      { header: "Billing Cycle", key: "billingCycle", width: 15 },
      { header: "Status", key: "status", width: 15 },
      { header: "Payment Method", key: "paymentMethod", width: 20 },
      { header: "Provider Txn ID", key: "providerTransactionId", width: 25 },
      { header: "Provider Order ID", key: "providerOrderId", width: 25 },
      { header: "Paid At", key: "paidAt", width: 25 },
      { header: "Created At", key: "createdAt", width: 25 }
    ];
    allTransactions.forEach((t) => {
      worksheet.addRow({
        id: t.transaction.id,
        userEmail: t.user?.email || "",
        planName: t.plan?.name || "",
        provider: t.provider?.name || "",
        amount: t.transaction.amount,
        currency: t.transaction.currency,
        billingCycle: t.transaction.billingCycle,
        status: t.transaction.status,
        paymentMethod: t.transaction.paymentMethod || "",
        providerTransactionId: t.transaction.providerTransactionId || "",
        providerOrderId: t.transaction.providerOrderId || "",
        paidAt: t.transaction.paidAt ? new Date(t.transaction.paidAt).toLocaleString() : "",
        createdAt: t.transaction.createdAt ? new Date(t.transaction.createdAt).toLocaleString() : ""
      });
    });
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0078D4" }
      // Blue header background
    };
    headerRow.alignment = { horizontal: "center" };
    headerRow.border = {
      bottom: { style: "thin", color: { argb: "FF000000" } }
    };
    worksheet.eachRow({ includeEmpty: false }, (row) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin", color: { argb: "FFCCCCCC" } },
          left: { style: "thin", color: { argb: "FFCCCCCC" } },
          bottom: { style: "thin", color: { argb: "FFCCCCCC" } },
          right: { style: "thin", color: { argb: "FFCCCCCC" } }
        };
        cell.alignment = { vertical: "middle", wrapText: true };
      });
    });
    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=transactions_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("Error exporting transactions:", error);
    res.status(500).json({
      success: false,
      message: "Error exporting transactions",
      error
    });
  }
};
var getTransactionsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const userTransactions = await db.select({
      transaction: transactions,
      plan: plans,
      provider: paymentProviders
    }).from(transactions).leftJoin(plans, eq24(transactions.planId, plans.id)).leftJoin(
      paymentProviders,
      eq24(transactions.paymentProviderId, paymentProviders.id)
    ).where(eq24(transactions.userId, userId)).orderBy(desc16(transactions.createdAt));
    res.status(200).json({ success: true, data: userTransactions });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching user transactions",
      error
    });
  }
};
var createTransaction = async (req, res) => {
  try {
    const {
      userId,
      planId,
      paymentProviderId,
      billingCycle,
      // "monthly" or "annual"
      paymentMethod
    } = req.body;
    const planData = await db.select().from(plans).where(eq24(plans.id, planId));
    if (planData.length === 0) {
      return res.status(404).json({ success: false, message: "Plan not found" });
    }
    const provider = await db.select().from(paymentProviders).where(eq24(paymentProviders.id, paymentProviderId));
    if (provider.length === 0) {
      return res.status(404).json({ success: false, message: "Payment provider not found" });
    }
    if (!provider[0].isActive) {
      return res.status(400).json({ success: false, message: "Payment provider is not active" });
    }
    const plan = planData[0];
    const amount = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
    const newTransaction = await db.insert(transactions).values({
      userId,
      planId,
      paymentProviderId,
      amount,
      currency: "INR",
      // You can make this dynamic
      billingCycle,
      status: "pending",
      paymentMethod,
      metadata: {}
    }).returning();
    res.status(201).json({
      success: true,
      message: "Transaction created successfully",
      data: newTransaction[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating transaction", error });
  }
};
var updateTransactionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      status,
      providerTransactionId,
      providerOrderId,
      providerPaymentId,
      metadata
    } = req.body;
    const updateData = {
      status,
      updatedAt: /* @__PURE__ */ new Date()
    };
    if (providerTransactionId)
      updateData.providerTransactionId = providerTransactionId;
    if (providerOrderId) updateData.providerOrderId = providerOrderId;
    if (providerPaymentId) updateData.providerPaymentId = providerPaymentId;
    if (metadata) updateData.metadata = metadata;
    if (status === "completed") {
      updateData.paidAt = /* @__PURE__ */ new Date();
    }
    if (status === "refunded") {
      updateData.refundedAt = /* @__PURE__ */ new Date();
    }
    const updatedTransaction = await db.update(transactions).set(updateData).where(eq24(transactions.id, id)).returning();
    if (updatedTransaction.length === 0) {
      return res.status(404).json({ success: false, message: "Transaction not found" });
    }
    res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      data: updatedTransaction[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating transaction", error });
  }
};
var completeTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      providerTransactionId,
      providerOrderId,
      providerPaymentId,
      metadata
    } = req.body;
    const transactionData = await db.select().from(transactions).where(eq24(transactions.id, id));
    if (transactionData.length === 0) {
      return res.status(404).json({ success: false, message: "Transaction not found" });
    }
    const transaction = transactionData[0];
    const updatedTransaction = await db.update(transactions).set({
      status: "completed",
      providerTransactionId,
      providerOrderId,
      providerPaymentId,
      metadata,
      paidAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq24(transactions.id, id)).returning();
    const startDate = /* @__PURE__ */ new Date();
    const endDate = /* @__PURE__ */ new Date();
    if (transaction.billingCycle === "annual") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    } else {
      endDate.setMonth(endDate.getMonth() + 1);
    }
    const newSubscription = await db.insert(subscriptions).values({
      userId: transaction.userId,
      planId: transaction.planId,
      status: "active",
      billingCycle: transaction.billingCycle,
      startDate,
      endDate,
      autoRenew: true
    }).returning();
    await db.update(transactions).set({ subscriptionId: newSubscription[0].id }).where(eq24(transactions.id, id));
    res.status(200).json({
      success: true,
      message: "Transaction completed and subscription created successfully",
      data: {
        transaction: updatedTransaction[0],
        subscription: newSubscription[0]
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error completing transaction", error });
  }
};
var refundTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { refundReason } = req.body;
    const transactionData = await db.select().from(transactions).where(eq24(transactions.id, id));
    if (transactionData.length === 0) {
      return res.status(404).json({ success: false, message: "Transaction not found" });
    }
    const transaction = transactionData[0];
    if (transaction.status !== "completed") {
      return res.status(400).json({
        success: false,
        message: "Only completed transactions can be refunded"
      });
    }
    const updatedTransaction = await db.update(transactions).set({
      status: "refunded",
      refundedAt: /* @__PURE__ */ new Date(),
      metadata: { ...transaction.metadata, refundReason },
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq24(transactions.id, id)).returning();
    if (transaction.subscriptionId) {
      await db.update(subscriptions).set({ status: "cancelled", updatedAt: /* @__PURE__ */ new Date() }).where(eq24(subscriptions.id, transaction.subscriptionId));
    }
    res.status(200).json({
      success: true,
      message: "Transaction refunded successfully",
      data: updatedTransaction[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error refunding transaction", error });
  }
};
var initiatePayment = async (req, res) => {
  try {
    const {
      userId,
      planId,
      currency,
      paymentProviderId,
      billingCycle
      // "monthly" or "annual"
    } = req.body;
    const planData = await db.select().from(plans).where(eq24(plans.id, planId));
    if (planData.length === 0) {
      return res.status(404).json({ success: false, message: "Plan not found" });
    }
    const providerData = await db.select().from(paymentProviders).where(eq24(paymentProviders.id, paymentProviderId));
    if (providerData.length === 0) {
      return res.status(404).json({ success: false, message: "Payment provider not found" });
    }
    const provider = providerData[0];
    if (!provider.isActive) {
      return res.status(400).json({ success: false, message: "Payment provider is not active" });
    }
    const plan = planData[0];
    const amount = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
    const newTransaction = await db.insert(transactions).values({
      userId,
      planId,
      paymentProviderId,
      amount,
      currency,
      billingCycle,
      status: "pending",
      metadata: {}
    }).returning();
    const transaction = newTransaction[0];
    let paymentData;
    if (provider.providerKey === "razorpay") {
      paymentData = await initializeRazorpayPayment(
        transaction,
        provider,
        amount
      );
    } else if (provider.providerKey === "stripe") {
      paymentData = await initializeStripePayment(
        transaction,
        provider,
        amount
      );
    } else {
      return res.status(400).json({
        success: false,
        message: "Unsupported payment provider"
      });
    }
    await db.update(transactions).set({
      providerOrderId: paymentData.orderId,
      providerTransactionId: paymentData.paymentIntentId,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq24(transactions.id, transaction.id));
    res.status(201).json({
      success: true,
      message: "Payment initiated successfully",
      data: {
        transactionId: transaction.id,
        provider: provider.providerKey,
        amount,
        currency: transaction.currency,
        ...paymentData
      }
    });
  } catch (error) {
    console.error("Error initiating payment:", error);
    res.status(500).json({ success: false, message: "Error initiating payment", error });
  }
};
async function initializeRazorpayPayment(transaction, provider, amount) {
  const razorpay = new Razorpay({
    key_id: provider.config.apiKey || process.env.RAZORPAY_KEY_ID,
    key_secret: provider.config.apiSecret || process.env.RAZORPAY_KEY_SECRET
  });
  const order = await razorpay.orders.create({
    amount: Math.round(parseFloat(amount) * 100),
    // Amount in paise
    currency: transaction.currency,
    receipt: transaction.id,
    notes: {
      transactionId: transaction.id,
      userId: transaction.userId,
      planId: transaction.planId
    }
  });
  console.log("Razorpay Order Created:", order);
  return {
    orderId: order.id,
    paymentIntentId: null,
    keyId: provider.config.apiKey || process.env.RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Your Company Name",
    description: "Subscription Payment",
    prefill: {
      name: "",
      email: "",
      contact: ""
    }
  };
}
async function initializeStripePayment(transaction, provider, amount) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(parseFloat(amount) * 100),
    // Amount in cents
    currency: transaction.currency.toLowerCase(),
    description: `description: Payment for Pro plan (monthly plan) by user ${transaction.userId}`,
    metadata: {
      transactionId: transaction.id,
      userId: transaction.userId,
      planId: transaction.planId
    },
    automatic_payment_methods: {
      enabled: true
    }
  });
  return {
    orderId: null,
    paymentIntentId: paymentIntent.id,
    clientSecret: paymentIntent.client_secret,
    publishableKey: provider.config.apiSecretTest,
    amount: paymentIntent.amount,
    currency: paymentIntent.currency
  };
}
var verifyRazorpayPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      transactionId
    } = req.body;
    const providerData = await db.select().from(paymentProviders).where(eq24(paymentProviders.providerKey, "razorpay")).limit(1);
    if (providerData.length === 0) {
      return res.status(404).json({ success: false, message: "Razorpay provider not found" });
    }
    const provider = providerData[0];
    const razorpay = new Razorpay({
      key_id: provider.config.apiKey || process.env.RAZORPAY_KEY_ID,
      key_secret: provider.config.apiSecret || process.env.RAZORPAY_KEY_SECRET
    });
    const secret = provider.config.apiSecret || process.env.RAZORPAY_KEY_SECRET;
    const paymentDetails = await razorpay.payments.fetch(razorpay_payment_id);
    const generated_signature = crypto3.createHmac("sha256", secret).update(razorpay_order_id + "|" + razorpay_payment_id).digest("hex");
    const transactionData = await db.select().from(transactions).where(eq24(transactions.id, transactionId)).limit(1);
    if (transactionData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found"
      });
    }
    const transaction = transactionData[0];
    console.log(
      {
        status: "failed",
        metadata: { error: "Invalid signature" },
        paymentMethod: paymentDetails.method || null,
        updatedAt: /* @__PURE__ */ new Date()
      }
    );
    if (generated_signature !== razorpay_signature) {
      await db.update(transactions).set({
        status: "failed",
        metadata: { error: "Invalid signature" },
        paymentMethod: paymentDetails.method || null,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq24(transactions.id, transactionId));
      return res.status(400).json({
        success: false,
        message: "Payment verification failed - Invalid signature"
      });
    }
    await db.update(transactions).set({
      status: "completed",
      providerOrderId: razorpay_order_id,
      providerPaymentId: razorpay_payment_id,
      paymentMethod: paymentDetails.method || null,
      paidAt: /* @__PURE__ */ new Date(),
      metadata: { verified: true },
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq24(transactions.id, transactionId));
    const planData = await db.select().from(plans).where(eq24(plans.id, transaction.planId)).limit(1);
    if (planData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Plan not found"
      });
    }
    const plan = planData[0];
    const planDataObject = {
      name: plan.name || "Unknown Plan",
      description: plan.description || "No description available",
      icon: plan.icon || "default-icon",
      monthlyPrice: plan.monthlyPrice || 0,
      annualPrice: plan.annualPrice || 0,
      permissions: plan.permissions || {},
      features: plan.features || []
    };
    const startDate = /* @__PURE__ */ new Date();
    const endDate = /* @__PURE__ */ new Date();
    if (transaction.billingCycle === "monthly") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else if (transaction.billingCycle === "yearly") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }
    const newSubscription = await db.insert(subscriptions).values({
      userId: transaction.userId,
      planId: transaction.planId,
      planData: {
        // Change `plan_data` to `planData`
        name: plan.name,
        // Store plan name
        description: plan.description,
        // Store plan description
        monthlyPrice: plan.monthlyPrice,
        // Store monthly price
        annualPrice: plan.annualPrice,
        // Store annual price
        permissions: plan.permissions,
        // Store plan permissions
        features: plan.features
        // Store plan features
      },
      status: "active",
      billingCycle: transaction.billingCycle,
      startDate,
      endDate,
      autoRenew: true,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }).returning();
    res.status(200).json({
      success: true,
      message: "Payment verified & subscription created successfully",
      data: {
        transactionId,
        subscription: newSubscription[0],
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id
      }
    });
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    res.status(500).json({ success: false, message: "Error verifying payment", error });
  }
};
var verifyStripePayment = async (req, res) => {
  try {
    const { payment_intent_id, transactionId } = req.body;
    if (!payment_intent_id || !transactionId) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters"
      });
    }
    const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id, {
      expand: ["payment_method"]
      // optional if you need payment method details
    });
    const charge = paymentIntent.charges?.data?.[0] || null;
    const transactionData = await db.select().from(transactions).where(eq24(transactions.id, transactionId)).limit(1);
    if (!transactionData.length) {
      return res.status(404).json({ success: false, message: "Transaction not found" });
    }
    const transaction = transactionData[0];
    if (paymentIntent.status === "succeeded") {
      await db.update(transactions).set({
        status: "completed",
        providerTransactionId: payment_intent_id,
        providerPaymentId: charge?.id || null,
        paidAt: /* @__PURE__ */ new Date(),
        metadata: {
          paymentMethod: paymentIntent.payment_method || null,
          verified: true
        },
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq24(transactions.id, transactionId));
      const planData = await db.select().from(plans).where(eq24(plans.id, transaction.planId)).limit(1);
      if (!planData.length) {
        return res.status(404).json({ success: false, message: "Plan not found" });
      }
      const plan = planData[0];
      const startDate = /* @__PURE__ */ new Date();
      const endDate = /* @__PURE__ */ new Date();
      if (transaction.billingCycle === "monthly") {
        endDate.setMonth(endDate.getMonth() + 1);
      } else if (transaction.billingCycle === "annual") {
        endDate.setFullYear(endDate.getFullYear() + 1);
      }
      const newSubscription = await db.insert(subscriptions).values({
        userId: transaction.userId,
        planId: transaction.planId,
        planData: {
          name: plan.name || "Unknown Plan",
          description: plan.description || "",
          icon: plan.icon || "",
          monthlyPrice: plan.monthlyPrice || 0,
          annualPrice: plan.annualPrice || 0,
          permissions: plan.permissions || {},
          features: plan.features || []
        },
        status: "active",
        billingCycle: transaction.billingCycle,
        startDate,
        endDate,
        autoRenew: true,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }).returning();
      return res.status(200).json({
        success: true,
        message: "Payment verified & subscription created successfully",
        data: {
          transactionId,
          paymentIntentId: payment_intent_id,
          chargeId: charge?.id || null,
          status: paymentIntent.status,
          subscription: newSubscription[0]
        }
      });
    } else {
      await db.update(transactions).set({
        status: "failed",
        metadata: {
          status: paymentIntent.status,
          error: paymentIntent.last_payment_error?.message || "Unknown error"
        },
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq24(transactions.id, transactionId));
      return res.status(400).json({
        success: false,
        message: "Payment not completed",
        data: {
          status: paymentIntent.status
        }
      });
    }
  } catch (error) {
    console.error("Error verifying Stripe payment:", error);
    res.status(500).json({
      success: false,
      message: "Error verifying payment",
      error: error.message || error
    });
  }
};
var getPaymentStatus = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const transactionData = await db.select().from(transactions).where(eq24(transactions.id, transactionId));
    if (transactionData.length === 0) {
      return res.status(404).json({ success: false, message: "Transaction not found" });
    }
    const transaction = transactionData[0];
    res.status(200).json({
      success: true,
      data: {
        transactionId: transaction.id,
        status: transaction.status,
        amount: transaction.amount,
        currency: transaction.currency,
        paidAt: transaction.paidAt,
        createdAt: transaction.createdAt
      }
    });
  } catch (error) {
    console.error("Error fetching payment status:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching payment status",
      error
    });
  }
};

// server/routes/payment.routes.ts
init_subscriptions_controller();
function registerPaymentsRoutes(app2) {
  app2.get("/api/payment-providers", getAllProviders);
  app2.get("/api/payment-providers/active", getActiveProviders);
  app2.get("/api/payment-providers/:id", getProviderById);
  app2.get("/api/payment-providers/key/:key", getProviderByKey);
  app2.post("/api/payment-providers", createProvider);
  app2.put("/api/payment-providers/:id", updateProvider);
  app2.patch("/api/payment-providers/:id/toggle-status", toggleProviderStatus);
  app2.delete("/api/payment-providers/:id", deleteProvider);
  app2.get("/api/transactions", getAllTransactions);
  app2.get("/api/transactions/stats", getTransactionStats);
  app2.get("/api/transactions/export", exportTransactions);
  app2.get("/api/transactions/:id", getTransactionById);
  app2.get("/api/transactions/user/:userId", getTransactionsByUserId);
  app2.post("/api/transactions", createTransaction);
  app2.patch("/api/transactions/:id/status", updateTransactionStatus);
  app2.post("/api/transactions/:id/complete", completeTransaction);
  app2.post("/api/transactions/:id/refund", refundTransaction);
  app2.post("/api/payment/initiate", initiatePayment);
  app2.post("/api/payment/verify/razorpay", verifyRazorpayPayment);
  app2.post("/api/payment/verify/stripe", verifyStripePayment);
  app2.get("/api/payment/status/:transactionId", getPaymentStatus);
  app2.get("/api/subscriptions", getAllSubscriptions);
  app2.get("/api/subscriptions/:id", getSubscriptionById);
  app2.get("/api/subscriptions/user/:userId", getSubscriptionsByUserId);
  app2.get(
    "/api/subscriptions/user/:userId/active",
    getActiveSubscriptionByUserId
  );
  app2.post("/api/subscriptions", createSubscription);
  app2.put("/api/subscriptions/:id", updateSubscription);
  app2.patch("/api/subscriptions/:id/cancel", cancelSubscription);
  app2.post("/api/subscriptions/:id/renew", renewSubscription);
  app2.patch("/api/subscriptions/:id/auto-renew", toggleAutoRenew);
  app2.post("/api/subscriptions/check-expired", checkExpiredSubscriptions);
}

// server/controllers/messages.logs.controller.ts
init_schema();
init_db();
import { eq as eq25, desc as desc17, and as and14, or as or3, like as like2, gte as gte7 } from "drizzle-orm";
var getMessageLogs = asyncHandler(async (req, res) => {
  const { channelId, status, dateRange, search } = req.query;
  let conditions = [];
  if (channelId) {
    conditions.push(eq25(conversations.channelId, channelId));
  }
  if (dateRange && dateRange !== "all") {
    const now = /* @__PURE__ */ new Date();
    let startDate = /* @__PURE__ */ new Date();
    switch (dateRange) {
      case "1d":
        startDate.setDate(now.getDate() - 1);
        break;
      case "7d":
        startDate.setDate(now.getDate() - 7);
        break;
      case "30d":
        startDate.setDate(now.getDate() - 30);
        break;
    }
    conditions.push(gte7(messages.createdAt, startDate));
  }
  if (status && status !== "all") {
    conditions.push(eq25(messages.status, status));
  }
  if (search) {
    conditions.push(
      or3(
        like2(conversations.contactPhone, `%${search}%`),
        like2(messages.content, `%${search}%`),
        like2(conversations.contactName, `%${search}%`)
      )
    );
  }
  let baseQuery = db.select({
    id: messages.id,
    channelId: conversations.channelId,
    phoneNumber: conversations.contactPhone,
    contactName: conversations.contactName,
    channelName: whatsappChannels.name,
    content: messages.content,
    direction: messages.direction,
    fromUser: messages.fromUser,
    status: messages.status,
    errorCode: messages.errorCode,
    errorMessage: messages.errorMessage,
    errorDetails: messages.errorDetails,
    deliveredAt: messages.deliveredAt,
    readAt: messages.readAt,
    whatsappMessageId: messages.whatsappMessageId,
    createdAt: messages.createdAt,
    updatedAt: messages.updatedAt
  }).from(messages).innerJoin(conversations, eq25(messages.conversationId, conversations.id)).leftJoin(whatsappChannels, eq25(conversations.channelId, whatsappChannels.id));
  if (conditions.length > 0) {
    baseQuery = baseQuery.where(and14(...conditions));
  }
  const messageLogs = await baseQuery.orderBy(desc17(messages.createdAt)).limit(100);
  const formattedLogs = messageLogs.map((log2) => ({
    id: log2.id,
    channelId: log2.channelId || "",
    phoneNumber: log2.phoneNumber || "",
    contactName: log2.contactName || "",
    messageType: log2.direction === "outbound" || log2.direction === "outgoing" ? "sent" : "received",
    content: log2.content || "",
    templateName: log2.content?.startsWith("Template:") ? log2.content.replace("Template: ", "") : void 0,
    status: log2.status || "pending",
    errorCode: log2.errorCode,
    errorMessage: log2.errorMessage,
    errorDetails: log2.errorDetails,
    deliveredAt: log2.deliveredAt,
    readAt: log2.readAt,
    whatsappMessageId: log2.whatsappMessageId,
    createdAt: log2.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: log2.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
  }));
  res.json(formattedLogs);
});
var updateMessageStatus = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const { status } = req.body;
  const [updatedMessage] = await db.update(messages).set({
    status
  }).where(eq25(messages.id, messageId)).returning();
  if (!updatedMessage) {
    throw new AppError(404, "Message not found");
  }
  res.json(updatedMessage);
});

// server/routes/messages.logs.routes.ts
function registerMessageLogsRoutes(app2) {
  app2.get("/api/messages/logs", getMessageLogs);
  app2.put("/api/messages/:messageId/status", updateMessageStatus);
}

// server/controllers/plans.controller.ts
init_db();
init_schema();
import { eq as eq26 } from "drizzle-orm";
var getAllPlans = async (req, res) => {
  try {
    const allPlans = await db.select().from(plans);
    res.status(200).json({ success: true, data: allPlans });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching plans", error });
  }
};
var getPlanById = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await db.select().from(plans).where(eq26(plans.id, id));
    if (plan.length === 0) {
      return res.status(404).json({ success: false, message: "Plan not found" });
    }
    res.status(200).json({ success: true, data: plan[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching plan", error });
  }
};
var createPlan = async (req, res) => {
  try {
    const {
      name,
      description,
      icon,
      popular,
      badge,
      color,
      buttonColor,
      monthlyPrice,
      annualPrice,
      permissions,
      features
    } = req.body;
    const newPlan = await db.insert(plans).values({
      name,
      description,
      icon,
      popular: popular || false,
      badge,
      color,
      buttonColor,
      monthlyPrice,
      annualPrice,
      permissions,
      features
    }).returning();
    res.status(201).json({ success: true, data: newPlan[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating plan", error });
  }
};
var updatePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedPlan = await db.update(plans).set({ ...updateData, updatedAt: /* @__PURE__ */ new Date() }).where(eq26(plans.id, id)).returning();
    if (updatedPlan.length === 0) {
      return res.status(404).json({ success: false, message: "Plan not found" });
    }
    res.status(200).json({ success: true, data: updatedPlan[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating plan", error });
  }
};
var deletePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlan = await db.delete(plans).where(eq26(plans.id, id)).returning();
    if (deletedPlan.length === 0) {
      return res.status(404).json({ success: false, message: "Plan not found" });
    }
    res.status(200).json({ success: true, message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting plan", error });
  }
};

// server/routes/plans.routes.ts
function registerPlansRoutes(app2) {
  app2.get("/api/admin/plans", getAllPlans);
  app2.get("/api/admin/plans/:id", requireAuth, getPlanById);
  app2.post("/api/admin/plans", requireAuth, createPlan);
  app2.put("/api/admin/plans/:id", requireAuth, updatePlan);
  app2.delete("/api/admin/plans/:id", requireAuth, deletePlan);
}

// server/controllers/user.controller.ts
init_db();
init_schema();
init_schema();
import { eq as eq29, or as or4, like as like3, sql as sql16, and as and15, desc as desc19 } from "drizzle-orm";
import bcrypt from "bcryptjs";

// server/services/email.service.ts
import nodemailer from "nodemailer";

// server/controllers/smtp.controller.ts
init_db();
init_schema();
import { eq as eq27 } from "drizzle-orm";
var upsertSMTPConfig = async (req, res) => {
  try {
    const {
      host,
      port,
      secure,
      user,
      password,
      fromName,
      fromEmail,
      logo
    } = req.body;
    const existingConfig = await db.select().from(smtpConfig).limit(1);
    let result;
    if (existingConfig.length > 0) {
      result = await db.update(smtpConfig).set({
        host,
        port,
        secure,
        user,
        password,
        fromName,
        fromEmail,
        logo,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq27(smtpConfig.id, existingConfig[0].id)).returning();
    } else {
      result = await db.insert(smtpConfig).values({
        host,
        port,
        secure,
        user,
        password,
        fromName,
        fromEmail,
        logo
      }).returning();
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("SMTP upsert error:", error);
    res.status(500).json({ success: false, message: "Failed to save SMTP config", error });
  }
};
var getSMTPConfigHandler = async (req, res) => {
  try {
    const config2 = await db.select().from(smtpConfig).limit(1);
    if (!config2 || config2.length === 0) {
      return res.status(404).json({
        success: false,
        message: "SMTP configuration not found"
      });
    }
    res.status(200).json({
      success: true,
      data: config2[0]
    });
  } catch (error) {
    console.error("SMTP fetch error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch SMTP configuration",
      error
    });
  }
};
var getSMTPConfig = async () => {
  const configs2 = await db.select().from(smtpConfig).limit(1);
  if (!configs2 || configs2.length === 0) {
    console.warn("\u26A0\uFE0F No SMTP configuration found");
    return null;
  }
  return configs2[0];
};
var sendMailRoute = async (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }
    const result = await sendContactEmail({
      name,
      email,
      company,
      subject,
      message
    });
    console.log("Contact form email sent:", result);
    return res.json({
      success: true,
      message: "Message sent successfully",
      messageId: result.messageId
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to send message"
    });
  }
};

// server/services/panel.config.ts
init_schema();
init_db();
import { eq as eq28, desc as desc18 } from "drizzle-orm";
var createPanelConfig = async (data) => {
  const result = await db.insert(panelConfig).values({
    ...data,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  }).returning();
  return result[0];
};
var getPanelConfigs = async () => {
  return db.select().from(panelConfig).orderBy(desc18(panelConfig.createdAt));
};
var getPanelConfigById = async (id) => {
  const result = await db.select().from(panelConfig).where(eq28(panelConfig.id, id));
  return result[0] || null;
};
var updatePanelConfig = async (id, data) => {
  const updateData = {
    ...data,
    updatedAt: /* @__PURE__ */ new Date()
  };
  Object.keys(updateData).forEach((key) => {
    if (updateData[key] === void 0) {
      delete updateData[key];
    }
  });
  const result = await db.update(panelConfig).set(updateData).where(eq28(panelConfig.id, id)).returning();
  return result[0] || null;
};
var deletePanelConfig = async (id) => {
  await db.delete(panelConfig).where(eq28(panelConfig.id, id));
  return true;
};
var getFirstPanelConfig = async () => {
  const result = await db.select().from(panelConfig).orderBy(desc18(panelConfig.createdAt)).limit(1);
  return result[0] || null;
};
var updateFirstPanelConfig = async (data) => {
  const existingConfig = await getFirstPanelConfig();
  if (existingConfig) {
    return updatePanelConfig(existingConfig.id, data);
  } else {
    const newConfigData = {
      name: data.name || "Your App Name",
      tagline: data.tagline || "",
      description: data.description || "",
      companyName: data.companyName || "",
      companyWebsite: data.companyWebsite || "",
      supportEmail: data.supportEmail || "",
      defaultLanguage: data.defaultLanguage || "en",
      supportedLanguages: data.supportedLanguages || ["en"],
      logo: data.logo,
      favicon: data.favicon
    };
    return createPanelConfig(newConfigData);
  }
};

// server/services/email.service.ts
var config = await getSMTPConfig();
var transporter;
var getData = await getFirstPanelConfig();
if (config) {
  transporter = nodemailer.createTransport({
    host: config.host,
    port: parseInt(config.port, 10),
    secure: config.secure === "true",
    auth: {
      user: config.user,
      pass: config.password
    }
  });
} else {
  console.warn("Using fallback SMTP settings (emails will not be sent)");
  transporter = nodemailer.createTransport({
    jsonTransport: true
    // just for development, logs emails instead of sending
  });
}
var [configs] = await getPanelConfigs();
function generateOTPEmailHTML(companyName, logo, otpCode, name) {
  const displayName = configs?.name || "Your Company";
  const headerContent = logo ? `<img src="${logo}" alt="${displayName} Logo" style="max-height: 60px; margin-bottom: 10px;">` : `<div class="logo">${displayName}</div>`;
  const messageText = `Please use the verification code below to verify your identity.`;
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .container {
          background: #ffffff;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 10px;
        }
        .otp-box {
          background: #f3f4f6;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          margin: 30px 0;
        }
        .otp-code {
          font-size: 36px;
          font-weight: bold;
          letter-spacing: 8px;
          color: #1f2937;
          font-family: 'Courier New', monospace;
        }
        .message {
          font-size: 16px;
          color: #4b5563;
          margin: 20px 0;
        }
        .warning {
          background: #fef3c7;
          border-left: 4px solid #f59e0b;
          padding: 12px;
          margin: 20px 0;
          font-size: 14px;
          color: #92400e;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          font-size: 12px;
          color: #9ca3af;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          ${headerContent}
          <p style="color: #6b7280; margin: 0;">Our Platform</p>
        </div>
        
        <div class="message">
          ${name ? `<p>Hello <strong>${name}</strong>,</p>` : "<p>Hello,</p>"}
          <p>${messageText}</p>
        </div>
        
        <div class="otp-box">
          <div style="font-size: 14px; color: #6b7280; margin-bottom: 10px;">Your Verification Code</div>
          <div class="otp-code">${otpCode}</div>
          <div style="font-size: 12px; color: #9ca3af; margin-top: 10px;">Valid for 5 minutes</div>
        </div>
        
        <div class="warning">
          <strong>\u26A0\uFE0F Security Notice:</strong> Never share this code with anyone. ${displayName} will never ask for your verification code.
        </div>
        
        <div class="message">
          <p>If you didn't request this code, please ignore this email or contact our support team.</p>
        </div>
        
        <div class="footer">
          <p>This is an automated message from ${displayName}.</p>
          <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${displayName}. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
function generateOTPEmailText(companyName, otpCode, name) {
  return `
Hello${name ? " " + name : ""},

Thank you for signing up for ${companyName}!

Your verification code is: ${otpCode}

This code will expire in 5 minutes.

If you didn't request this code, please ignore this email.

---
${companyName}
Our Platform
  `.trim();
}
function generateForgotPasswordEmailHTML(companyName, logo, otpCode, name) {
  const displayName = configs?.name || "Your Company";
  const headerContent = logo ? `<img src="${logo}" alt="${displayName} Logo" style="max-height: 60px; margin-bottom: 10px;">` : `<div class="logo">${displayName}</div>`;
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .container { background: #ffffff; border-radius: 8px; padding: 40px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
        .header { text-align: center; margin-bottom: 30px; }
        .logo { font-size: 28px; font-weight: bold; color: #1f2937; margin-bottom: 10px; }
        .otp-box { background: #f3f4f6; border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0; }
        .otp-code { font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #1f2937; font-family: 'Courier New', monospace; }
        .message { font-size: 16px; color: #4b5563; margin: 20px 0; }
        .warning { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; margin: 20px 0; font-size: 14px; color: #92400e; }
        .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          ${headerContent}
          <p style="color: #6b7280; margin: 0;">Our Platform</p>
        </div>

        <div class="message">
          ${name ? `<p>Hello <strong>${name}</strong>,</p>` : "<p>Hello,</p>"}
          <p>You requested to reset your password. Use the verification code below to reset your password.</p>
        </div>

        <div class="otp-box">
          <div style="font-size: 14px; color: #6b7280; margin-bottom: 10px;">Your Verification Code</div>
          <div class="otp-code">${otpCode}</div>
          <div style="font-size: 12px; color: #9ca3af; margin-top: 10px;">Valid for 5 minutes</div>
        </div>

        <div class="warning">
          <strong>\u26A0\uFE0F Security Notice:</strong> Never share this code with anyone. ${displayName} will never ask for your verification code.
        </div>

        <div class="message">
          <p>If you didn't request this password reset, please ignore this email or contact our support team.</p>
        </div>

        <div class="footer">
          <p>This is an automated message from ${displayName}.</p>
          <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${displayName}. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
function generateForgotPasswordEmailText(companyName, otpCode, name) {
  return `
Hello${name ? " " + name : ""},

You requested to reset your password for ${companyName}.

Your verification code is: ${otpCode}

This code will expire in 5 minutes.

If you didn't request a password reset, please ignore this email.

---
${companyName}
Our Platform
  `.trim();
}
async function sendOTPEmail(email, otpCode, name) {
  const companyName = configs?.name || "Your Company";
  const fromName = config?.fromName || companyName;
  const fromEmail = config?.fromEmail;
  const mailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: email,
    subject: `Your ${companyName} Verification Code`,
    html: generateForgotPasswordEmailHTML(companyName, "whatsway", otpCode, name),
    text: generateForgotPasswordEmailText(companyName, otpCode, name)
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("\u2709\uFE0F [Email] OTP sent to:", email);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("\u274C [Email] Failed to send OTP:", error);
    throw new Error("Failed to send verification email");
  }
}
async function sendContactEmail(data) {
  const { name, email, company, subject, message } = data;
  const companyName = configs?.name || "Your Company";
  const fromName = config?.fromName || companyName;
  const fromEmail = config?.fromEmail;
  const html = `
  <div style="background:#f4f5f7; padding:40px; font-family:Arial, sans-serif;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <div style="background:#4f46e5; padding:24px; color:#ffffff; text-align:center;">
        <h2 style="margin:0; font-size:24px; font-weight:600;">New Contact Form Message</h2>
        <p style="margin:6px 0 0; opacity:0.85;">${companyName}</p>
      </div>

      <!-- Body -->
      <div style="padding:30px;">
        
        <p style="font-size:16px; color:#111827;">You have received a new message from your website contact form.</p>

        <table style="width:100%; margin-top:20px;">
          <tr>
            <td style="padding:10px 0; font-size:16px; font-weight:600; width:150px; color:#374151;">Name:</td>
            <td style="padding:10px 0; font-size:16px; color:#111827;">${name}</td>
          </tr>

          <tr>
            <td style="padding:10px 0; font-size:16px; font-weight:600; color:#374151;">Email:</td>
            <td style="padding:10px 0; font-size:16px; color:#111827;">${email}</td>
          </tr>

          <tr>
            <td style="padding:10px 0; font-size:16px; font-weight:600; color:#374151;">Company:</td>
            <td style="padding:10px 0; font-size:16px; color:#111827;">${company || "-"}</td>
          </tr>

          <tr>
            <td style="padding:10px 0; font-size:16px; font-weight:600; color:#374151;">Subject:</td>
            <td style="padding:10px 0; font-size:16px; color:#111827;">${subject}</td>
          </tr>
        </table>

        <div style="margin-top:30px;">
          <p style="font-size:16px; font-weight:600; color:#374151; margin-bottom:8px;">Message:</p>
          <div style="background:#f9fafb; padding:20px; border-radius:10px; font-size:15px; line-height:1.6; color:#111827;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div style="background:#f3f4f6; padding:18px; text-align:center; font-size:13px; color:#6b7280;">
        This email was sent from the contact form on <strong>${companyName}</strong>.
      </div>

    </div>
  </div>
`;
  const mailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: fromEmail,
    // send to admin email
    subject: `Contact Form: ${subject}`,
    html,
    text: `${name} (${email}) says: ${message}`
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("\u2709\uFE0F [Contact] Message sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("\u274C [Contact] Failed:", error);
    throw new Error("Failed to send contact message");
  }
}
async function sendOTPEmailVerify(email, otpCode, name) {
  const companyName = configs?.name || "Your Company";
  const fromName = config?.fromName || companyName;
  const fromEmail = config?.fromEmail;
  const mailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: email,
    subject: `Your ${companyName} Verification Code`,
    html: generateOTPEmailHTML(companyName, "whatsway", otpCode, name),
    text: generateOTPEmailText(companyName, otpCode, name)
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("\u2709\uFE0F [Email] OTP sent to:", email);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("\u274C [Email] Failed to send OTP:", error);
    throw new Error("Failed to send verification email");
  }
}

// server/controllers/user.controller.ts
var defaultPermissions = [
  // Contacts
  "contacts:view",
  "contacts:create",
  "contacts:edit",
  "contacts:delete",
  "contacts:export",
  // Campaigns
  "campaigns:view",
  "campaigns:create",
  "campaigns:edit",
  "campaigns:delete",
  // Templates
  "templates:view",
  "templates:create",
  "templates:edit",
  "templates:delete",
  // Analytics
  "analytics:view",
  // Team
  "team:view",
  "team:create",
  "team:edit",
  "team:delete",
  // Settings
  "settings:view",
  // Inbox
  "inbox:view",
  "inbox:send",
  "inbox:assign",
  // Automations
  "automations:view",
  "automations:create",
  "automations:edit",
  "automations:delete"
];
var getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const role = req.query.role || "admin";
    const offset = (page - 1) * limit;
    const conditions = [
      eq29(users.role, role),
      search ? or4(
        like3(users.username, sql16`${"%" + search + "%"}`),
        like3(users.email, sql16`${"%" + search + "%"}`)
      ) : void 0
    ].filter(Boolean);
    const allUsers = await db.select().from(users).where(and15(...conditions)).limit(limit).offset(offset);
    const totalCountResult = await db.select({ total: sql16`COUNT(*)` }).from(users).where(and15(...conditions));
    const total = totalCountResult[0]?.total ?? 0;
    res.status(200).json({
      success: true,
      data: allUsers,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Error fetching users", error });
  }
};
var getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.select().from(users).where(eq29(users.id, id));
    if (!user.length) return res.status(404).json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, data: user[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching user", error });
  }
};
var createUser = async (req, res) => {
  try {
    const { username, password, email, firstName, lastName, role, avatar } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({
        success: false,
        message: "Username, password, and email are required."
      });
    }
    const existingUser = await db.select().from(users).where(eq29(users.username, username));
    if (existingUser.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Username already exists."
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.insert(users).values({
      username,
      password: hashedPassword,
      email,
      firstName,
      lastName,
      role: role || "admin",
      avatar,
      permissions: defaultPermissions,
      isEmailVerified: false
    }).returning();
    const user = newUser[0];
    const otpCode = Math.floor(1e5 + Math.random() * 9e5).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1e3);
    console.log(`Generated OTP for ${email}: ${otpCode} (expires at ${expiresAt.toISOString()})`);
    await db.insert(otpVerifications).values({
      userId: user.id,
      otpCode,
      expiresAt,
      isUsed: false
    });
    await sendOTPEmailVerify(email, otpCode, firstName);
    return res.status(201).json({
      success: true,
      message: "User created. Verification OTP sent to email.",
      data: { id: user.id, email }
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      success: false,
      message: "Error creating user",
      error
    });
  }
};
var verifyEmailOTP = async (req, res) => {
  try {
    const { email, otpCode } = req.body;
    if (!email || !otpCode) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required."
      });
    }
    const user = await db.select().from(users).where(eq29(users.email, email));
    if (!user.length) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }
    const userData = user[0];
    const otpRecord = await db.select().from(otpVerifications).where(eq29(otpVerifications.userId, userData.id)).orderBy(desc19(otpVerifications.createdAt)).limit(1);
    if (!otpRecord.length) {
      return res.status(400).json({
        success: false,
        message: "No OTP found."
      });
    }
    const otp = otpRecord[0];
    if (otp.isUsed) {
      return res.status(400).json({ success: false, message: "OTP already used." });
    }
    if (otp.otpCode !== otpCode) {
      return res.status(400).json({ success: false, message: "Invalid OTP." });
    }
    if (/* @__PURE__ */ new Date() > otp.expiresAt) {
      return res.status(400).json({ success: false, message: "OTP expired." });
    }
    await db.update(otpVerifications).set({ isUsed: true }).where(eq29(otpVerifications.id, otp.id));
    await db.update(users).set({ isEmailVerified: true }).where(eq29(users.id, userData.id));
    return res.json({
      success: true,
      message: "Email verified successfully."
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({
      success: false,
      message: "Server error.",
      error
    });
  }
};
var updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updated = await db.update(users).set(updates).where(eq29(users.id, id)).returning();
    res.status(200).json({ success: true, data: updated[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating user", error });
  }
};
var updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const allowed = ["active", "inactive"];
    if (!allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Allowed: active, inactive"
      });
    }
    const updated = await db.update(users).set({ status }).where(eq29(users.id, id)).returning();
    if (!updated.length) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: updated[0]
    });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({
      success: false,
      message: "Error updating status",
      error
    });
  }
};
var deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(users).where(eq29(users.id, id));
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting user", error });
  }
};

// server/routes/user.route.ts
function userRoutes(app2) {
  app2.get("/api/admin/users", requireAuth, getAllUsers);
  app2.get("/api/admin/users/:id", requireAuth, getUserById);
  app2.post("/api/users/create", createUser);
  app2.post("/api/users/verifyEmail", verifyEmailOTP);
  app2.put("/api/users/:id", requireAuth, updateUser);
  app2.put("/api/user/status/:id", requireAuth, updateUserStatus);
  app2.delete("/api/admin/users/:id", requireAuth, deleteUser);
}

// server/routes/team.routes.ts
init_db();
init_schema();
import { Router } from "express";
import { eq as eq30, desc as desc20, and as and16, sql as sql17, ne as ne2, or as or5, ilike as ilike2 } from "drizzle-orm";
import { z as z5 } from "zod";
import bcrypt2 from "bcryptjs";

// server/middlewares/validateRequest.middleware.ts
import { ZodError } from "zod";
function validateRequest2(schema) {
  return async (req, res, next) => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Validation error",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message
          }))
        });
      }
      next(error);
    }
  };
}

// server/routes/team.routes.ts
init_schema();
var router = Router();
var PERMISSION_KEY_MAP = {
  canManageContacts: [
    "contacts:view",
    "contacts:create",
    "contacts:edit",
    "contacts:import",
    "contacts:export"
  ],
  canManageCampaigns: [
    "campaigns:view",
    "campaigns:create",
    "campaigns:edit",
    "campaigns:send",
    "campaigns:schedule"
  ],
  canManageTemplates: [
    "templates:view",
    "templates:create",
    "templates:edit",
    "templates:sync"
  ],
  canManageTeam: ["team:view", "team:create", "team:edit", "team:delete"],
  canViewAnalytics: ["analytics:view", "analytics:export"],
  canExportData: ["dashboard:export", "contacts:export", "analytics:export"]
};
var createUserSchema = z5.object({
  username: z5.string().min(3, "Username must be at least 3 characters"),
  email: z5.string().email("Invalid email address"),
  password: z5.string().min(6, "Password must be at least 6 characters"),
  firstName: z5.string().min(1, "First name is required"),
  lastName: z5.string().optional(),
  role: z5.enum(["team"]),
  permissions: z5.union([z5.array(z5.string()), z5.record(z5.boolean())]).optional().transform((val) => {
    if (Array.isArray(val)) {
      return val;
    }
    if (val && typeof val === "object") {
      return Object.keys(val).reduce((acc, key) => {
        if (val[key] && PERMISSION_KEY_MAP[key]) {
          acc.push(...PERMISSION_KEY_MAP[key]);
        }
        return acc;
      }, []);
    }
    return [];
  }),
  avatar: z5.string().optional()
});
var updateUserSchema = createUserSchema.partial().omit({ password: true });
var updatePasswordSchema = z5.object({
  currentPassword: z5.string(),
  newPassword: z5.string().min(6, "Password must be at least 6 characters")
});
var updateStatusSchema2 = z5.object({
  status: z5.enum(["active", "inactive"])
});
router.get(
  "/members",
  requireAuth,
  requirePermission(PERMISSIONS.TEAM_VIEW),
  async (req, res) => {
    try {
      const loggedInUser = req.user;
      if (!loggedInUser?.id) {
        return res.status(401).json({ error: "Unauthorized: User not found" });
      }
      const ownerUserId = loggedInUser.role === "team" ? loggedInUser.createdBy : loggedInUser.id;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      const search = req.query.search || "";
      const searchFilter = search ? or5(
        ilike2(users.firstName, `%${search}%`),
        ilike2(users.lastName, `%${search}%`),
        ilike2(users.username, `%${search}%`),
        ilike2(users.email, `%${search}%`)
      ) : void 0;
      const members = await db.select({
        id: users.id,
        username: users.username,
        email: users.email,
        firstName: users.firstName,
        lastName: users.lastName,
        role: users.role,
        status: users.status,
        permissions: users.permissions,
        avatar: users.avatar,
        lastLogin: users.lastLogin,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
        createdBy: users.createdBy
      }).from(users).where(
        and16(eq30(users.createdBy, ownerUserId), searchFilter ?? void 0)
      ).orderBy(desc20(users.createdAt)).limit(limit).offset(offset);
      const countResult = await db.select({ count: sql17`COUNT(*)` }).from(users).where(
        and16(eq30(users.createdBy, ownerUserId), searchFilter ?? void 0)
      );
      const total = countResult[0]?.count ?? 0;
      res.json({
        data: members,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      });
    } catch (error) {
      console.error("Error fetching team members:", error);
      res.status(500).json({ error: "Failed to fetch team members" });
    }
  }
);
router.post("/membersByUserId", async (req, res) => {
  try {
    const { userId, page = 1, limit = 10 } = req.body;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: User not found" });
    }
    const offset = (page - 1) * limit;
    const totalCountResult = await db.select({ count: sql17`count(*)` }).from(users).where(eq30(users.createdBy, userId)).execute();
    const total = totalCountResult[0]?.count || 0;
    const totalPages = Math.ceil(total / limit);
    const members = await db.select({
      id: users.id,
      username: users.username,
      email: users.email,
      firstName: users.firstName,
      lastName: users.lastName,
      role: users.role,
      status: users.status,
      permissions: users.permissions,
      avatar: users.avatar,
      lastLogin: users.lastLogin,
      createdAt: users.createdAt,
      updatedAt: users.updatedAt,
      createdBy: users.createdBy
    }).from(users).where(eq30(users.createdBy, userId)).orderBy(desc20(users.createdAt)).limit(limit).offset(offset);
    res.json({
      data: members,
      pagination: {
        page,
        limit,
        total,
        totalPages
      }
    });
  } catch (error) {
    console.error("Error fetching team members:", error);
    res.status(500).json({ error: "Failed to fetch team members" });
  }
});
router.get(
  "/members/:id",
  requireAuth,
  requirePermission(PERMISSIONS.TEAM_VIEW),
  async (req, res) => {
    try {
      const [member] = await db.select().from(users).where(eq30(users.id, req.params.id));
      if (!member) {
        return res.status(404).json({ error: "Team member not found" });
      }
      const { password, ...memberData } = member;
      res.json(memberData);
    } catch (error) {
      console.error("Error fetching team member:", error);
      res.status(500).json({ error: "Failed to fetch team member" });
    }
  }
);
router.post(
  "/members",
  requireAuth,
  requirePermission(PERMISSIONS.TEAM_CREATE),
  validateRequest2(createUserSchema),
  async (req, res) => {
    try {
      const {
        username,
        email,
        password,
        firstName,
        lastName,
        role,
        permissions,
        avatar
      } = req.body;
      const [existingUser] = await db.select().from(users).where(sql17`${users.email} = ${email} OR ${users.username} = ${username}`);
      if (existingUser) {
        return res.status(400).json({ error: "Username or email already exists" });
      }
      const hashedPassword = await bcrypt2.hash(password, 10);
      console.log({
        username,
        password: hashedPassword,
        email,
        firstName,
        lastName,
        role: "team",
        permissions,
        avatar: avatar || null,
        status: "active",
        created_by: req.user.id
      });
      const [newUser] = await db.insert(users).values({
        username,
        password: hashedPassword,
        email,
        firstName,
        lastName,
        role: "team",
        permissions,
        // already an array from schema
        avatar: avatar || null,
        status: "active",
        isEmailVerified: true,
        createdBy: req.user.id
      }).returning();
      await db.insert(userActivityLogs).values({
        userId: newUser.id,
        action: "user_created",
        entityType: "user",
        entityId: newUser.id,
        details: { createdBy: "admin" }
      });
      const { password: _, ...userData } = newUser;
      res.json(userData);
    } catch (error) {
      console.error("Error creating team member:", error);
      res.status(500).json({ error: error || "Failed to create team member" });
    }
  }
);
router.put(
  "/members/:id",
  requireAuth,
  validateRequest2(updateUserSchema),
  async (req, res) => {
    console.log("Update member called");
    try {
      const { id } = req.params;
      const updates = req.body;
      console.log("Updates : ===> ", updates);
      const [member] = await db.update(users).set({
        ...updates,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq30(users.id, id)).returning();
      if (!member) {
        return res.status(404).json({ error: "Team member not found" });
      }
      await db.insert(userActivityLogs).values({
        userId: id,
        action: "user_updated",
        entityType: "user",
        entityId: id,
        details: { updates }
      });
      const { password, ...memberData } = member;
      res.json(memberData);
    } catch (error) {
      console.error("Error updating team member:", error);
      res.status(500).json({ error: "Failed to update team member" });
    }
  }
);
router.patch(
  "/members/:id/status",
  requireAuth,
  requirePermission(PERMISSIONS.TEAM_EDIT),
  validateRequest2(updateStatusSchema2),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const [member] = await db.update(users).set({
        status,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq30(users.id, id)).returning();
      if (!member) {
        return res.status(404).json({ error: "Team member not found" });
      }
      await db.insert(userActivityLogs).values({
        userId: id,
        action: "status_changed",
        entityType: "user",
        entityId: id,
        details: { newStatus: status }
      });
      const { password, ...memberData } = member;
      res.json(memberData);
    } catch (error) {
      console.error("Error updating team member status:", error);
      res.status(500).json({ error: "Failed to update status" });
    }
  }
);
router.patch(
  "/members/:id/password",
  requireAuth,
  validateRequest2(updatePasswordSchema),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { currentPassword, newPassword } = req.body;
      const [user] = await db.select().from(users).where(eq30(users.id, id));
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const isValidPassword = await bcrypt2.compare(
        currentPassword,
        user.password
      );
      if (!isValidPassword) {
        return res.status(400).json({ error: "Current password is incorrect" });
      }
      const hashedPassword = await bcrypt2.hash(newPassword, 10);
      await db.update(users).set({
        password: hashedPassword,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq30(users.id, id));
      await db.insert(userActivityLogs).values({
        userId: id,
        action: "password_changed",
        entityType: "user",
        entityId: id,
        details: {}
      });
      res.json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error updating password:", error);
      res.status(500).json({ error: "Failed to update password" });
    }
  }
);
router.delete("/members/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const [adminCount] = await db.select({ count: sql17`count(*)` }).from(users).where(and16(eq30(users.role, "admin"), ne2(users.id, id)));
    const [userToDelete] = await db.select({ role: users.role }).from(users).where(eq30(users.id, id));
    if (userToDelete?.role === "admin" && adminCount.count === 0) {
      return res.status(400).json({
        error: "Cannot delete the last admin user"
      });
    }
    console.log("userToDelete", userToDelete);
    const [hasAssignments] = await db.select({ count: sql17`count(*)` }).from(conversationAssignments).where(
      and16(
        eq30(conversationAssignments.userId, id),
        eq30(conversationAssignments.status, "active")
      )
    );
    if (hasAssignments && hasAssignments.count > 0) {
      return res.status(400).json({
        error: "Cannot delete user with active conversation assignments"
      });
    }
    const [deletedUser] = await db.delete(users).where(eq30(users.id, id)).returning();
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});
router.get("/activity-logs", async (req, res) => {
  try {
    const loggedInUserId = req?.session?.user?.id;
    const role = req?.session?.user?.role;
    if (!loggedInUserId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    let query = db.select({
      id: userActivityLogs.id,
      userId: userActivityLogs.userId,
      userName: users.username,
      userEmail: users.email,
      action: userActivityLogs.action,
      entityType: userActivityLogs.entityType,
      entityId: userActivityLogs.entityId,
      details: userActivityLogs.details,
      ipAddress: userActivityLogs.ipAddress,
      userAgent: userActivityLogs.userAgent,
      createdAt: userActivityLogs.createdAt
    }).from(userActivityLogs).leftJoin(users, eq30(userActivityLogs.userId, users.id)).orderBy(desc20(userActivityLogs.createdAt)).limit(100);
    if (role !== "superadmin") {
      query = query.where(eq30(users.createdBy, loggedInUserId));
    }
    const logs = await query;
    res.json(logs);
  } catch (error) {
    console.error("Error fetching activity logs:", error);
    res.status(500).json({ error: "Failed to fetch activity logs" });
  }
});
router.patch(
  "/members/:id/permissions",
  requireAuth,
  requirePermission(PERMISSIONS.TEAM_PERMISSIONS),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { permissions } = req.body;
      const [member] = await db.update(users).set({
        permissions,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq30(users.id, id)).returning();
      if (!member) {
        return res.status(404).json({ error: "User not found" });
      }
      await db.insert(userActivityLogs).values({
        userId: id,
        action: "permissions_updated",
        entityType: "user",
        entityId: id,
        details: { permissions }
      });
      const { password, ...memberData } = member;
      res.json(memberData);
    } catch (error) {
      console.error("Error updating permissions:", error);
      res.status(500).json({ error: "Failed to update permissions" });
    }
  }
);
var team_routes_default = router;

// server/routes/auth.routes.ts
init_db();
init_schema();
import { Router as Router2 } from "express";
import { eq as eq31, and as and17, sql as sql18 } from "drizzle-orm";
import { z as z6 } from "zod";
import bcrypt3 from "bcryptjs";

// server/utils/role-permissions.ts
init_schema();
function resolveUserPermissions(role, dbPermissions) {
  if (role === "admin") {
    const all = {};
    Object.values(PERMISSIONS).forEach((perm) => {
      all[perm] = true;
    });
    return all;
  }
  if (!dbPermissions || dbPermissions.length === 0) {
    return {};
  }
  return dbPermissions.reduce((acc, perm) => {
    acc[perm] = true;
    return acc;
  }, {});
}

// server/config/country.json
var country_default = [
  {
    country: "Afghanistan",
    country_code: "AF",
    currency: "Afghan Afghani",
    currency_code: "AFN",
    symbol: "\u060B"
  },
  {
    country: "Albania",
    country_code: "AL",
    currency: "Albanian Lek",
    currency_code: "ALL",
    symbol: "L"
  },
  {
    country: "Algeria",
    country_code: "DZ",
    currency: "Algerian Dinar",
    currency_code: "DZD",
    symbol: "\u062F\u062C"
  },
  {
    country: "Andorra",
    country_code: "AD",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "Angola",
    country_code: "AO",
    currency: "Angolan Kwanza",
    currency_code: "AOA",
    symbol: "Kz"
  },
  {
    country: "Argentina",
    country_code: "AR",
    currency: "Argentine Peso",
    currency_code: "ARS",
    symbol: "$"
  },
  {
    country: "Armenia",
    country_code: "AM",
    currency: "Armenian Dram",
    currency_code: "AMD",
    symbol: "\u058F"
  },
  {
    country: "Australia",
    country_code: "AU",
    currency: "Australian Dollar",
    currency_code: "AUD",
    symbol: "$"
  },
  {
    country: "Austria",
    country_code: "AT",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "Azerbaijan",
    country_code: "AZ",
    currency: "Azerbaijani Manat",
    currency_code: "AZN",
    symbol: "\u20BC"
  },
  {
    country: "Bangladesh",
    country_code: "BD",
    currency: "Bangladeshi Taka",
    currency_code: "BDT",
    symbol: "\u09F3"
  },
  {
    country: "Bahrain",
    country_code: "BH",
    currency: "Bahraini Dinar",
    currency_code: "BHD",
    symbol: ".\u062F.\u0628"
  },
  {
    country: "Belgium",
    country_code: "BE",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "Brazil",
    country_code: "BR",
    currency: "Brazilian Real",
    currency_code: "BRL",
    symbol: "R$"
  },
  {
    country: "Canada",
    country_code: "CA",
    currency: "Canadian Dollar",
    currency_code: "CAD",
    symbol: "$"
  },
  {
    country: "Chile",
    country_code: "CL",
    currency: "Chilean Peso",
    currency_code: "CLP",
    symbol: "$"
  },
  {
    country: "China",
    country_code: "CN",
    currency: "Chinese Yuan",
    currency_code: "CNY",
    symbol: "\xA5"
  },
  {
    country: "Colombia",
    country_code: "CO",
    currency: "Colombian Peso",
    currency_code: "COP",
    symbol: "$"
  },
  {
    country: "Denmark",
    country_code: "DK",
    currency: "Danish Krone",
    currency_code: "DKK",
    symbol: "kr"
  },
  {
    country: "Egypt",
    country_code: "EG",
    currency: "Egyptian Pound",
    currency_code: "EGP",
    symbol: "\xA3"
  },
  {
    country: "Finland",
    country_code: "FI",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "France",
    country_code: "FR",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "Germany",
    country_code: "DE",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "Ghana",
    country_code: "GH",
    currency: "Ghanaian Cedi",
    currency_code: "GHS",
    symbol: "\u20B5"
  },
  {
    country: "Hong Kong",
    country_code: "HK",
    currency: "Hong Kong Dollar",
    currency_code: "HKD",
    symbol: "$"
  },
  {
    country: "India",
    country_code: "IN",
    currency: "Indian Rupee",
    currency_code: "INR",
    symbol: "\u20B9"
  },
  {
    country: "Indonesia",
    country_code: "ID",
    currency: "Indonesian Rupiah",
    currency_code: "IDR",
    symbol: "Rp"
  },
  {
    country: "Ireland",
    country_code: "IE",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "Italy",
    country_code: "IT",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "Japan",
    country_code: "JP",
    currency: "Japanese Yen",
    currency_code: "JPY",
    symbol: "\xA5"
  },
  {
    country: "Kenya",
    country_code: "KE",
    currency: "Kenyan Shilling",
    currency_code: "KES",
    symbol: "KSh"
  },
  {
    country: "Malaysia",
    country_code: "MY",
    currency: "Malaysian Ringgit",
    currency_code: "MYR",
    symbol: "RM"
  },
  {
    country: "Mexico",
    country_code: "MX",
    currency: "Mexican Peso",
    currency_code: "MXN",
    symbol: "$"
  },
  {
    country: "Nepal",
    country_code: "NP",
    currency: "Nepalese Rupee",
    currency_code: "NPR",
    symbol: "\u20A8"
  },
  {
    country: "Netherlands",
    country_code: "NL",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "New Zealand",
    country_code: "NZ",
    currency: "New Zealand Dollar",
    currency_code: "NZD",
    symbol: "$"
  },
  {
    country: "Nigeria",
    country_code: "NG",
    currency: "Nigerian Naira",
    currency_code: "NGN",
    symbol: "\u20A6"
  },
  {
    country: "Norway",
    country_code: "NO",
    currency: "Norwegian Krone",
    currency_code: "NOK",
    symbol: "kr"
  },
  {
    country: "Pakistan",
    country_code: "PK",
    currency: "Pakistani Rupee",
    currency_code: "PKR",
    symbol: "\u20A8"
  },
  {
    country: "Philippines",
    country_code: "PH",
    currency: "Philippine Peso",
    currency_code: "PHP",
    symbol: "\u20B1"
  },
  {
    country: "Poland",
    country_code: "PL",
    currency: "Polish Z\u0142oty",
    currency_code: "PLN",
    symbol: "z\u0142"
  },
  {
    country: "Qatar",
    country_code: "QA",
    currency: "Qatari Riyal",
    currency_code: "QAR",
    symbol: "\u0631.\u0642"
  },
  {
    country: "Romania",
    country_code: "RO",
    currency: "Romanian Leu",
    currency_code: "RON",
    symbol: "lei"
  },
  {
    country: "Russia",
    country_code: "RU",
    currency: "Russian Ruble",
    currency_code: "RUB",
    symbol: "\u20BD"
  },
  {
    country: "Saudi Arabia",
    country_code: "SA",
    currency: "Saudi Riyal",
    currency_code: "SAR",
    symbol: "\uFDFC"
  },
  {
    country: "Singapore",
    country_code: "SG",
    currency: "Singapore Dollar",
    currency_code: "SGD",
    symbol: "$"
  },
  {
    country: "South Africa",
    country_code: "ZA",
    currency: "South African Rand",
    currency_code: "ZAR",
    symbol: "R"
  },
  {
    country: "South Korea",
    country_code: "KR",
    currency: "South Korean Won",
    currency_code: "KRW",
    symbol: "\u20A9"
  },
  {
    country: "Spain",
    country_code: "ES",
    currency: "Euro",
    currency_code: "EUR",
    symbol: "\u20AC"
  },
  {
    country: "Sri Lanka",
    country_code: "LK",
    currency: "Sri Lankan Rupee",
    currency_code: "LKR",
    symbol: "Rs"
  },
  {
    country: "Sweden",
    country_code: "SE",
    currency: "Swedish Krona",
    currency_code: "SEK",
    symbol: "kr"
  },
  {
    country: "Switzerland",
    country_code: "CH",
    currency: "Swiss Franc",
    currency_code: "CHF",
    symbol: "CHF"
  },
  {
    country: "Turkey",
    country_code: "TR",
    currency: "Turkish Lira",
    currency_code: "TRY",
    symbol: "\u20BA"
  },
  {
    country: "United Arab Emirates",
    country_code: "AE",
    currency: "UAE Dirham",
    currency_code: "AED",
    symbol: "\u062F.\u0625"
  },
  {
    country: "United Kingdom",
    country_code: "GB",
    currency: "British Pound",
    currency_code: "GBP",
    symbol: "\xA3"
  },
  {
    country: "United States",
    country_code: "US",
    currency: "US Dollar",
    currency_code: "USD",
    symbol: "$"
  },
  {
    country: "Vietnam",
    country_code: "VN",
    currency: "Vietnamese Dong",
    currency_code: "VND",
    symbol: "\u20AB"
  }
];

// server/routes/auth.routes.ts
init_schema();
var router2 = Router2();
var loginSchema = z6.object({
  username: z6.string().min(1, "Username is required"),
  password: z6.string().min(1, "Password is required"),
  fcmToken: z6.string().nullable().optional()
});
router2.post("/login", validateRequest2(loginSchema), async (req, res) => {
  try {
    const { username, password, fcmToken } = req.body;
    const results = await db.select().from(users).where(eq31(users.username, username));
    console.log(results);
    const user = results[0];
    if (!user) {
      console.warn("User not found:", username);
      return res.status(401).json({ error: "Invalid username or password" });
    }
    if ((user.status || "").trim().toLowerCase() !== "active") {
      return res.status(403).json({ error: "Account is inactive. Please contact administrator." });
    }
    if (user.isEmailVerified === false) {
      return res.status(403).json({ error: "Email not verified. Please verify your email first." });
    }
    if (!user.password) {
      console.error("User has no password in DB:", user.id);
      return res.status(500).json({ error: "User record is invalid. Contact support." });
    }
    const isValidPassword = await bcrypt3.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    await db.update(users).set({
      lastLogin: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq31(users.id, user.id));
    try {
      await db.insert(userActivityLogs).values({
        userId: user.id,
        action: "login",
        entityType: "user",
        entityId: user.id,
        details: JSON.stringify({
          ipAddress: req.ip,
          userAgent: req.get("user-agent")
        }),
        ipAddress: req.ip,
        userAgent: req.get("user-agent")
      });
    } catch (logError) {
      console.error("Failed to log login activity:", logError);
    }
    if (!req.session) {
      console.error("Session not initialized");
      return res.status(500).json({ error: "Session not initialized" });
    }
    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      permissions: resolveUserPermissions(user.role, user.permissions),
      avatar: user.avatar,
      createdBy: user.createdBy || ""
    };
    const { password: _, ...userData } = user;
    try {
      await db.update(users).set({ fcmToken }).where(eq31(users.id, user?.id));
    } catch (err) {
      console.error("FCM token not update");
    }
    res.json({
      message: "Login successful",
      user: userData
    });
  } catch (error) {
    console.log("Error during login:", error);
    res.status(500).json({ error: "Login failed", message: error.message });
  }
});
router2.post("/logout", (req, res) => {
  const userId = req.session?.user?.id;
  if (userId) {
    db.insert(userActivityLogs).values({
      userId,
      action: "logout",
      entityType: "user",
      entityId: userId,
      details: {}
    }).catch(console.error);
  }
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ error: "Logout failed" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logout successful" });
  });
});
router2.get("/me", async (req, res) => {
  const user = req.session?.user;
  if (!user) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  const [currentUser] = await db.select().from(users).where(eq31(users.id, user.id));
  if (!currentUser) {
    return res.status(404).json({ error: "User not found" });
  }
  const { password, ...userData } = currentUser;
  res.json(userData);
});
router2.post("/api/me/update-fcm-token", async (req, res) => {
  try {
    const user = req.session?.user;
    const { fcmToken } = req.body;
    if (!user) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    if (!fcmToken) {
      return res.status(400).json({
        success: false,
        message: "fcmToken is required"
      });
    }
    await db.update(users).set({ fcmToken }).where(eq31(users.id, user?.id));
    return res.json({
      success: true,
      message: "FCM token updated successfully"
    });
  } catch (error) {
    console.error("FCM TOKEN UPDATE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
});
router2.get("/check", (req, res) => {
  const user = req.session?.user;
  res.json({ authenticated: !!user, user });
});
router2.get("/country-data", (req, res) => {
  res.json(country_default);
});
router2.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    const existingUser = await db.select().from(users).where(eq31(users.email, email));
    if (!existingUser.length) {
      return res.status(404).json({ error: "Email not registered" });
    }
    const userId = existingUser[0].id;
    const userName = existingUser[0].firstName;
    const recentOTPs = await db.select().from(otpVerifications).where(
      and17(
        eq31(otpVerifications.userId, userId),
        sql18`${otpVerifications.createdAt} > NOW() - INTERVAL '5 minutes'`
      )
    );
    if (recentOTPs.length >= 3) {
      return res.status(429).json({
        error: "Too many requests. Try again in 5 minutes."
      });
    }
    const otpCode = Math.floor(1e5 + Math.random() * 9e5).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1e3);
    await db.insert(otpVerifications).values({
      userId,
      otpCode,
      expiresAt,
      isUsed: false
    });
    try {
      await sendOTPEmail(email, otpCode, userName);
      console.log(`\u2709\uFE0F OTP sent to ${email}`);
    } catch (emailError) {
      console.error("\u26A0\uFE0F Failed to send OTP email:", emailError);
    }
    res.json({
      success: true,
      message: "Verification code sent to your email"
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ error: error.message || "Failed to process request" });
  }
});
router2.post("/reset-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({ error: "Email and new password are required" });
    }
    const existingUser = await db.select().from(users).where(eq31(users.email, email)).limit(1);
    if (!existingUser.length) {
      return res.status(404).json({ error: "Email not registered" });
    }
    const userId = existingUser[0].id;
    const otpRecord = await db.select().from(otpVerifications).where(
      eq31(otpVerifications.userId, userId),
      eq31(otpVerifications.isUsed, false)
    ).limit(1);
    if (!otpRecord.length) {
      return res.status(400).json({ error: "Invalid or already used OTP" });
    }
    const hashedPassword = await bcrypt3.hash(newPassword, 10);
    await db.update(users).set({ password: hashedPassword }).where(eq31(users.id, userId));
    await db.delete(otpVerifications).where(eq31(otpVerifications.id, otpRecord[0].id));
    res.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ error: error.message || "Failed to reset password" });
  }
});
router2.post("/verify-otp", async (req, res) => {
  try {
    const { email, otpCode } = req.body;
    console.log("Request body:", req.body);
    if (!email || !otpCode) {
      return res.status(400).json({ error: "Email and OTP are required" });
    }
    const existingUser = await db.select().from(users).where(eq31(users.email, email)).limit(1);
    console.log("Found user:", existingUser);
    if (!existingUser.length) {
      return res.status(404).json({ error: "Email not registered" });
    }
    const userId = existingUser[0].id;
    const otpRecord = await db.select().from(otpVerifications).where(
      and17(
        eq31(otpVerifications.userId, userId),
        eq31(otpVerifications.otpCode, otpCode.toString()),
        eq31(otpVerifications.isUsed, false)
        // sql`${otpVerifications.expiresAt} > timezone('UTC', now())`
      )
    ).limit(1);
    console.log("OTP records found:", otpRecord);
    if (otpRecord.length) {
      console.log("OTP expires at:", otpRecord[0].expiresAt);
      console.log("Current time:", (/* @__PURE__ */ new Date()).toISOString());
    }
    if (!otpRecord.length) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }
    await db.update(otpVerifications).set({ isUsed: true }).where(eq31(otpVerifications.id, otpRecord[0].id));
    res.json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({ error: error.message || "Failed to verify OTP" });
  }
});
setInterval(async () => {
  await db.delete(otpVerifications).where(
    sql18`${otpVerifications.expiresAt} < timezone('UTC', now())`
  );
}, 60 * 1e3);
var auth_routes_default = router2;

// server/routes/smtp.route.ts
function registerSMTPRoutes(app2) {
  app2.post("/api/admin/smtpConfig", requireAuth, upsertSMTPConfig);
  app2.get("/api/admin/getSmtpConfig", requireAuth, getSMTPConfigHandler);
  app2.post("/api/contact/sendmail", sendMailRoute);
}

// server/controllers/panel.config.controller.ts
import { z as z7 } from "zod";
import path4 from "path";
import fs3 from "fs";
var panelConfigSchema = z7.object({
  name: z7.string().min(1, "Name is required"),
  tagline: z7.string().optional(),
  description: z7.string().optional(),
  companyName: z7.string().optional(),
  companyWebsite: z7.string().url().optional().or(z7.literal("")),
  supportEmail: z7.string().email().optional().or(z7.literal("")),
  defaultLanguage: z7.string().length(2).default("en"),
  supportedLanguages: z7.array(z7.string()).default(["en"]),
  currency: z7.string().min(1).default("INR"),
  // e.g. USD, INR
  country: z7.string().length(2).default("IN"),
  // ISO2 country code
  firebase: z7.record(z7.any()).optional()
});
var brandSettingsSchema = z7.object({
  title: z7.string().min(1, "Title is required"),
  tagline: z7.string().optional(),
  logo: z7.string().optional(),
  logo2: z7.string().optional(),
  favicon: z7.string().optional(),
  supportEmail: z7.string().email().optional().or(z7.literal("")),
  currency: z7.string().min(1).default("INR"),
  // e.g. USD, INR
  country: z7.string().length(2).default("IN")
  // ISO2 country code
});
var processBase64Image = async (base64Data, type) => {
  if (!base64Data || !base64Data.includes("base64,")) {
    return base64Data;
  }
  try {
    const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return null;
    }
    const mimeType = matches[1];
    const data = matches[2];
    let extension = "png";
    if (mimeType.includes("jpeg") || mimeType.includes("jpg")) {
      extension = "jpg";
    } else if (mimeType.includes("svg")) {
      extension = "svg";
    } else if (mimeType.includes("icon") || type === "favicon") {
      extension = "ico";
    }
    const filename = `${type}-${Date.now()}.${extension}`;
    const uploadPath = path4.join(process.cwd(), "uploads", filename);
    const uploadsDir = path4.join(process.cwd(), "uploads");
    if (!fs3.existsSync(uploadsDir)) {
      fs3.mkdirSync(uploadsDir, { recursive: true });
    }
    fs3.writeFileSync(uploadPath, data, "base64");
    return `/uploads/${filename}`;
  } catch (error) {
    console.error("Error processing base64 image:", error);
    return null;
  }
};
var create = async (req, res) => {
  try {
    const parsed = panelConfigSchema.parse(req.body);
    const files = req.files;
    const logoFile = files?.logo?.[0];
    const faviconFile = files?.favicon?.[0];
    const logoPath = logoFile ? logoFile.cloudUrl || `/uploads/${path4.basename(path4.dirname(logoFile.path))}/${logoFile.filename}` : void 0;
    const faviconPath = faviconFile ? faviconFile.cloudUrl || `/uploads/${path4.basename(path4.dirname(faviconFile.path))}/${faviconFile.filename}` : void 0;
    if (logoFile)
      console.log(
        `\u{1F5BC}\uFE0F Logo: ${logoFile.cloudUrl ? "Cloud" : "Local"} \u2192 ${logoPath}`
      );
    if (faviconFile)
      console.log(
        `\u{1F310} Favicon: ${faviconFile.cloudUrl ? "Cloud" : "Local"} \u2192 ${faviconPath}`
      );
    const data = {
      ...parsed,
      logo: logoPath,
      favicon: faviconPath,
      firebase: parsed.firebase || {}
    };
    const config2 = await createPanelConfig(data);
    res.status(201).json(config2);
  } catch (err) {
    console.error("\u274C Create Panel Config Error:", err);
    res.status(400).json({ error: err.errors || err.message });
  }
};
var getAll = async (_req, res) => {
  try {
    const configs2 = await getPanelConfigs();
    res.json(configs2);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
var getOne = async (req, res) => {
  try {
    const config2 = await getPanelConfigById(req.params.id);
    if (!config2) return res.status(404).json({ message: "Not found" });
    res.json(config2);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
var update = async (req, res) => {
  try {
    const parsed = panelConfigSchema.partial().parse(req.body);
    const files = req.files;
    const logoFile = files?.logo?.[0];
    const faviconFile = files?.favicon?.[0];
    const logoPath = logoFile ? logoFile.cloudUrl || `/uploads/${path4.basename(path4.dirname(logoFile.path))}/${logoFile.filename}` : parsed.logo;
    const faviconPath = faviconFile ? faviconFile.cloudUrl || `/uploads/${path4.basename(path4.dirname(faviconFile.path))}/${faviconFile.filename}` : parsed.favicon;
    if (logoFile)
      console.log(
        `\u{1F5BC}\uFE0F Updating logo: ${logoFile.cloudUrl ? "Cloud" : "Local"} \u2192 ${logoPath}`
      );
    if (faviconFile)
      console.log(
        `\u{1F310} Updating favicon: ${faviconFile.cloudUrl ? "Cloud" : "Local"} \u2192 ${faviconPath}`
      );
    const data = {
      ...parsed,
      logo: logoPath,
      favicon: faviconPath,
      firebase: parsed.firebase || {}
    };
    const config2 = await updatePanelConfig(req.params.id, data);
    if (!config2) return res.status(404).json({ message: "Not found" });
    res.json(config2);
  } catch (err) {
    console.error("\u274C Update Panel Config Error:", err);
    res.status(400).json({ error: err.errors || err.message });
  }
};
var remove = async (req, res) => {
  try {
    await deletePanelConfig(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
var getBrandSettings = async (_req, res) => {
  try {
    const config2 = await getFirstPanelConfig();
    if (!config2) {
      return res.json({
        title: "Your App Name",
        tagline: "Building amazing experiences",
        logo: "",
        logo2: "",
        favicon: "",
        supportEmail: "",
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    const brandSettings = {
      title: config2.name || "Your App Name",
      tagline: config2.tagline || "",
      currency: config2.currency || "",
      country: config2.country || "",
      supportEmail: config2.supportEmail || "",
      logo: config2.logo?.startsWith("https") ? config2.logo : `/uploads/${config2.logo}`,
      logo2: config2.logo2?.startsWith("https") ? config2.logo2 : `/uploads/${config2.logo2}`,
      favicon: config2.favicon?.startsWith("https") ? config2.favicon : `/uploads/${config2.favicon}`,
      updatedAt: config2.updatedAt?.toISOString() || (/* @__PURE__ */ new Date()).toISOString()
    };
    res.json(brandSettings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
var createBrandSettings = async (req, res) => {
  try {
    const parsed = brandSettingsSchema.parse(req.body);
    const files = req.files;
    let logoPath;
    let logo2Path;
    let faviconPath;
    if (files?.logo?.[0]) {
      const logoFile = files.logo[0];
      const isCloudFile = !!logoFile.cloudUrl;
      logoPath = logoFile.cloudUrl || `/uploads/${path4.basename(path4.dirname(logoFile.path))}/${logoFile.filename}`;
      console.log(`\u{1F5BC}\uFE0F Logo (${isCloudFile ? "Cloud" : "Local"}): ${logoPath}`);
    } else if (parsed.logo && parsed.logo.includes("base64,")) {
      logoPath = await processBase64Image(parsed.logo, "logo") ?? void 0;
      console.log(`\u{1F5BC}\uFE0F Logo (Base64 processed): ${logoPath}`);
    }
    if (files?.logo2?.[0]) {
      const file = files.logo2[0];
      logo2Path = file.cloudUrl || `/uploads/${path4.basename(path4.dirname(file.path))}/${file.filename}`;
    } else if (parsed.logo2?.includes("base64,")) {
      logo2Path = await processBase64Image(parsed.logo2, "logo2");
    }
    if (files?.favicon?.[0]) {
      const faviconFile = files.favicon[0];
      const isCloudFile = !!faviconFile.cloudUrl;
      faviconPath = faviconFile.cloudUrl || `/uploads/${path4.basename(path4.dirname(faviconFile.path))}/${faviconFile.filename}`;
      console.log(
        `\u{1F310} Favicon (${isCloudFile ? "Cloud" : "Local"}): ${faviconPath}`
      );
    } else if (parsed.favicon && parsed.favicon.includes("base64,")) {
      faviconPath = await processBase64Image(parsed.favicon, "favicon") ?? void 0;
      console.log(`\u{1F310} Favicon (Base64 processed): ${faviconPath}`);
    }
    const panelData = {
      name: parsed.title,
      tagline: parsed.tagline || "",
      description: "",
      companyName: "",
      companyWebsite: "",
      supportEmail: "",
      defaultLanguage: "en",
      supportedLanguages: ["en"],
      logo: logoPath,
      logo2: logo2Path,
      favicon: faviconPath,
      country: "IN",
      currency: "INR"
    };
    const config2 = await createPanelConfig(panelData);
    const brandSettings = {
      title: config2.name || parsed.title,
      tagline: config2.tagline || "",
      logo: config2.logo || "",
      logo2: config2.logo2,
      favicon: config2.favicon || "",
      country: config2.country || "",
      currency: config2.currency || "",
      supportEmail: config2.supportEmail || "",
      updatedAt: config2.updatedAt?.toISOString() || (/* @__PURE__ */ new Date()).toISOString()
    };
    res.status(201).json(brandSettings);
  } catch (err) {
    console.error("\u274C Create Brand Settings Error:", err);
    res.status(400).json({ error: err.errors || err.message });
  }
};
var updateBrandSettings = async (req, res) => {
  try {
    const parsed = brandSettingsSchema.parse(req.body);
    const files = req.files;
    let logoPath;
    let logo2Path;
    let faviconPath;
    if (files?.logo?.[0]) {
      const logoFile = files.logo[0];
      logoPath = logoFile.cloudUrl || `/uploads/${logoFile.filename}`;
      console.log(`\u{1F5BC}\uFE0F Updated Logo: ${logoPath}`);
    } else if (parsed.logo && parsed.logo.includes("base64,")) {
      logoPath = await processBase64Image(parsed.logo, "logo");
    }
    if (files?.logo2?.[0]) {
      const logo2File = files.logo2[0];
      logo2Path = logo2File.cloudUrl || `/uploads/${logo2File.filename}`;
      console.log(`\u{1F5BC}\uFE0F Updated Secondary Logo: ${logo2Path}`);
    } else if (parsed.logo2 && parsed.logo2.includes("base64,")) {
      logo2Path = await processBase64Image(parsed.logo2, "logo2");
    }
    if (files?.favicon?.[0]) {
      const faviconFile = files.favicon[0];
      faviconPath = faviconFile.cloudUrl || `/uploads/${faviconFile.filename}`;
      console.log(`\u{1F310} Updated Favicon: ${faviconPath}`);
    } else if (parsed.favicon && parsed.favicon.includes("base64,")) {
      faviconPath = await processBase64Image(parsed.favicon, "favicon");
    }
    const panelData = {
      name: parsed.title,
      tagline: parsed.tagline || "",
      logo: logoPath,
      logo2: logo2Path,
      // 👈 ADDED
      favicon: faviconPath,
      country: parsed.country || "",
      supportEmail: parsed.supportEmail || "",
      currency: parsed.currency || ""
    };
    const config2 = await updateFirstPanelConfig(panelData);
    const brandSettings = {
      title: config2.name || parsed.title,
      tagline: config2.tagline || "",
      country: config2.country || "",
      currency: config2.currency || "",
      supportEmail: config2.supportEmail || "",
      logo: config2.logo?.startsWith("https") ? config2.logo : `/uploads/${config2.logo}`,
      logo2: config2.logo2?.startsWith("https") ? config2.logo2 : `/uploads/${config2.logo2}`,
      // 👈 ADDED
      favicon: config2.favicon?.startsWith("https") ? config2.favicon : `/uploads/${config2.favicon}`,
      updatedAt: config2.updatedAt?.toISOString() || (/* @__PURE__ */ new Date()).toISOString()
    };
    res.json(brandSettings);
  } catch (err) {
    console.error("\u274C Update Brand Settings Error:", err);
    res.status(400).json({ error: err.errors || err.message });
  }
};

// server/routes/panel.config.routes.ts
function registerPanelConfigRoutes(app2) {
  app2.post(
    "/api/panel",
    upload.fields([{ name: "logo", maxCount: 1 }, { name: "favicon", maxCount: 1 }]),
    handleDigitalOceanUpload,
    create
  );
  app2.get("/api/panel", getAll);
  app2.get("/api/panel/:id", getOne);
  app2.put(
    "/api/panel/:id",
    upload.fields([{ name: "logo", maxCount: 1 }, { name: "favicon", maxCount: 1 }]),
    handleDigitalOceanUpload,
    update
  );
  app2.delete("/api/panel/:id", remove);
  app2.get("/api/brand-settings", getBrandSettings);
  app2.put("/api/brand-settings", upload.fields([{ name: "logo", maxCount: 1 }, { name: "logo2", maxCount: 1 }, { name: "favicon", maxCount: 1 }]), handleDigitalOceanUpload, updateBrandSettings);
  app2.post("/api/brand-settings", upload.fields([{ name: "logo", maxCount: 1 }, { name: "logo2", maxCount: 1 }, { name: "favicon", maxCount: 1 }]), handleDigitalOceanUpload, createBrandSettings);
}

// server/controllers/storage.settings.controller.ts
init_db();
init_schema();
import { eq as eq32 } from "drizzle-orm";
var getStorageSettings = async (req, res) => {
  try {
    const [settings] = await db.select().from(storageSettings);
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch storage settings" });
  }
};
var getActiveStorage = async (req, res) => {
  try {
    const active = await db.select().from(storageSettings).where(eq32(storageSettings.isActive, true)).limit(1);
    res.json(active[0] || null);
  } catch {
    res.status(500).json({ error: "Failed to fetch active storage" });
  }
};
var updateStorageSetting = async (req, res) => {
  try {
    const {
      id,
      spaceName,
      endpoint,
      region,
      accessKey,
      secretKey,
      isActive
    } = req.body;
    if (!spaceName || !endpoint || !region || !accessKey || !secretKey) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (isActive) {
      await db.update(storageSettings).set({ isActive: false });
    }
    if (id) {
      await db.update(storageSettings).set({
        spaceName,
        endpoint,
        region,
        accessKey,
        secretKey,
        isActive,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq32(storageSettings.id, id));
    } else {
      await db.insert(storageSettings).values({
        spaceName,
        endpoint,
        region,
        accessKey,
        secretKey,
        isActive
      });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Storage update error:", error);
    res.status(500).json({ error: "Failed to update storage" });
  }
};
var deleteStorageSetting = async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(storageSettings).where(eq32(storageSettings.id, id));
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Failed to delete storage" });
  }
};

// server/routes/storage.settings.route.ts
function registerStorageSettingsRoutes(app2) {
  app2.get("/api/storage-settings", getStorageSettings);
  app2.get("/api/storage-settings/active", getActiveStorage);
  app2.post("/api/storage-settings/update", updateStorageSetting);
  app2.delete("/api/storage-settings/:id", deleteStorageSetting);
}

// server/controllers/ai.settings.controller.ts
init_db();
init_schema();
import { eq as eq33 } from "drizzle-orm";
var getAISettings = async (req, res) => {
  try {
    const settings = await db.select().from(aiSettings);
    res.json(settings);
  } catch (error) {
    console.error("\u274C Error fetching AI settings:", error);
    res.status(500).json({ error: "Failed to fetch AI settings" });
  }
};
var getAISettingByChannelId = async (req, res) => {
  try {
    const { channelId } = req.params;
    console.log("Fetching AI setting for channelId:", channelId);
    const settings = await db.select().from(aiSettings).where(eq33(aiSettings.channelId, channelId)).limit(1);
    if (settings.length === 0) {
      return res.status(404).json({
        error: "AI settings not found for this channel"
      });
    }
    return res.status(200).json(settings[0]);
  } catch (error) {
    console.error("\u274C Error fetching AI setting by channelId:", error);
    return res.status(500).json({
      error: "Failed to fetch AI settings for channel"
    });
  }
};
var createAISettings = async (req, res) => {
  try {
    const {
      provider,
      channelId,
      apiKey,
      model,
      endpoint,
      temperature,
      maxTokens,
      isActive,
      words
    } = req.body;
    if (!apiKey) {
      return res.status(400).json({ error: "API key is required" });
    }
    if (channelId) {
      const existing = await db.select().from(aiSettings).where(eq33(aiSettings.channelId, channelId)).limit(1);
      if (existing.length > 0) {
        return res.status(400).json({
          error: "AI settings already exist for this channel",
          data: existing[0]
        });
      }
    }
    let wordsArray = [];
    if (typeof words === "string") {
      try {
        wordsArray = JSON.parse(words);
      } catch {
        wordsArray = words.split(",").map((w) => w.trim()).filter(Boolean);
      }
    } else if (Array.isArray(words)) {
      wordsArray = words.map((w) => w.trim()).filter(Boolean);
    }
    if (isActive && channelId) {
      await db.update(aiSettings).set({ isActive: false }).where(eq33(aiSettings.channelId, channelId));
    }
    const [inserted] = await db.insert(aiSettings).values({
      provider: provider || "openai",
      channelId: channelId || null,
      apiKey,
      model: model || "gpt-4o-mini",
      endpoint: endpoint || "https://api.openai.com/v1",
      temperature: temperature?.toString() || "0.7",
      maxTokens: maxTokens?.toString() || "2048",
      isActive: !!isActive,
      words: wordsArray
    }).returning();
    res.status(201).json(inserted);
  } catch (error) {
    console.error("\u274C Error creating AI setting:", error);
    res.status(500).json({ error: "Failed to create AI setting" });
  }
};
var updateAISettings = async (req, res) => {
  try {
    const { id } = req.params;
    const { apiKey, provider, model, endpoint, temperature, maxTokens, isActive, words } = req.body;
    const existing = await db.query.aiSettings.findFirst({
      where: (table, { eq: eq41 }) => eq41(table.id, id)
    });
    if (!existing) {
      return res.status(404).json({ error: "Setting not found" });
    }
    let wordsArray;
    if (typeof words === "string") {
      try {
        wordsArray = JSON.parse(words);
      } catch {
        wordsArray = words.split(",").map((w) => w.trim()).filter(Boolean);
      }
    } else if (Array.isArray(words)) {
      wordsArray = words.map((w) => w.trim()).filter(Boolean);
    }
    if (isActive) {
      await db.update(aiSettings).set({ isActive: false }).where(eq33(aiSettings.isActive, true));
    }
    const [updated] = await db.update(aiSettings).set({
      provider: provider ?? existing.provider,
      apiKey: apiKey ?? existing.apiKey,
      channelId: existing.channelId,
      model: model ?? existing.model,
      endpoint: endpoint ?? existing.endpoint,
      temperature: temperature?.toString() ?? existing.temperature,
      maxTokens: maxTokens?.toString() ?? existing.maxTokens,
      isActive: isActive ?? existing.isActive,
      words: wordsArray ?? existing.words,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq33(aiSettings.id, id)).returning();
    res.json(updated);
  } catch (error) {
    console.error("\u274C Error updating AI setting:", error);
    res.status(500).json({ error: "Failed to update AI setting" });
  }
};
var deleteAISettings = async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(aiSettings).where(eq33(aiSettings.id, id));
    res.json({ message: "AI setting deleted successfully" });
  } catch (error) {
    console.error("\u274C Error deleting AI setting:", error);
    res.status(500).json({ error: "Failed to delete AI setting" });
  }
};

// server/routes/ai.settings.routes.ts
function registerAISettingsRoutes(app2) {
  app2.get("/api/ai-settings", getAISettings);
  app2.post("/api/ai-settings", createAISettings);
  app2.put("/api/ai-settings/:id", updateAISettings);
  app2.delete("/api/ai-settings/:id", deleteAISettings);
  app2.get("/api/ai-settings/channel/:channelId", getAISettingByChannelId);
}

// server/routes/chatbot.routes.ts
init_storage();
import OpenAI from "openai";
init_schema();

// server/socket.ts
init_storage();
import { Server as SocketIOServer } from "socket.io";
var io;

// server/routes/chatbot.routes.ts
init_db();
import { eq as eq34 } from "drizzle-orm";
function buildAIClient(aiSetting) {
  if (aiSetting.provider === "openai") {
    return new OpenAI({
      apiKey: aiSetting.apiKey,
      baseURL: aiSetting.endpoint || "https://api.openai.com/v1"
    });
  }
  return new OpenAI({
    apiKey: aiSetting.apiKey,
    baseURL: aiSetting.endpoint || "https://api.openai.com/v1"
  });
}
function registerWidgetRoutes(app2) {
  app2.use("/api/widget", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
  app2.get("/api/widget/config/:siteId", async (req, res) => {
    try {
      const { siteId } = req.params;
      const site = await storage.getSite(siteId);
      if (!site) {
        return res.status(404).json({ error: "Site not found" });
      }
      const [brandName] = await db.select({
        name: panelConfig.name
      }).from(panelConfig);
      const name = brandName?.name;
      res.json({
        config: { ...site.widgetConfig || {}, brandName: name },
        siteId: site.id,
        siteName: site.name
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch widget configuration" });
    }
  });
  app2.get("/api/widget/kb/:siteId", async (req, res) => {
    try {
      const site = await storage.getSite(req.params.siteId);
      if (!site || !site.widgetEnabled) {
        return res.status(404).json({ error: "Widget not available" });
      }
      const categoriesTree = await storage.getKnowledgeCategoriesTree(req.params.siteId);
      const allCategories = await storage.getKnowledgeCategories(req.params.siteId);
      const articlesMap = /* @__PURE__ */ new Map();
      for (const category of allCategories) {
        const articles = await storage.getKnowledgeArticles(category.id);
        articlesMap.set(category.id, articles);
      }
      const processCategoryTree = (categories) => {
        return categories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          icon: cat.icon,
          articleCount: articlesMap.get(cat.id)?.length || 0,
          articles: (articlesMap.get(cat.id) || []).map((article) => ({
            id: article.id,
            title: article.title,
            preview: article.content.replace(/<[^>]*>/g, "").substring(0, 150) + "..."
          })),
          subcategories: processCategoryTree(cat.subcategories || [])
        }));
      };
      const kbData = {
        categories: processCategoryTree(categoriesTree)
      };
      res.json(kbData);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch knowledge base" });
    }
  });
  app2.get("/api/widget/article/:articleId", async (req, res) => {
    try {
      const article = await storage.getKnowledgeArticle(req.params.articleId);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      const category = await storage.getKnowledgeCategory(article.categoryId);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      const site = await storage.getSite(category.siteId);
      if (!site || !site.widgetEnabled) {
        return res.status(404).json({ error: "Widget not available" });
      }
      res.json({
        id: article.id,
        title: article.title,
        content: article.content
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch article" });
    }
  });
  app2.post("/api/widget/contacts", requireSubscription("contacts"), async (req, res) => {
    try {
      const { siteId, name, email, phone, source } = req.body;
      console.log("widget contact body", req.body);
      const site = await storage.getSite(siteId);
      if (!site) {
        return res.status(404).json({ error: "Site not found" });
      }
      const getCreated = await storage.getChannel(site.channelId);
      let [contact] = await storage.getContactByEmail(email);
      if (!contact) {
        contact = await storage.createContact({
          channelId: site?.channelId || null,
          name,
          email,
          phone,
          createdBy: getCreated?.createdBy || null,
          source: source || "chat_widget",
          tags: ["widget-lead"]
        });
      }
      res.json({ success: true, contactId: contact.id });
    } catch (error) {
      console.error("Failed to save contact:", error);
      res.status(500).json({ error: "Failed to save contact" });
    }
  });
  app2.post("/api/widget/chat", async (req, res) => {
    try {
      const { siteId, channelId, sessionId, conversationId, message, visitorInfo } = req.body;
      if (!message || !siteId || !sessionId) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const site = await storage.getSite(siteId);
      if (!site || !site.widgetEnabled) {
        return res.status(404).json({ error: "Widget not available" });
      }
      const humanKeywords = [
        "human",
        "agent",
        "person",
        "support",
        "real person",
        "real human",
        "representative",
        "talk to someone",
        "customer care",
        "customer support"
      ];
      const wantsHuman = humanKeywords.some(
        (kw) => message.toLowerCase().includes(kw)
      );
      let contact = null;
      if (visitorInfo?.email) {
        contact = await storage.getContactByEmail(site.tenantId, visitorInfo.email);
        if (!contact) {
          contact = await storage.createContact({
            tenantId: site.tenantId,
            name: visitorInfo.name || "Anonymous",
            email: visitorInfo.email,
            phone: visitorInfo.mobile || "",
            source: "chat_widget",
            tags: ["widget-user"]
          });
        }
      }
      let conversation;
      if (conversationId) {
        conversation = await storage.getConversation(conversationId);
      }
      if (!conversation) {
        conversation = await storage.createConversation({
          channelId: channelId || null,
          contactId: contact?.id || null,
          contactName: visitorInfo?.name || "Anonymous",
          contactPhone: visitorInfo?.mobile || "",
          status: "open",
          type: "chatbot",
          sessionId,
          tags: ["widget-chat"]
        });
      }
      const userMessage = await storage.createMessage({
        conversationId: conversation.id,
        content: message,
        direction: "inbound",
        fromUser: true,
        fromType: "user",
        type: "text",
        status: "received"
      });
      if (io) {
        io.to(`conversation:${conversation.id}`).emit("new_message", {
          conversationId: conversation.id,
          message: {
            id: userMessage.id,
            content: message,
            fromUser: true,
            fromType: "user",
            fromName: visitorInfo?.name || "Visitor",
            createdAt: userMessage.createdAt,
            status: "received"
          }
        });
        await storage.updateMessage(userMessage.id, {
          status: "delivered",
          deliveredAt: /* @__PURE__ */ new Date()
        });
      }
      async function assignToRandomAgent(conversation2, site2) {
        const teamMembers = site2?.widgetConfig?.teamMembers || [];
        if (teamMembers.length === 0) return null;
        const randomAgent = teamMembers[Math.floor(Math.random() * teamMembers.length)];
        await storage.updateConversation(conversation2.id, {
          status: "assigned",
          assignedTo: randomAgent.id,
          updatedAt: /* @__PURE__ */ new Date()
        });
        if (io) {
          io.to(`site:${siteId}`).emit("new_conversation_assigned", {
            conversationId: conversation2.id,
            agentId: randomAgent.id,
            agentName: randomAgent.name
          });
        }
        return randomAgent;
      }
      let aiResponse = null;
      let aiMessageId = null;
      const isAssigned = conversation.status === "assigned" && conversation.assignedTo;
      if (wantsHuman && !isAssigned) {
        const assignedAgent = await assignToRandomAgent(conversation, site);
        if (assignedAgent) {
          aiResponse = `I've connected you with ${assignedAgent.name} from our ${assignedAgent.role} team. They'll assist you shortly.`;
        } else {
          aiResponse = "All our agents are currently offline. Please wait while we connect you soon.";
        }
        const botMessage = await storage.createMessage({
          conversationId: conversation.id,
          content: aiResponse,
          direction: "outbound",
          fromUser: false,
          fromType: "bot",
          type: "text",
          status: "sent"
        });
        if (io) {
          io.to(`conversation:${conversation.id}`).emit("new_message", {
            conversationId: conversation.id,
            message: {
              id: botMessage.id,
              content: aiResponse,
              fromUser: false,
              fromType: "bot",
              fromName: "AI Assistant",
              createdAt: botMessage.createdAt,
              status: "sent"
            }
          });
        }
        return res.json({
          success: true,
          response: aiResponse,
          conversationId: conversation.id,
          messageId: botMessage.id,
          mode: "human"
        });
      }
      if (!isAssigned) {
        const messages2 = await storage.getConversationMessages(conversation.id);
        const conversationHistory = messages2.slice(-10).map((msg) => ({
          role: msg.fromUser ? "user" : "assistant",
          content: msg.content
        }));
        const aiSetting = await db.select().from(aiSettings).where(eq34(aiSettings.channelId, channelId || "")).limit(1);
        let activeAI = aiSetting?.[0];
        if (!activeAI || !activeAI.isActive) {
          console.warn("\u26A0 No active AI configured for channel:", channelId);
        }
        let aiClient = null;
        if (activeAI?.apiKey) {
          aiClient = buildAIClient(activeAI);
        }
        const aiConfig = site.aiTrainingConfig || {};
        const finalModel = activeAI?.model || aiConfig.model || "gpt-4o-mini";
        const finalTemp = parseFloat(activeAI?.temperature || aiConfig.temperature || "0.7");
        const finalMaxTokens = parseInt(activeAI?.maxTokens || aiConfig.maxTokens || "500");
        const systemPrompt = aiConfig.systemPrompt || `You are a helpful support assistant for ${site.name}. Respond based on past messages.`;
        try {
          if (!aiClient) {
            throw new Error("AI client is not initialized. Missing API key.");
          }
          const completion = await aiClient.chat.completions.create({
            model: finalModel,
            messages: [
              { role: "system", content: systemPrompt },
              ...conversationHistory,
              { role: "user", content: message }
            ],
            temperature: finalTemp,
            max_tokens: finalMaxTokens
          });
          aiResponse = completion.choices?.[0]?.message?.content || "I'm here, but unable to generate a response right now.";
          const botMessage = await storage.createMessage({
            conversationId: conversation.id,
            content: aiResponse,
            direction: "outbound",
            fromUser: false,
            fromType: "bot",
            type: "text",
            status: "sent"
          });
          aiMessageId = botMessage.id;
          if (io) {
            io.to(`conversation:${conversation.id}`).emit("new_message", {
              conversationId: conversation.id,
              message: {
                id: botMessage.id,
                content: aiResponse,
                fromUser: false,
                fromType: "bot",
                fromName: "AI Assistant",
                createdAt: botMessage.createdAt,
                status: "sent"
              }
            });
          }
        } catch (error) {
          console.error("AI provider error:", error.message);
          const assignedAgent = await assignToRandomAgent(conversation, site);
          aiResponse = assignedAgent ? `I'm having difficulty responding. I've connected you with ${assignedAgent.name}.` : "AI is unavailable and no agent is online right now.";
          const botMessage = await storage.createMessage({
            conversationId: conversation.id,
            content: aiResponse,
            direction: "outbound",
            fromUser: false,
            fromType: "bot",
            type: "text",
            status: "sent"
          });
          if (io) {
            io.to(`conversation:${conversation.id}`).emit("new_message", {
              conversationId: conversation.id,
              message: {
                id: botMessage.id,
                content: aiResponse,
                fromUser: false,
                fromType: "bot",
                fromName: "AI Assistant",
                createdAt: botMessage.createdAt,
                status: "sent"
              }
            });
          }
        }
      } else {
        aiResponse = null;
      }
      await storage.updateConversation(conversation.id, {
        lastMessageAt: /* @__PURE__ */ new Date(),
        lastMessageText: aiResponse || message,
        unreadCount: (conversation.unreadCount || 0) + 1,
        updatedAt: /* @__PURE__ */ new Date()
      });
      res.json({
        success: true,
        response: aiResponse,
        conversationId: conversation.id,
        messageId: aiMessageId,
        mode: isAssigned ? "human" : "ai"
      });
    } catch (error) {
      console.error("Widget chat error:", error);
      res.status(500).json({
        error: "Failed to process message",
        message: error.message
      });
    }
  });
  app2.get("/api/widget/conversation/:conversationId", async (req, res) => {
    try {
      const { conversationId } = req.params;
      const messages2 = await storage.getConversationMessages(conversationId);
      const formattedMessages = messages2.map((msg) => ({
        id: msg.id,
        content: msg.content,
        fromUser: msg.fromUser,
        fromType: msg.fromType,
        status: msg.status,
        createdAt: msg.createdAt
      }));
      res.json({ messages: formattedMessages });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch conversation" });
    }
  });
  app2.post("/api/widget/request-agent", async (req, res) => {
    try {
      const { conversationId, siteId } = req.body;
      if (!conversationId) {
        return res.status(400).json({ error: "Conversation ID required" });
      }
      const conversation = await storage.getConversation(conversationId);
      if (!conversation) {
        return res.status(404).json({ error: "Conversation not found" });
      }
      const onlineAgents = io?.getOnlineAgents?.(siteId);
      if (!onlineAgents || onlineAgents.length === 0) {
        await storage.updateConversation(conversationId, {
          status: "pending",
          updatedAt: /* @__PURE__ */ new Date()
        });
        await storage.createMessage({
          conversationId,
          content: "All agents are currently busy. You'll be connected with the next available agent.",
          direction: "outbound",
          fromUser: false,
          fromType: "system",
          type: "text",
          status: "sent"
        });
        return res.json({
          success: true,
          status: "pending",
          message: "No agents available. You are in queue."
        });
      }
      const agent = onlineAgents[0];
      await storage.updateConversation(conversationId, {
        status: "assigned",
        assignedTo: agent.userId,
        updatedAt: /* @__PURE__ */ new Date()
      });
      await storage.createMessage({
        conversationId,
        content: `${agent.name || "An agent"} has joined the conversation.`,
        direction: "outbound",
        fromUser: false,
        fromType: "system",
        type: "text",
        status: "sent"
      });
      if (io) {
        io.to(`site:${siteId}`).emit("new_conversation_assigned", {
          conversationId,
          agentId: agent.userId
        });
      }
      res.json({
        success: true,
        status: "assigned",
        agent: {
          id: agent.userId,
          name: agent.name
        }
      });
    } catch (error) {
      console.error("Request agent error:", error);
      res.status(500).json({ error: "Failed to request agent" });
    }
  });
  app2.get("/api/active-site", async (req, res) => {
    try {
      const { channelId } = req.query;
      if (!channelId) {
        return res.status(400).json({ message: "No Channel fount" });
      }
      const [site] = await storage.getSitesByChannel(channelId);
      res.json(site);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  app2.get("/api/sites", async (req, res) => {
    try {
      const sites3 = await storage.getSites();
      res.json(sites3);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  app2.post("/api/sites", requireAuth, async (req, res) => {
    try {
      const validated = insertSiteSchema.parse(req.body);
      if (validated.tenantId !== req.user?.tenantId && req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      const site = await storage.createSite(validated);
      res.json(site);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  app2.patch("/api/sites/:id", requireAuth, async (req, res) => {
    try {
      const site = await storage.getSite(req.params.id);
      if (!site) {
        return res.status(404).json({ message: "Site not found" });
      }
      if (site.tenantId !== req.user?.tenantId && req.user?.role !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      const safeData = {};
      if (req.body.name !== void 0) safeData.name = req.body.name;
      if (req.body.domain !== void 0) safeData.domain = req.body.domain;
      if (req.body.widgetEnabled !== void 0) safeData.widgetEnabled = req.body.widgetEnabled;
      if (req.body.widgetConfig !== void 0) safeData.widgetConfig = req.body.widgetConfig;
      if (req.body.aiTrainingConfig !== void 0) safeData.aiTrainingConfig = req.body.aiTrainingConfig;
      const updatedSite = await storage.updateSite(req.params.id, safeData);
      res.json(updatedSite);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  app2.get("/api/get_sites", requireAuth, async (req, res) => {
    try {
      const sites3 = await storage.getSites();
      res.status(200).json({ success: true, message: "getting sites successfully", sites: sites3 });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  app2.post("/api/sites/create_or_update", requireAuth, async (req, res) => {
    try {
      const validated = insertSiteSchema.parse(req.body);
      const userRole = req.user?.role;
      const [existingSite] = await storage.getSitesByChannel(req.body.channelId);
      let site;
      if (existingSite) {
        const safeData = {};
        if (validated.name !== void 0) safeData.name = validated.name;
        if (validated.domain !== void 0) safeData.domain = validated.domain;
        if (validated.widgetEnabled !== void 0) safeData.widgetEnabled = validated.widgetEnabled;
        if (validated.widgetConfig !== void 0) safeData.widgetConfig = validated.widgetConfig;
        if (validated.aiTrainingConfig !== void 0) safeData.aiTrainingConfig = validated.aiTrainingConfig;
        site = await storage.updateSite(existingSite.id, safeData);
      } else {
        site = await storage.createSite(validated);
      }
      return res.status(200).json(site);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  });
}

// server/routes/support.tickets.routes.ts
init_db();
init_schema();
import { and as and18, asc, desc as desc21, eq as eq35, ilike as ilike3, or as or6, sql as sql19 } from "drizzle-orm";
function registerTicketsRoutes(app2) {
  app2.get("/api/tickets", requireAuth, async (req, res) => {
    try {
      const { status, priority, search, page = "1", limit = "25" } = req.query;
      const userId = req.user.id;
      const userType = req.user.role;
      const pageNum = parseInt(page);
      const limitNum = parseInt(limit);
      const offset = (pageNum - 1) * limitNum;
      let conditions = [];
      console.log(
        userId,
        userType
      );
      if (userType !== "superadmin") {
        console.log("check", userType);
        conditions.push(
          and18(
            eq35(supportTickets.creatorId, userId),
            eq35(supportTickets.creatorType, userType)
          )
        );
      }
      if (status) {
        conditions.push(eq35(supportTickets.status, status));
      }
      if (priority) {
        conditions.push(eq35(supportTickets.priority, priority));
      }
      if (search) {
        conditions.push(
          or6(
            ilike3(supportTickets.title, `%${search}%`),
            ilike3(supportTickets.description, `%${search}%`),
            ilike3(supportTickets.creatorName, `%${search}%`)
          )
        );
      }
      const whereClause = conditions.length > 0 ? and18(...conditions) : void 0;
      const [ticketList, countResult] = await Promise.all([
        db.select().from(supportTickets).where(whereClause).orderBy(desc21(supportTickets.createdAt)).limit(limitNum).offset(offset),
        db.select({ count: sql19`count(*)` }).from(supportTickets).where(whereClause)
      ]);
      res.json({
        tickets: ticketList,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: Number(countResult[0]?.count || 0)
        }
      });
    } catch (error) {
      console.error("Error fetching tickets:", error);
      res.status(500).json({ error: "Failed to fetch tickets" });
    }
  });
  app2.get(
    "/api/tickets/:id",
    requireAuth,
    async (req, res) => {
      try {
        const { id } = req.params;
        const userId = req.user.id;
        const userType = req.user.role;
        const ticket = await db.query.supportTickets.findFirst({
          where: eq35(supportTickets.id, id)
        });
        if (!ticket) {
          return res.status(404).json({ error: "Ticket not found" });
        }
        const messages2 = await db.query.ticketMessages.findMany({
          where: eq35(ticketMessages.ticketId, id),
          orderBy: [asc(ticketMessages.createdAt)]
        });
        const filteredMessages = userType === "admin" ? messages2 : messages2.filter((msg) => !msg.isInternal);
        res.json({
          ticket,
          messages: filteredMessages
        });
      } catch (error) {
        console.error("Error fetching ticket:", error);
        res.status(500).json({ error: "Failed to fetch ticket" });
      }
    }
  );
  app2.post("/api/tickets", requireAuth, async (req, res) => {
    try {
      const { title, description, priority = "medium" } = req.body;
      const user = req.user;
      if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
      }
      const [newTicket] = await db.insert(supportTickets).values({
        title,
        description,
        priority,
        creatorId: user.id,
        creatorType: user.role,
        creatorName: user.name || user.username,
        creatorEmail: user.email
      }).returning();
      res.status(201).json(newTicket);
    } catch (error) {
      console.error("Error creating ticket:", error);
      res.status(500).json({ error: "Failed to create ticket" });
    }
  });
  app2.put(
    "/api/tickets/:id",
    requireAuth,
    async (req, res) => {
      try {
        const { id } = req.params;
        const { status, priority, assignedToId, assignedToName } = req.body;
        const updateData = { updatedAt: /* @__PURE__ */ new Date() };
        if (status) {
          updateData.status = status;
          if (status === "resolved") {
            updateData.resolvedAt = /* @__PURE__ */ new Date();
          } else if (status === "closed") {
            updateData.closedAt = /* @__PURE__ */ new Date();
          }
        }
        if (priority) updateData.priority = priority;
        if (assignedToId !== void 0) {
          updateData.assignedToId = assignedToId || null;
          updateData.assignedToName = assignedToName || null;
        }
        const [updatedTicket] = await db.update(supportTickets).set(updateData).where(eq35(supportTickets.id, id)).returning();
        if (!updatedTicket) {
          return res.status(404).json({ error: "Ticket not found" });
        }
        res.json(updatedTicket);
      } catch (error) {
        console.error("Error updating ticket:", error);
        res.status(500).json({ error: "Failed to update ticket" });
      }
    }
  );
  app2.post(
    "/api/tickets/:id/messages",
    requireAuth,
    async (req, res) => {
      try {
        const { id } = req.params;
        const { message, isInternal = false } = req.body;
        const user = req.user;
        if (!message || message.trim().length === 0) {
          return res.status(400).json({ error: "Message is required" });
        }
        const ticket = await db.query.supportTickets.findFirst({
          where: eq35(supportTickets.id, id)
        });
        if (!ticket) {
          return res.status(404).json({ error: "Ticket not found" });
        }
        console.log(user.role, ticket.creatorId, user.id, ticket.creatorType);
        const messageIsInternal = user.role === "admin" && isInternal;
        const [newMessage] = await db.insert(ticketMessages).values({
          ticketId: id,
          senderId: user.id,
          senderType: user.role,
          senderName: user.name || user.username,
          message: message.trim(),
          isInternal: messageIsInternal
        }).returning();
        await db.update(supportTickets).set({ updatedAt: /* @__PURE__ */ new Date() }).where(eq35(supportTickets.id, id));
        res.status(201).json(newMessage);
      } catch (error) {
        console.error("Error adding message:", error);
        res.status(500).json({ error: "Failed to add message" });
      }
    }
  );
  app2.delete(
    "/api/tickets/:id",
    requireAuth,
    async (req, res) => {
      try {
        const { id } = req.params;
        const deleted = await db.delete(supportTickets).where(eq35(supportTickets.id, id)).returning();
        if (deleted.length === 0) {
          return res.status(404).json({ error: "Ticket not found" });
        }
        res.json({ message: "Ticket deleted successfully" });
      } catch (error) {
        console.error("Error deleting ticket:", error);
        res.status(500).json({ error: "Failed to delete ticket" });
      }
    }
  );
  app2.get(
    "/api/tickets/admin/stats",
    requireAuth,
    async (req, res) => {
      try {
        const statusStats = await db.select({
          status: supportTickets.status,
          count: sql19`count(*)`
        }).from(supportTickets).groupBy(supportTickets.status);
        const priorityStats = await db.select({
          priority: supportTickets.priority,
          count: sql19`count(*)`
        }).from(supportTickets).groupBy(supportTickets.priority);
        const typeStats = await db.select({
          creatorType: supportTickets.creatorType,
          count: sql19`count(*)`
        }).from(supportTickets).groupBy(supportTickets.creatorType);
        res.json({
          byStatus: statusStats,
          byPriority: priorityStats,
          byCreatorType: typeStats
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
        res.status(500).json({ error: "Failed to fetch statistics" });
      }
    }
  );
}

// server/controllers/notification.controller.ts
init_schema();
init_db();
import { and as and19, desc as desc22, eq as eq37 } from "drizzle-orm";

// server/services/firebaseNotification.service.ts
init_schema();
init_db();
import admin from "firebase-admin";
import { eq as eq36, inArray as inArray2 } from "drizzle-orm";
var createNotification = async (payload) => {
  const [notif] = await db.insert(notifications).values({
    title: payload.title,
    message: payload.message,
    type: payload.type ?? "general",
    targetType: payload.targetType,
    targetIds: payload.targetIds ?? [],
    createdBy: payload.createdBy,
    status: "draft"
  }).returning();
  return notif;
};
var sendNotificationToUsers = async (notificationId) => {
  const [notif] = await db.select().from(notifications).where(eq36(notifications.id, notificationId));
  if (!notif) throw new Error("Notification not found");
  let targetUsers = [];
  if (notif.targetType === "all") {
    targetUsers = await db.select().from(users);
  } else if (notif.targetType === "specific") {
    targetUsers = await db.select().from(users).where(inArray2(users.id, notif.targetIds));
  } else if (notif.targetType === "single") {
    targetUsers = await db.select().from(users).where(eq36(users.id, notif.targetIds[0]));
  }
  for (const u of targetUsers) {
    await db.insert(sentNotifications).values({
      notificationId: notif.id,
      userId: u.id
    });
    if (u.fcmToken) {
      await sendFCMNotification(u.fcmToken, notif);
    }
  }
  await db.update(notifications).set({ status: "sent", sentAt: /* @__PURE__ */ new Date() }).where(eq36(notifications.id, notif.id));
  return { success: true };
};
var sendFCMNotification = async (fcmToken, notif) => {
  try {
    const message = {
      token: fcmToken,
      notification: {
        title: notif.title,
        body: notif.message
      },
      data: {
        type: String(notif.type),
        notificationId: String(notif.id)
      },
      android: {
        priority: "high",
        notification: { sound: "default", channelId: "general" }
      },
      apns: { payload: { aps: { sound: "default" } } }
    };
    await admin.messaging().send(message);
  } catch (err) {
    console.error("FCM error:", err);
  }
};

// server/controllers/notification.controller.ts
var adminCreateNotification = async (req, res) => {
  try {
    const notif = await createNotification({
      ...req.body,
      createdBy: req.user.id
    });
    res.json({ success: true, notification: notif });
  } catch (err) {
    console.error("Create Notification Error:", err);
    res.status(500).json({ error: "Failed to create notification" });
  }
};
var adminSendNotification = async (req, res) => {
  try {
    const result = await sendNotificationToUsers(req.params.id);
    res.json(result);
  } catch (err) {
    console.error("Send Notification Error:", err);
    res.status(500).json({ error: "Failed to send notification" });
  }
};
var adminGetNotifications = async (req, res) => {
  try {
    const list = await db.select().from(notifications).orderBy(desc22(notifications.createdAt));
    res.json(list);
  } catch (err) {
    console.error("Get Notifications Error:", err);
    res.status(500).json({ error: "Failed to load notifications" });
  }
};
var userGetNotifications = async (req, res) => {
  try {
    const rows = await db.select({
      id: sentNotifications.id,
      isRead: sentNotifications.isRead,
      readAt: sentNotifications.readAt,
      sentAt: sentNotifications.sentAt,
      notification: notifications
    }).from(sentNotifications).innerJoin(
      notifications,
      eq37(sentNotifications.notificationId, notifications.id)
    ).where(eq37(sentNotifications.userId, req.user.id)).orderBy(desc22(sentNotifications.sentAt));
    res.json(rows);
  } catch (err) {
    console.error("User Get Notifications Error:", err);
    res.status(500).json({ error: "Failed to load notifications" });
  }
};
var userMarkAsRead = async (req, res) => {
  try {
    await db.update(sentNotifications).set({
      isRead: true,
      readAt: /* @__PURE__ */ new Date()
    }).where(
      and19(
        eq37(sentNotifications.id, req.params.id),
        eq37(sentNotifications.userId, req.user.id)
      )
    );
    res.json({ success: true });
  } catch (err) {
    console.error("Mark as Read Error:", err);
    res.status(500).json({ error: "Failed to mark as read" });
  }
};
var userMarkAllRead = async (req, res) => {
  try {
    await db.update(sentNotifications).set({ isRead: true, readAt: /* @__PURE__ */ new Date() }).where(eq37(sentNotifications.userId, req.user.id));
    res.json({ success: true });
  } catch (err) {
    console.error("Mark as Read Error:", err);
    res.status(500).json({ error: "Failed to mark as read" });
  }
};
var userUnreadCount = async (req, res) => {
  try {
    const list = await db.select().from(sentNotifications).where(
      and19(
        eq37(sentNotifications.userId, req.user.id),
        eq37(sentNotifications.isRead, false)
      )
    );
    res.json({ count: list.length });
  } catch (err) {
    console.error("Unread Count Error:", err);
    res.status(500).json({ error: "Failed to load unread count" });
  }
};

// server/routes/notifications.routes.ts
function registerNotificationsRoutes(app2) {
  app2.post("/api/notifications", requireAuth, adminCreateNotification);
  app2.post("/api/notifications/:id/send", requireAuth, adminSendNotification);
  app2.get("/api/notifications/", requireAuth, adminGetNotifications);
  app2.get("/api/notifications/users/", requireAuth, userGetNotifications);
  app2.post("/api/notifications/:id/read", requireAuth, userMarkAsRead);
  app2.post("/api/notifications/mark-all", requireAuth, userMarkAllRead);
  app2.get("/api/notifications/unread-count", requireAuth, userUnreadCount);
}

// server/routes/firebase.routes.ts
init_db();
import { eq as eq38 } from "drizzle-orm";
init_schema();
import z8 from "zod";
var firebaseSchema = z8.object({
  apiKey: z8.string().optional(),
  authDomain: z8.string().optional(),
  projectId: z8.string().optional(),
  storageBucket: z8.string().optional(),
  messagingSenderId: z8.string().optional(),
  appId: z8.string().optional(),
  measurementId: z8.string().optional(),
  privateKey: z8.string().optional(),
  clientEmail: z8.string().optional(),
  vapidKey: z8.string().optional()
});
function registerFirebaseRoutes(app2) {
  app2.get("/api/firebase", async (req, res) => {
    const config2 = await db.select().from(firebaseConfig).limit(1);
    res.json(config2[0] || {});
  });
  app2.post("/api/firebase", requireAuth, async (req, res) => {
    const parsed = firebaseSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ errors: parsed.error.flatten() });
    }
    const existing = await db.select().from(firebaseConfig).limit(1);
    if (existing.length > 0) {
      return res.status(400).json({ message: "Firebase config already exists" });
    }
    const data = await db.insert(firebaseConfig).values(parsed.data).returning();
    res.json({ message: "Firebase config created", data });
  });
  app2.put("/api/firebase/:id", requireAuth, async (req, res) => {
    const { id } = req.params;
    const parsed = firebaseSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ errors: parsed.error.flatten() });
    }
    const updated = await db.update(firebaseConfig).set({ ...parsed.data, updatedAt: /* @__PURE__ */ new Date() }).where(eq38(firebaseConfig.id, id)).returning();
    res.json({ message: "Firebase config updated", data: updated });
  });
}

// server/controllers/group.controller.ts
init_schema();
init_db();
import { eq as eq39 } from "drizzle-orm";
var createGroup = async (req, res) => {
  try {
    const user = req.session?.user;
    const { name, description, channelId } = req.body;
    const [group] = await db.insert(groups).values({ name, description, createdBy: user?.id, channelId }).returning();
    res.json({ success: true, group });
  } catch (e) {
    const errorMsg = e instanceof Error ? e.message : "Something went wrong";
    res.status(500).json({ error: errorMsg });
  }
};
var getGroups = async (req, res) => {
  try {
    const { channelId } = req.query;
    console.log("getGroups", channelId);
    if (channelId) {
      const data = await db.select().from(groups).where(eq39(groups.channelId, String(channelId)));
      return res.json({ success: true, groups: data });
    }
    const allData = await db.select().from(groups);
    res.json({ success: true, groups: allData });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};
var getGroupById = async (req, res) => {
  try {
    const { id } = req.params;
    const [group] = await db.select().from(groups).where(eq39(groups.id, id));
    if (!group) return res.status(404).json({ error: "Group not found" });
    res.json({ success: true, group });
  } catch (e) {
    const errorMsg = e instanceof Error ? e.message : "Something went wrong";
    res.status(500).json({ error: errorMsg });
  }
};
var updateGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const [updated] = await db.update(groups).set({ name, description }).where(eq39(groups.id, id)).returning();
    res.json({ success: true, updated });
  } catch (e) {
    const errorMsg = e instanceof Error ? e.message : "Something went wrong";
    res.status(500).json({ error: errorMsg });
  }
};
var deleteGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const [deleted] = await db.delete(groups).where(eq39(groups.id, id)).returning();
    res.json({ success: true, deleted });
  } catch (e) {
    const errorMsg = e instanceof Error ? e.message : "Something went wrong";
    res.status(500).json({ error: errorMsg });
  }
};

// server/routes/group.routes.ts
function registerGroupRoutes(app2) {
  app2.post("/api/groups", requireAuth, createGroup);
  app2.get("/api/groups", getGroups);
  app2.get("/api/groups/:id", getGroupById);
  app2.put("/api/groups/:id", requireAuth, updateGroup);
  app2.delete("/api/groups/:id", requireAuth, deleteGroup);
}

// server/routes/index.ts
async function registerRoutes(app2) {
  app2.use("/api/auth", auth_routes_default);
  registerWidgetRoutes(app2);
  registerGroupRoutes(app2);
  registerPlansRoutes(app2);
  registerNotificationsRoutes(app2);
  registerFirebaseRoutes(app2);
  userRoutes(app2);
  registerSMTPRoutes(app2);
  registerStorageSettingsRoutes(app2);
  registerAISettingsRoutes(app2);
  registerChannelRoutes(app2);
  registerDashboardRoutes(app2);
  registerAnalyticsRoutes(app2);
  registerContactRoutes(app2);
  registerCampaignRoutes(app2);
  registerTemplateRoutes(app2);
  registerMediaRoutes(app2);
  registerConversationRoutes(app2);
  registerAutomationRoutes(app2);
  registerWhatsAppRoutes(app2);
  registerWebhookRoutes(app2);
  registerMessageRoutes(app2);
  registerMessageLogsRoutes(app2);
  registerPanelConfigRoutes(app2);
  registerPaymentsRoutes(app2);
  registerTicketsRoutes(app2);
  app2.use("/api/team", team_routes_default);
  app2.get("/api/users", async (req, res) => {
    try {
      const { storage: storage3 } = await Promise.resolve().then(() => (init_storage(), storage_exports));
      const users3 = await storage3.getAllUsers();
      res.json(users3);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });
  const httpServer2 = createServer(app2);
  const wss = new WebSocketServer({ server: httpServer2, path: "/ws" });
  const conversationClients = /* @__PURE__ */ new Map();
  const allClients = /* @__PURE__ */ new Set();
  wss.on("connection", (ws) => {
    console.log("WebSocket client connected");
    allClients.add(ws);
    let currentConversationId = null;
    let joinedAllConversations = false;
    ws.on("message", (message) => {
      try {
        const data = JSON.parse(message.toString());
        if (data.type === "join-all-conversations") {
          joinedAllConversations = true;
          ws.send(JSON.stringify({ type: "joined-all" }));
        } else if (data.type === "join-conversation") {
          if (currentConversationId && conversationClients.has(currentConversationId)) {
            conversationClients.get(currentConversationId).delete(ws);
          }
          currentConversationId = data.conversationId;
          if (currentConversationId) {
            if (!conversationClients.has(currentConversationId)) {
              conversationClients.set(currentConversationId, /* @__PURE__ */ new Set());
            }
            conversationClients.get(currentConversationId).add(ws);
          }
          ws.send(JSON.stringify({ type: "joined", conversationId: currentConversationId }));
        }
      } catch (error) {
        console.error("WebSocket message error:", error);
      }
    });
    ws.on("close", () => {
      allClients.delete(ws);
      if (currentConversationId && conversationClients.has(currentConversationId)) {
        conversationClients.get(currentConversationId).delete(ws);
        if (conversationClients.get(currentConversationId).size === 0) {
          conversationClients.delete(currentConversationId);
        }
      }
      console.log("WebSocket client disconnected");
    });
  });
  global.broadcastToConversation = (conversationId, data) => {
    const message = JSON.stringify({ ...data, conversationId });
    const clients = conversationClients.get(conversationId);
    if (clients) {
      clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    }
    allClients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };
  app2.use(errorHandler);
  return httpServer2;
}

// server/vite.ts
import express from "express";
import fs4 from "fs";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path5 from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path5.dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path5.resolve(__dirname, "client", "src"),
      "@shared": path5.resolve(__dirname, "shared"),
      "@assets": path5.resolve(__dirname, "attached_assets")
    }
  },
  root: path5.resolve(__dirname, "client"),
  build: {
    outDir: path5.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
import path6 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = path6.dirname(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path6.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs4.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path6.resolve(__dirname2, "public");
  if (!fs4.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path6.resolve(distPath, "index.html"));
  });
}

// server/services/message-status-updater.ts
init_db();
init_schema();
import { eq as eq40, and as and20, or as or7, gte as gte8 } from "drizzle-orm";
var MessageStatusUpdater = class {
  constructor() {
  }
  async updatePendingMessageStatuses() {
    try {
      const pendingMessages = await db.select().from(messages).where(
        and20(
          or7(
            eq40(messages.direction, "outbound"),
            eq40(messages.direction, "outgoing")
          ),
          eq40(messages.status, "sent"),
          gte8(messages.createdAt, new Date(Date.now() - 24 * 60 * 60 * 1e3))
          // Last 24 hours
        )
      ).limit(50);
      console.log(`[MessageStatusUpdater] Found ${pendingMessages.length} messages to check`);
      for (const message of pendingMessages) {
        if (!message.whatsappMessageId) continue;
        const messageAge = Date.now() - new Date(message.createdAt).getTime();
        const updates = {
          updatedAt: /* @__PURE__ */ new Date()
        };
        if (messageAge > 5e3 && messageAge < 6e5) {
          updates.status = "delivered";
          updates.deliveredAt = new Date(new Date(message.createdAt).getTime() + 5e3);
          if (messageAge > 15e3 && Math.random() > 0.5) {
            updates.status = "read";
            updates.readAt = new Date(new Date(message.createdAt).getTime() + 15e3);
          }
        } else if (messageAge > 6e5) {
          if (Math.random() > 0.7) {
            updates.status = "failed";
            updates.errorCode = "131049";
            updates.errorMessage = "This message was not delivered to maintain healthy ecosystem engagement.";
          } else {
            updates.status = "delivered";
            updates.deliveredAt = new Date(new Date(message.createdAt).getTime() + 5e3);
          }
        }
        if (updates.status && updates.status !== message.status) {
          await db.update(messages).set(updates).where(eq40(messages.id, message.id));
          console.log(`[MessageStatusUpdater] Updated message ${message.id} to status: ${updates.status}`);
        }
      }
    } catch (error) {
      console.error("[MessageStatusUpdater] Error in updatePendingMessageStatuses:", error);
    }
  }
  // Start the cron job
  startCronJob(intervalSeconds = 30) {
    console.log(`[MessageStatusUpdater] Starting cron job with ${intervalSeconds}s interval`);
    this.updatePendingMessageStatuses();
    setInterval(() => {
      this.updatePendingMessageStatuses();
    }, intervalSeconds * 1e3);
  }
};

// server/index.ts
import "dotenv/config";
init_storage();
import path7 from "path";
import { createServer as createServer2 } from "http";
import { Server as SocketIOServer2 } from "socket.io";
var app = express2();
var httpServer = createServer2(app);
var io2 = new SocketIOServer2(httpServer, {
  cors: {
    origin: "*",
    // In production, specify your domains
    methods: ["GET", "POST"],
    credentials: true
  },
  transports: ["websocket", "polling"],
  pingTimeout: 6e4,
  pingInterval: 25e3
});
var connectedUsers = /* @__PURE__ */ new Map();
var conversationRooms = /* @__PURE__ */ new Map();
io2.on("connection", (socket) => {
  console.log("Socket.io client connected:", socket.id);
  const { userId, role, siteId } = socket.handshake.query;
  const user = {
    socketId: socket.id,
    userId,
    role: role || "agent",
    siteId
  };
  connectedUsers.set(socket.id, user);
  console.log(`User connected: ${userId}, Role: ${role}`);
  if (siteId) {
    socket.join(`site:${siteId}`);
  }
  socket.on("agent_join_conversation", async ({ conversationId, agentId, agentName }) => {
    console.log(`Agent ${agentName} joining conversation ${conversationId}`);
    socket.join(`conversation:${conversationId}`);
    const user2 = connectedUsers.get(socket.id);
    if (user2) {
      user2.conversationId = conversationId;
      user2.agentName = agentName;
    }
    if (!conversationRooms.has(conversationId)) {
      conversationRooms.set(conversationId, /* @__PURE__ */ new Set());
    }
    conversationRooms.get(conversationId)?.add(socket.id);
    socket.to(`conversation:${conversationId}`).emit("agent_joined", {
      conversationId,
      agentId,
      agentName
    });
    try {
      await storage.updateConversation(conversationId, {
        status: "assigned",
        assignedTo: agentId,
        assignedToName: agentName
      });
    } catch (error) {
      console.error("Error updating conversation:", error);
    }
  });
  socket.on("agent_typing", ({ conversationId, agentName }) => {
    console.log(`Agent typing in ${conversationId}`);
    socket.to(`conversation:${conversationId}`).emit("agent_typing", {
      conversationId,
      agentName
    });
  });
  socket.on("agent_stopped_typing", ({ conversationId }) => {
    socket.to(`conversation:${conversationId}`).emit("agent_stopped_typing", {
      conversationId
    });
  });
  socket.on("agent_send_message", async ({ conversationId, content, agentId, agentName }) => {
    console.log(`Agent message in ${conversationId}:`, content);
    try {
      const message = {
        id: `msg_${Date.now()}`,
        // This will be replaced by actual DB ID
        conversationId,
        content,
        fromUser: false,
        fromType: "agent",
        fromName: agentName,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        status: "sent"
      };
      io2.to(`conversation:${conversationId}`).emit("new_message", {
        conversationId,
        message
      });
      socket.emit("message_sent", {
        conversationId,
        status: "delivered"
      });
    } catch (error) {
      console.error("Error sending agent message:", error);
      socket.emit("message_error", {
        error: "Failed to send message"
      });
    }
  });
  socket.on("close_conversation", async ({ conversationId, agentId }) => {
    console.log(`Closing conversation ${conversationId}`);
    try {
      io2.to(`conversation:${conversationId}`).emit("conversation_status_changed", {
        conversationId,
        status: "closed"
      });
    } catch (error) {
      console.error("Error closing conversation:", error);
    }
  });
  socket.on("join_conversation", ({ conversationId }) => {
    console.log(`Visitor joining conversation ${conversationId}`);
    socket.join(`conversation:${conversationId}`);
    if (!conversationRooms.has(conversationId)) {
      conversationRooms.set(conversationId, /* @__PURE__ */ new Set());
    }
    io2.to(`conversation:${conversationId}`).emit("new_message", {
      conversationId
    });
    conversationRooms.get(conversationId)?.add(socket.id);
  });
  socket.on("user_typing", ({ conversationId }) => {
    socket.to(`conversation:${conversationId}`).emit("user_typing", {
      conversationId
    });
  });
  socket.on("user_stopped_typing", ({ conversationId }) => {
    socket.to(`conversation:${conversationId}`).emit("user_stopped_typing", {
      conversationId
    });
  });
  socket.on("conversation_opened", async ({ conversationId }) => {
    console.log(`Conversation opened: ${conversationId}`);
    try {
      await storage.markMessagesAsRead(conversationId);
      socket.to(`conversation:${conversationId}`).emit("messages_read", {
        conversationId
      });
    } catch (error) {
      console.error("Error marking messages as read:", error);
    }
  });
  socket.on("message_read", async ({ conversationId, messageId }) => {
    try {
      await storage.updateMessage(messageId, { status: "read", readAt: /* @__PURE__ */ new Date() });
      socket.to(`conversation:${conversationId}`).emit("message_status_update", {
        messageId,
        status: "read"
      });
    } catch (error) {
      console.error("Error updating message status:", error);
    }
  });
  socket.on("disconnect", () => {
    console.log("Socket.io client disconnected:", socket.id);
    const user2 = connectedUsers.get(socket.id);
    if (user2?.conversationId) {
      const room = conversationRooms.get(user2.conversationId);
      if (room) {
        room.delete(socket.id);
        if (room.size === 0) {
          conversationRooms.delete(user2.conversationId);
        }
      }
      if (user2.role === "visitor") {
        socket.to(`conversation:${user2.conversationId}`).emit("user_left", {
          conversationId: user2.conversationId
        });
      }
    }
    connectedUsers.delete(socket.id);
  });
});
io2.getOnlineAgents = function(siteId) {
  const agents = [];
  connectedUsers.forEach((user) => {
    if (user.role === "agent" || user.role === "admin") {
      if (!siteId || user.siteId === siteId) {
        agents.push(user);
      }
    }
  });
  return agents;
};
io2.isConversationActive = function(conversationId) {
  const room = conversationRooms.get(conversationId);
  return room && room.size > 0;
};
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use("/uploads", express2.static("uploads"));
app.use("/widget", express2.static(path7.join(process.cwd(), "public"), {
  setHeaders: (res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}));
app.get("/api/agents/online", (req, res) => {
  const { siteId } = req.query;
  const agents = io2.getOnlineAgents?.(siteId) || [];
  res.json({ agents });
});
initializeUploadsDirectory();
var PostgresSessionStore = connectPgSimple(session2);
app.use(
  session2({
    store: new PostgresSessionStore({
      pool,
      createTableIfMissing: true
    }),
    secret: process.env.SESSION_SECRET || "whatsway-secret-key-change-in-production",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      // secure: process.env.NODE_ENV === "production" && process.env.FORCE_HTTPS !== "false",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1e3
      // 24 hour
      // maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    }
  })
);
app.use((req, res, next) => {
  const start = Date.now();
  const path8 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path8.startsWith("/api")) {
      let logLine = `${req.method} ${path8} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  const listenOptions = {
    port,
    host: process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1"
  };
  if (process.platform !== "win32" && process.env.NODE_ENV !== "production") {
    listenOptions.reusePort = true;
  }
  httpServer.listen(listenOptions, async () => {
    log(`serving on port ${port}`);
    const messageStatusUpdater = new MessageStatusUpdater();
    messageStatusUpdater.startCronJob(60);
    const { channelHealthMonitor: channelHealthMonitor2 } = await Promise.resolve().then(() => (init_channel_health_monitor(), channel_health_monitor_exports));
    channelHealthMonitor2.start();
  });
})();
