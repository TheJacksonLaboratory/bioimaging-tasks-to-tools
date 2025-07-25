---
title: "Commonly used generalist tools"
---

## Fiji

[Fiji](https://fiji.sc) is a distribution of the [ImageJ](https://imagej.net/software/imagej/) open-source software package for analyzing scientific images. Fiji (and ImageJ) is Java-based and has an easy-to-install  graphical user interface (GUI) application for Linux, macOS, and Windows. Importantly, Fiji bundles in many popular plugins for image analysis and includes an installer and updater mechanism. A list of all plugins can be found [here](https://imagej.net/list-of-extensions). It has robust support for [macros](https://imagej.net/scripting/macro), including a [recorder](https://imagej.net/scripting/macro#the-recorder), as well as [scripting](https://imagej.net/scripting/). Thanks to the [Bio-formats Importer](https://imagej.net/formats/bio-formats), Fiji can open a wide range of file formats, including many [vendor specific and proprietary ones](https://bio-formats.readthedocs.io/en/stable/supported-formats.html). Overall, Fiji is extremely flexible: it can act as an image viewer, be used for annotation, or serve as a flexible image analysis platform. Importantly, it has a very large and diverse user base so getting help can be easy. For an excellent "Getting started" tutorial, see this [I2K2022 Introduction to Fiji video](https://www.youtube.com/watch?v=HUOvVakvGcY).


## CellProfiler

[CellProfiler](https://cellprofiler.org) is a Python-based software package focused on image processing and analysis. It has an easy-to-install graphical user interface (GUI) application for macOS and Windows that enables setting up `pipelines` that include multiple processing and analysis steps, from reading in the image to exporting a data table. In this way, it was designed to permit batch analysis of images without requiring scripting/coding. It has a wide range of image (pre)processing algorithms implemented as modules, along with extensive in-app documentation. However, it has limited viewing capabilities and no annotation tools. Similarly to Fiji, CellProfiler uses Bio-formats to read a wide range of image file formats. At present, CellProfiler has a modest and experimental [plugin ecosystem](https://github.com/CellProfiler/CellProfiler-plugins). For an excellent "Getting started" tutorial, see this [I2K2022 Introduction to CellProfiler video](https://www.youtube.com/watch?v=YkGyUUapng4).

## QuPath

[QuPath](https://qupath.github.io) is a Java-based image visualization, annotation, and analysis package. It has an easy-to-install graphical user interface (GUI) application for Linux, macOS, and Windows. While many associate QuPath with digital pathology applications, it is actually a general 2D-focused tool that enables manual annotation, as well as automated pixel and object classification. It supports reading [a wide range of image formats](https://qupath.readthedocs.io/en/stable/docs/intro/formats.html#supported-image-formats) (including those from popular slide scanners) using Bio-formats (as Fiji and CellProfiler), as well as OpenSlide. Importantly, QuPath has excellent performance for large 2D images, like whole slide images, without the need for manual tiling. A Command History and [Groovy scripting](https://qupath.readthedocs.io/en/stable/docs/scripting/index.html) can be used to automate workflows. QuPath has a [modest, but powerful extension ecosystem](https://qupath.readthedocs.io/en/stable/docs/intro/extensions.html#extensions), but lacks a central listing. If you're familiar with Fiji, but new to QuPath, you may want to see this [QuPath for Fiji users I2K2022 vieo](https://www.youtube.com/watch?v=xW2Ya205nvo), otherwise this [Introduction to QuPath  video](https://www.youtube.com/watch?v=mvZlU_fI75o) from Samples to Knowledge 2023 is a good place to start. Finally, for an overview of core QuPath workflow concepts, including annotations, detections, and classifiers, please see this [QuPath Concepts video from 2023 Samples to Knowledge](https://www.youtube.com/watch?v=jb--T5KtLoU).

## OMERO.iviewer

[OMERO.iviewer](https://www.openmicroscopy.org/omero/iviewer/) is a powerful web-based viewer for images managed using the [OMERO](https://www.openmicroscopy.org/omero/) data management system. OMERO.iviewer permits performant browsing of large multichannel images remotely (it does not possess 3D rendering capability). Additionally, it has annotation tools for drawing and labeling regions of interest, as well as making simple measurements.

## napari

[napari](https://napari.org) is a Python image visualization and annotation application. While typically installed as a Python package, it does have [a bundled installation with a built-in Python environment](https://napari.org/stable/tutorials/fundamentals/installation_bundle_conda.html) on Linux, macOS, and Windows. napari provides a graphical user interface (GUI) for viewing n-dimensional data, such as images, as well as annotating with points, polygons, or labels. While napari does not include any built-in analysis tools, it seamlessly integrates with [the Scientific Python ecosystem](https://scientific-python.org/specs/core-projects/), as well as Python libraries, thanks to a built-in Python console and Python API. Further, it is [a robust ecosystem of plugins](https://www.napari-hub.org) that enable a wide range of file import, analysis (including machine learning), and annotation functions. For an overview of its capabilities, see the [Volume Imaging Australia webinar (Oct. 2024) by Juan Nunez-Iglesias](https://www.youtube.com/watch?v=Hi_MaWrb28o).

## 3D Slicer

[3D Slicer](https://www.slicer.org) is free, open source software for visualization, processing, segmentation, registration, and analysis of medical/biomedical (and other) 3D images and meshes. It supports visualizing a wide range of datasets, including images, segmentations, surfaces, annotations, transformations, etc., in 2D, 3D, and 4D. It has an easy-to-install graphical user interface (GUI) application for Linux, macOS, and Windows. 3D Slicer is particularly well-suited for working with modalities like computed tomography (CT) or magnetic resonance imaging (MRI), but microscopy is also supported. It has a wide range of built-in tools for image segmentation, registration, and visualization. Additionally, it has [a large ecosystem of >150 extensions](https://extensions.slicer.org/catalog/All/30822/macosx) that can be installed to add functionality. In addition to [the documentation](https://slicer.readthedocs.io/en/latest/), 3D Slicer has [a variety of tutorials](https://training.slicer.org) and [an active support and discussion forum](https://discourse.slicer.org).

---


## Finding more tools

- For a more in-depth curated, categorized listing of open source bioimage analysis tools, see this [`awesome` list](https://github.com/hallvaaw/awesome-biological-image-analysis#awesome-biological-image-analysis-).  
&nbsp;
- The [BioImage Informatics Index (Biii)](https://biii.eu), also called "BISE" is a community-curated search engine for finding bioimage analysis software tools, workflows, and training materials.
