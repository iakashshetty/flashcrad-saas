import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from '@google/generative-ai';

// Example middleware function in Next.js
export function middleware(request) {
  // Use NextResponse to modify the response
  const response = NextResponse.next();

  // Example usage of GoogleGenerativeAI
  // This is a placeholder for whatever functionality GoogleGenerativeAI provides
  const aiResponse = GoogleGenerativeAI.generateText("Hello, world!");

  // Log the AI response or modify the Next.js response based on AI output
  console.log(aiResponse);

  return response;
}
