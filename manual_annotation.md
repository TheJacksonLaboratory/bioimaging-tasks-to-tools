---
title: "Manually annotating regions of interest"
---

Manual annotation of images can be an important image analysis step, for example to indicate regions of interest (ROI) for further analysis or to provide ground-truth for training machine learning (ML) models. Examples include marking tumor regions in a histopathology image, indicating cell nuclei in a fluorescence image, or outlining neurons in an electron microscopy image. Annotations can include:

* **labels**, used to assign every pixel of an object to a class or category
* **bounding boxes**, used to indicate the location and size of an object
* **polygons**, (even if drawn free-hand) used to outline ROIs
* **points**, used to mark specific coordinates

## General 2D images

Annotating 2D images is a common task and there are many tools available for images that are 2D (or 2D planes of 3D images) and do not exceed typical memory limits of a desktop computer. Here we highlight three popular tools that can be used for this purpose.

## Tools for general manual annotations of 2D images

:::{.callout-note collapse='true' icon="false"}
# OMERO.iviewer

[OMERO.iviewer](generalist_tools.md#omeroiviewer) can be used for annotating images within the OMERO data management system. It permits performant annotation of ROIs for 2D images and planes. Annotations can include points, arrows, lines, polylines, and polygons. Note that by holding down the Shift key, the polyline and polygon tools allow for drawing freehand annotations. Importantly, the annotations can also have attached comments and provide information regarding the area/length of the ROI. The ROI list is linked to the location of the ROI in the image, enabling easy navigation of annotations. Finally, the ROI table can be exported as a spreadsheet for further analysis. For more information, see the [OMERO.iviewer ROI documentation](https://omero-guides.readthedocs.io/en/latest/iviewer/docs/iviewer_rois.html). A brief video tutorial of the main features is available from the [I2K2020 OMERO iviewer workshop](https://www.youtube.com/watch?v=xshaOwmoqe0&).
:::

:::{.callout-note collapse='true' icon="false"}
# Fiji

[Fiji](generalist_tools.md#fiji) provides basic, flexible tools for marking regions of interest and an ROI manager for browsing and saving the regions (a dedicated file format is used). Built-in [Measurements functionality](https://imagej.net/ij/docs/guide/146-30.html#sub:Set-Measurements...) allows getting shape and intensity measurements for marked regions. Finally, the plugin ecosystem also provides additional annotation tools, for example [AnnotatorJ](https://imagej.net/plugins/annotatorj), which enables instance and semantic object annotations, as well as bounding box annotations.  
:::

:::{.callout-note collapse='true' icon="false"}
# napari

[napari](generalist_tools.md#napari) provides a Labels layer that enables "painting" over objects/regions in an image to assign those regions into different classes indicated by different integer values (and colors). 
These annotations are saved as image files. Additionally, Points and Shapes layers can be used to mark coordinates of interest or indicate areas of interest. For these, the annotations are saved as data tables of coordinates. In addition to the built-in tools, the plugin ecosystem provides a large number of additional annotations tools (search [the napari-hub](https://napari-hub.org)). However, napari is presently not well-suited for annotating multiscale images, such as whole slide scans.
:::

## Large 2D and multiscale images

Annotating large images, which exceed available memory, or multiscale (pyramidal) images, such as whole slide scans, can be more challenging, as not all tools can handle these image types well. The following tools are well-suited for this purpose, but can also be used for general 2D images.

## Tools for annotating large, multiscale (pyramidal) images

:::{.callout-note collapse='true' icon="false"}
# OMERO.iviewer

[OMERO.iviewer](generalist_tools.md#omeroiviewer) can be used for annotating images within the OMERO data management system. It permits performant annotation of ROIs for 2D images and planes, even for the case of very large or multiscale (pyramidal) images. Annotations can include points, arrows, lines, polylines, and polygons. Note that by holding down the Shift key, the polyline and polygon tools allow for drawing freehand annotations. Importantly, the annotations can also have attached comments and provide information regarding the area/length of the ROI. The ROI list is linked to the location of the ROI in the image, enabling easy navigation of annotations. Finally, the ROI table can be exported as a spreadsheet for further analysis. For more information, see the [OMERO.iviewer ROI documentation](https://omero-guides.readthedocs.io/en/latest/iviewer/docs/iviewer_rois.html). A brief video tutorial of the main features is available from the [I2K2020 OMERO iviewer workshop](https://www.youtube.com/watch?v=xshaOwmoqe0&).  
:::

:::{.callout-note collapse='true' icon="false"}
# QuPath

[QuPath](generalist_tools.md#qupath) has robust 2D annotation tools for both free-form and polygonal annotations, as well as points. It is particularly well adapted for working with large, multiscale (pyramidal) images, such as whole slide images. It provides a "wand" tool that is zoom-aware and can enable rapid annotation of ROIs at different zoom levels. QuPath provides shape-based measurements (area, perimeter, length, etc.), but pixel intensity measurements can also be computed on-demand. Importantly, annotations can easily be assigned to classes, enabling them to be used for classification tasks. For a video tutorial of the annotation tools in QuPath, please see the [2023 Samples to Knowledge Annotation session](https://www.youtube.com/watch?v=7QmSYZsyBOI).
:::

## 3D images

Annotating 3D images can be challenging, because of the limitations of the 2D screen and mouse. Using tools specialized for 2D, you typically have to annotate 3D images plane-by-plane, which is time consuming. However, 3D-centric tools can make things easier by allowing you to annotate using 3D "brushes", by interpolating annotations between planes, or providing orthogonal and/or oblique planes for annotating. The following tools are well-suited for annotating 3D images.

## Tools for annotating 3D images

:::{.callout-note collapse='true' icon="false"}
# 3D Slicer

[3D Slicer](generalist_tools.md#3d-slicer) has a wide range of tools for annotating 3D images, including freehand and polygonal annotations, as well as points, available through the [`Markups`](https://slicer.readthedocs.io/en/latest/user_guide/modules/markups.html) module. Importantly, these can have various measurements associated with them. 3D Slicer provides orthogonal views of the image, which can be used to annotate in 3D. Additionally, it has the [`Segment Editor`](https://slicer.readthedocs.io/en/latest/user_guide/modules/segmenteditor.html) module that can be used for specifying segments (structures of interest) in 2D/3D/4D images. Additionally, the `Paint` tool has a sphere mode that is well-suited for annotating volumes. Further, `Grow from seeds` and `Fill between slices` can be used to more quickly segment objects in 3D. Finally, a number of extensions can be installed that provide more advanced tools for creating and/or editing segmentations, see [the documentation](https://slicer.readthedocs.io/en/latest/user_guide/image_segmentation.html#segmentation-modules).
:::

:::{.callout-note collapse='true' icon="false"}
# Paintera

[Paintera](specialist_tools.md#paintera) enables performant annotation of large 3D datasets, thanks to multiscale rendering, and also handles multiscale label datasets. It provides orthogonal views but also, importantly, permits painting on planes that are not aligned with the actual imaging planes. This is particularly useful for labeling large, complex geometries, such as neurons. Further, it is possible to easily fill contours to quickly annotate areas and annotations of slices can be interpolated into volumes. See [this YouTube video](https://www.youtube.com/watch?v=ZDcK0aCLoRc) for an in-depth tutorial.
:::

:::{.callout-note collapse='true' icon="false"}
# napari

[napari](generalist_tools.md#napari) Labels layers can be 3D and labels can be viewed and edited in 3D mode—though the limitations of a 2D screen and mouse controls can make precise edits challenging. Additionally, while in 2D mode, the `n edit dim` parameter can permit simultaneously painting into adjacent slices based on the brush radius. Finally, there are plugins that can help facilitate 3D annotation, such as  [napari-nD-annotator](https://www.napari-hub.org/plugins/napari-nd-annotator.html), which permits auto-filling labels and slice interpolation, and [napari-threedee](https://napari-threedee.github.io) that enables using oblique rendering planes for annotation. However, napari is presently not well-suited for annotating multiscale images and 3D rendering depends on your GPU.
:::
