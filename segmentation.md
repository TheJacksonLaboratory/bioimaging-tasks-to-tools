---
title: "Automated segmentation of regions of interest"
---

Segmentation involves breaking up an image into regions of interest (ROIs) based on pixel intensity values, texture, shape, etc. This can be done manually by annotating regions, but automated segmentation is often preferred.  
Segmentation can be broadly divided into thresholding-based methods and machine-learning-based methods. The former are based on pixel intensity values, while the latter can learn from a large number of features to distinguish between objects and background.

## Thresholding-based segmentation

Traditional or classical image segmentation typically utilizes [thresholding](https://bioimagebook.github.io/chapters/2-processing/3-thresholding/thresholding.html) to separate objects from the background based pixel intensity values—a form of semantic segmentation. This process results in a binary mask that can be refined using [morphological operations](https://bioimagebook.github.io/chapters/2-processing/5-morph/morph.html) (dilation, erosion, filling of holes, etc.). Then, to segment the individual objects (instance segmentation), [additional transformations](https://bioimagebook.github.io/chapters/2-processing/6-transforms/transforms.html#image-transforms) are performed as part of connected components analysis to label groups of pixels that are connected to each other while separating touching objects, e.g. watershed algorithm. Note that this is a flexible, generalist approach that can work well for many types of images, but can be limited if signal to noise ratio is poor or objects are not very distinct.  

## Tools for thresholding-based segmentation

:::{.callout-note collapse='true' icon="false"}
# Fiji

[Fiji](generalist_tools.md#fiji) provides all the needed tools for classical segmentation. It offers both [manual and automated thresholding methods](https://imagej.net/ij/docs/guide/146-28.html#sub:Threshold...[T]) (e.g. Otsu thresholding) for obtaining binary masks. Next, [a wide range of morphological operations](https://imagej.net/ij/docs/guide/146-29.html#toc-Subsection-29.8) like erosion, dilation, and opening/closing can be used to refine segmented foreground and separate touching objects (e.g. watershed and Voronoi algorithms). Finally, the [Analyze Particles](https://imagej.net/ij/docs/guide/146-30.html#toc-Subsection-30.2) function performs instance segmentation on binary masks using various shape criteria and generates ROIs and [measurements](https://imagej.net/ij/docs/guide/146-30.html#sub:Measure...[m]). Importantly, Fiji also provides a wide range of filtering and processing tools that can be used for pre-processing images before segmentation, as well as a wide range of plugins that can be used for specialized segmentation tasks. For a helpful tutorial on thresholding in Fiji, see [this YouTube video series](https://www.youtube.com/watch?v=3kAY1k5OTx4&list=PLXSm9cHbSZBDh7l7muuDecvWVAoxMfmGD&index=12).  
:::

:::{.callout-note collapse='true' icon="false"}
# CellProfiler

[CellProfiler](generalist_tools.md#cellprofiler) permits threshold-based segmentation of cells and cell-like objects using the `Identify Objects` modules. First, the [`IdentifyPrimaryObjects` module](https://cellprofiler-manual.s3.amazonaws.com/CellProfiler-4.2.6/modules/objectprocessing.html#identifyprimaryobjects) is used to segment nuclei-like objects, with multiple parameters available for tuning the thresholding and de-clumping. Next, using the `PrimaryObjects` to guide detection, the [`IdentifySecondaryObjects` module](https://cellprofiler-manual.s3.amazonaws.com/CellProfiler-4.2.6/modules/objectprocessing.html#identifysecondaryobjects) will segment cells. Note that CellProfiler has a wide range of [image processing modules](https://cellprofiler-manual.s3.amazonaws.com/CellProfiler-4.2.6/modules/imageprocessing.html) that can be used for pre-processing and [Measurement modules](https://cellprofiler-manual.s3.amazonaws.com/CellProfiler-4.2.6/modules/measurement.html) that can be used for downstream analysis. For an introduction to segmentation using CellProfiler, please see the [Basic Segmentation tutorial](https://tutorials.cellprofiler.org/#beginner-segmentation), followed by the [Advanced Segmentation tutorial](https://tutorials.cellprofiler.org/#advanced-segmentation).  
:::

:::{.callout-note collapse='true' icon="false"}
# QuPath

[QuPath](generalist_tools.md#qupath) has two different segmentation tools that use thresholding: one general, one cell-specific. For the first case, one can define [threshold-based pixel classifiers](https://qupath.readthedocs.io/en/stable/docs/tutorials/thresholding.html#thresholders-in-qupath), offering a generalist approach to defining ROIs (semantic segmentation). For the second case, QuPath has a specialized [cell detection tool](https://qupath.readthedocs.io/en/stable/docs/tutorials/cell_detection.html) that uses a combination of thresholding and morphological operations to detect individual cells (instance segmentation). Both of these features in QuPath are well adapted to large 2D images, such as whole slide images, because they can be used at different resolution levels and computed on-the-fly using built in tiling.
:::

:::{.callout-note collapse='true' icon="false"}
# 3D Slicer

[3D Slicer](generalist_tools.md#3d-slicer) provides tools for threshold-based segmentation of 3D images. The [`Segment Editor`](https://slicer.readthedocs.io/en/latest/user_guide/modules/segmenteditor.html) module provides a basic `Threshold` option that can be used to segment objects based on intensity values. More advanced options, such as `Local Threshold` and `Watershed`, are provided by [Segment Editor Extra Effects extension](https://extensions.slicer.org/view/SegmentEditorExtraEffects/33706/macos). For an overview of image segmentation in 3D Slicer, see the [Image Segmentation documentation](https://slicer.readthedocs.io/en/latest/user_guide/image_segmentation.html).
:::

## Machine learning segmentation

Machine learning approaches have proven very powerful for segmenting images, especially when the objects of interest are not well separated, there is a high amount of noise, poor overall contrast, etc. Rather than just using intensity values, as in thresholding, machine learning models can learn from a large number of features to distinguish between objects and background. This section will be broadly divided into classification-based approaches and deep learning approaches.

### Segmentation using classification-based approaches

Classification-based approaches take computed features and use them to classify each pixel or object as belonging to a particular class (e.g. object or background). This can be done using a wide range of classifiers, such as random forests, support vector machines, etc. Typically they do not require a large amount of training data, so "painting" some labels can be sufficient. However, they can be limited in their ability to generalize to new data. Importantly, both training and inference can be very fast. Finally, classification approaches can be used for both pixel-wise and object-wise segmentation, meaning that these approaches can be applied to both segment objects, as well as classify those objects into different classes, such a cell or tissue type.  

## Tools for classification-based segmentation

:::{.callout-note collapse='true' icon="false"}
# ilastik

[ilastik](specialist_tools.md#ilastik) provides a stand-alone GUI for training and applying pixel and object classification models. For [pixel classification](https://www.ilastik.org/documentation/pixelclassification/pixelclassification), GUI enables the user to sparsely label training data and then select features, such as intensity, texture, and edge features, to use to train a classifier. The trained classifier can then be applied to batches of images to segment them. Next, [object classification](https://www.ilastik.org/documentation/objects/objects) can be trained and applied in similar fashion, using the image data and the output of the pixel classifier.  
:::

:::{.callout-note collapse='true' icon="false"}
# Fiji

[Fiji](generalist_tools.md#fiji) provides a number of plugins that can be used for classification-based segmentation. A commonly used and versatile plugin is [Trainable Weka Segmentation](https://imagej.net/plugins/tws/), which enables the user to train a classifier using a very wide range of features and then apply it to segment images. Another option is [Labkit](https://imagej.net/plugins/labkit/) which provides an intuitive labeling UI and a performant random forest classifier with optimizations for big data.  Finally, the [ilastik plugin](https://www.ilastik.org/documentation/fiji_export/plugin) can be used to apply pre-trained ilastik models to segment images.  
:::

:::{.callout-note collapse='true' icon="false"}
# QuPath

[QuPath](generalist_tools.md#qupath) provides a [Pixel classifier](https://qupath.readthedocs.io/en/stable/docs/tutorials/pixel_classification.html) that can use the built-in annotation tools to train a classifier using a wide range of features, with a live preview. The classifier can be saved and then applied to new images. Additionally, QuPath uses a similar interface for object classification, which can be used, for example, to [classify cells into different classes based on a wide range of features](https://qupath.readthedocs.io/en/stable/docs/tutorials/cell_classification.html). These features in QuPath are well adapted to large 2D images, such as whole slide images, because they can be used at different resolution levels and computed on-the-fly using built in tiling. For an overview of these concepts in QuPath workflows, including annotations, detections, and classifiers, please see this [QuPath Concepts video from 2023 Samples to Knowledge](https://www.youtube.com/watch?v=jb--T5KtLoU).  
:::

:::{.callout-note collapse='true' icon="false"}
# napari

[napari](generalist_tools.md#napari) provides a number of plugins that use the napari annotation tools to facilitate training classification-based segmentation algorithms. For example, for training a pixel classifier, [napari-convpaint](https://guiwitz.github.io/napari-convpaint/book/Landing.html) uses sparse annotations and a convolutional neural network (CNN) to extract features for the classification, making the process simple for the user. Alternately, for a more conventional and comprehensive approach, [napari-accelerated-pixel-and-object-classification](https://github.com/haesleinhuepf/napari-accelerated-pixel-and-object-classification#napari-accelerated-pixel-and-object-classification-apoc) can be used to train object and semantic segmentation random forest classifiers, as well as perform object classification.
:::

### Segmentation using deep learning

Deep learning (DL) approaches have made automated segmentation tractable for complex images, such as those with many objects, complex shapes, or low contrast. Deep learning models can learn from a large number of features, but are less interpretable and require a large amount of training data. Further, training can be slow and require a lot of computational resources, particularly graphical processing units (GPU). However, frequently DL approaches can generalize well to new data and pre-trained models are available. Typically, deep learning approaches can be used for both pixel-wise and object-wise segmentation, meaning that these approaches can be applied to both segment objects, as well as classify those objects into different classes, such a cell or tissue type. This is a rapidly evolving field with very many algorithms available, most implemented in Python using `torch` or `tensorflow` machine learning frameworks. Here we will focus on robust, most commonly used tools that have GUIs for applying and/or training the models.  

## Tools for deep learning-based segmentation

:::{.callout-note collapse='true' icon="false"}
# Cellpose

[Cellpose](specialist_tools.md#cellpose) is a state-of-the-art DL algorithm developed for cell segmentation, with a number of pre-trained models that can be used for segmenting cells and nuclei in a wide range of 2D biological images, including both fluorescence imaging and histopathology. These models can be utilized in the Cellpose GUI or via the command line or Python API. Importantly, the Cellpose GUI also provides tools for [training new models, as well as for fine-tuning existing models](https://cellpose.readthedocs.io/en/latest/gui.html#training-your-own-cellpose-model)—see alo this [helpful tutorial on YouTube](https://www.youtube.com/watch?v=5qANHWoubZU). Cellpose models can also be used by plugins/extensions for other software, e.g. [napari-serialcellpose](https://www.napari-hub.org/plugins/napari-serialcellpose.html) for napari or [qupath-extension-cellpose](https://github.com/BIOP/qupath-extension-cellpose#qupath-cellposeomnipose-extension) for QuPath (note: this QuPath extension also provides for training/fine-tuning models).  
:::

:::{.callout-note collapse='true' icon="false"}
# StarDist

[StarDist](https://stardist.net) is a state-of-the-art DL algorithm developed for segmenting nuclei and other star-convex (blob-like) objects in 2D or 3D. Two pre-trained models for segmenting nuclei in 2D are readily available, one for fluorescence images and the other for H&E images. Training of models can be performed using Python API. StarDist does not have a dedicated GUI, however for inference, one can use StarDist models via plugins/extensions: [Fiji StarDist plugin](https://imagej.net/plugins/stardist), [QuPath StarDist extension](https://qupath.readthedocs.io/en/0.4/docs/deep/stardist.html), or [napari StarDist plugin](https://www.napari-hub.org/plugins/stardist-napari.html).
:::
