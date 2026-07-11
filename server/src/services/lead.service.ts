import { prisma } from "../lib/prisma";

interface CreateLeadInput {
  name: string;
  email: string;
  company: string;
  phone?: string;
}

export const createLead = async (input: CreateLeadInput) => {
  return prisma.lead.create({
    data: {
      name: input.name,
      email: input.email,
      company: input.company,
      phone: input.phone,
    },
  });
};

interface CreateContactRequestInput {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const createContactRequest = async (input: CreateContactRequestInput) => {
  return prisma.lead.create({
    data: {
      name: input.name,
      email: input.email,
      company: input.company,
      message: input.message,
      source: "contact",
    },
  });
};
