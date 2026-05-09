---
layout: post
title: Jetson Orin Nano CSI Camera Setup Notes
date: 2026-05-09 00:20:00+0900
description: A place to collect embedded camera setup, debugging, and deployment notes.
tags: [jetson, camera, deployment, engineering-note]
categories: [Sensors]
related_posts: false
---

Embedded perception work usually fails in very practical places: camera bring-up, driver compatibility, power, thermal limits, inference latency, and logging.

This note will collect the small details from Jetson Orin Nano and CSI camera experiments so they do not disappear after the system finally works.

## Checklist

- Record the exact JetPack version
- Record camera module and cable orientation
- Save working camera test commands
- Measure inference latency and frame drops
- Keep a table of failure symptoms and fixes

The point is to make deployment work reproducible enough that future experiments can focus on perception behavior, not repeated setup friction.
