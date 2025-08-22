-- CreateTable
CREATE TABLE "public"."Tenant" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Agent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Assistant IA',
    "systemPrompt" TEXT,
    "voiceId" TEXT,
    "twilioPhoneNumber" TEXT,
    "elevenlabsAgentId" TEXT,
    "calendlyLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_ownerEmail_key" ON "public"."Tenant"("ownerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_stripeCustomerId_key" ON "public"."Tenant"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_twilioPhoneNumber_key" ON "public"."Agent"("twilioPhoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_elevenlabsAgentId_key" ON "public"."Agent"("elevenlabsAgentId");

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
