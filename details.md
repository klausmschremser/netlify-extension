# Otterly AI Agentic Analytics Extension

![Netlify Logo](/assets/netlify-logo.png)

## Overview

The Otterly AI Agentic Analytics extension provides server-side analytics tracking for your Netlify sites. It automatically captures visitor data and sends it to the Otterly AI analytics platform, giving you insights into your site's traffic patterns.

## Features

- **Server-side tracking**: Analytics data is collected at the edge before reaching your site
- **Automatic data capture**: Tracks user agent, referrer, IP address, host, and request information
- **Non-blocking**: Uses fire-and-forget requests to avoid impacting your site's performance
- **Privacy-focused**: Personal Identifiable Information (PII) is anonyomized

## Setup

### 1. Install the Extension

Install this extension on your Netlify team from the Extensions page.

### 2. Configure Environment Variable

Add your Otterly AI API key as an environment variable:

1. Go to your site's Settings > Environment Variables
2. Add a new variable named `AGENTIC_ANALYTICS_API_KEY`
3. Set its value to your Otterly AI API key
4. Save and redeploy your site

### 3. Configure Team Settings

Configure the extension settings in the Team Configuration page to customize how the analytics data is collected.

## How It Works

Once installed and configured, the extension will:

1. Run an edge function on every request to your site
2. Capture visitor information (user agent, referrer, IP, etc.)
3. Send this data to `https://otterly.ai/agentic-analytics/api/`
4. Continue processing the request normally without delay

## Support

For questions or issues, please contact Otterly AI support or visit our documentation at [otterly.ai](https://otterly.ai).
