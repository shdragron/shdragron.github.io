---
layout: post
title: "LiDAR-Camera Calibration: Single Normal Vector is Not Enough"
date: 2026-05-09 00:10:00+0900
description: Notes on why calibration assumptions need to be checked against downstream perception behavior.
tags: [calibration, sensor-fusion, perception, engineering-note]
categories: [Sensors]
related_posts: false
---

Calibration often looks like a solved preprocessing step until the downstream perception result starts behaving strangely.

A clean geometric assumption can be useful, but real sensor setups include mounting errors, imperfect observations, synchronization issues, and environments that do not always satisfy the assumptions used during calibration.

## Questions to track

- What error does the calibration method actually minimize?
- How does that error appear in image space, point-cloud space, and BEV space?
- Does a visually acceptable alignment still hurt the perception model?
- Which downstream tasks are most sensitive to calibration drift?

## Direction

The goal of this project is to connect calibration quality with perception quality. A calibration method should be judged not only by a geometric residual, but also by how stable the full perception system becomes after using it.
