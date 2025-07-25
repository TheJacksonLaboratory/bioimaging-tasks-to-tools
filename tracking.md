---
title: "Tracking cells and particles"
---

Tracking is an essential component of analyzing time-lapse studies. Essentially, it involves detecting and labeling objects, frame-by-frame, and then linking the objects between frames. This way, objects can be followed over time. It provides insight into dynamic processes, such as cell migration & cell fate, as well as organelle dynamics.  

## Tools for tracking cells and particles

:::{.callout-note collapse='true' icon="false"}
# Fiji

[Fiji](generalist_tools.md#fiji) provides access to [TrackMate](https://imagej.net/plugins/trackmate/), a well-established standout in terms of object and particle tracking. It provides a wide range of tracking algorithms, including simple linking, as well as more complex algorithms like the Linear Assignment Problem (LAP) tracking. TrackMate can interface with a wide range of segmentation or spot detection algorithms, so it be used for tracking cells, particles, and other objects in 2D and 3D images of various modalities. It also provides track visualization and analysis tools. For a helpful guide to getting started with TrackMate, see this [Microcourse Youtube video](https://youtu.be/7HWtaikIFcs?t=2).  
:::

:::{.callout-note collapse='true' icon="false"}
# CellProfiler

[CellProfiler](generalist_tools.md#cellprofiler) includes a [TrackObjects](https://cellprofiler-manual.s3.amazonaws.com/CellProfiler-4.2.6/modules/objectprocessing.html#trackobjects) module that can be used for tracking previously identified Objects over the course of a series of frames. It implements a number of different tracking methods, ranging from a simple overlap approach to LAP tracking. The module can provide a wide range of measurements, such as displacements, object lifetimes, and lineage information. For an example pipeline using TrackObjects, see the [CellProfiler Examples](https://cellprofiler.org/examples/).  
:::

:::{.callout-note collapse='true' icon="false"}
# napari

[napari](generalist_tools.md#napari) provides a [Tracks layer](https://napari.org/stable/howtos/layers/tracks.html) which can be useful for visualization of tracking data and has a number of tracking plugins available on the [napari-hub](https://napari-hub.org). A few standouts include: [btrack](https://www.napari-hub.org/plugins/btrack.html) a Bayesian multi-object tracker and [napari-trackastra](https://www.napari-hub.org/plugins/napari-trackastra.html) a transformer-based cell tracker.  
:::

:::{.callout-note collapse='true' icon="false"}
# ultrack

[ultrack](https://royerlab.github.io/ultrack/index.html) is a large-scale versatile cell tracking package that considers a set of multiple segmentation hypotheses and picks the segments that are most consistent over time, making it less susceptible to mistakes when traditional segmentation fails. it is available as a Python package that is also a [napari plugin](https://royerlab.github.io/ultrack/napari.html) with a GUI widget. Additionally, ultrack provides a [Fiji plugin](https://imagej.github.io/plugins/ultrack) which uses TrackMate for visualization.
:::
