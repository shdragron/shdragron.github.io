---
layout: post
title: Why BEV Models Fail under Small Camera Rotation
date: 2026-05-09 00:00:00+0900
description: A starting research log for studying viewpoint-change robustness in BEV perception.
tags: [bev, perception, robustness, research-log]
categories: [Computer Vision]
featured: true
related_posts: false
---

This note is the starting point for a research log on BEV perception robustness.

The question I want to keep asking is simple: if a multiview camera model performs well on a clean benchmark, what happens when the camera viewpoint changes slightly?

Small perturbations are easy to dismiss, but real vehicles rarely preserve ideal camera geometry forever. Mounting tolerances, vibration, road slope, repair work, and calibration drift can all change the visual geometry that a model receives.

## What I want to measure

- How output quality changes under pitch, yaw, and roll perturbations
- Whether failures appear uniformly or concentrate in specific regions of BEV space
- Which object classes or semantic regions are most sensitive
- Whether qualitative failures match the numerical metrics

## Why this matters

Robustness is not only about improving a score. For autonomous driving, it is also about knowing when a perception output should not be trusted.

This log will collect experiments, failed assumptions, visualizations, and implementation notes as the project develops.
