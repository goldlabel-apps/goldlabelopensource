---
draft: false
order: 25
category: "examples"
slug: "/examples/growspy"
title: "Growspy"
description: "Plant Monitoring System"
image: "/jpg/examples/growspy.jpg"
keywords: "growspy, product"
icon: "spy"
---
###  The story so far
As growers what we need is the ability to monitor Temperature, Humidity, Light & Soil Moisture data from a device connected to a Cloud API and view it using a phone. The data should go back as long as a week and be graphs

### Software

> The Web App connects to the API and subscribes to real time updates to Spy data. Every time a Spy tings, it automagically updates

- Growspy.app
- RESTful API
- GitHub

### Device

Monitors Temperature, Humidity, Light & Soil Moisture and sends readings to Growspy API every 5 minutes. Readings are monitored on any mobile phone

When the Pimoroni Enviro Grow is awake it can also connect to the internet via your household wi-fi and post the readings data it has collected to the API in the cloud. This takes up a lot of power, but it's kinda critical, so we'll do it every 5 mins aswell