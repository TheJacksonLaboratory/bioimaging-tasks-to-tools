---
title: "Commonly used specialized tools"
---

## Cellpose

[Cellpose](https://www.cellpose.org) is a state-of-the-art generalist cell segmentation deep learning model, implemented in Python using `torch`. It provides a graphical user interface (GUI) segmenting cells and nuclei using different pre-trained models. Pre-trained models can be used with a wide range of cell types and imaging modalities, but the GUI also enables fine-tuning an existing model or training new models. With Cellpose 3.0 additional image restoration features are also available. However, installation requires a Python environment. Note: Cellpose has a Python API so it can also be accessed programmatically.

## ilastik

[ilastik](https://www.ilastik.org) is a Python-based machine-learning-based pixel and object classification tool for multidimensional data. It provides a graphical user interface (GUI) application for Linux, macOS, and Windows that provides access to various segmentation and object classification workflows, as well as a tracking workflow. In addition to giving access to pre-trained models, the GUI also enables training classifiers, as well as batch processing. Note: in addition to a stand-alone GUI application, a number of ilastik plugins are available for other software package, for example for [Fiji](#fiji) and [napari](#napari).

## Paintera

[Paintera](https://github.com/saalfeldlab/paintera) is a dedicated annotation tool that was designed for performant annotation of large 3D datasets, thanks to multiscale rendering. It provides orthogonal views but also permits painting planes of structures that are not aligned with the actual imaging planes, such as neurons. It is possible to easily fill contours to quickly annotate areas and, importantly, annotations in multiple slices can be interpolated into 3D volumetric annotations. Finally, it can generate 3D meshes of labels to aid with visualization. For an in-depth video tutorial, see [this YouTube video](https://www.youtube.com/watch?v=ZDcK0aCLoRc).

&nbsp;

---


## Finding more tools

- For a more in-depth curated, categorized listing of open source bioimage analysis tools, see this [`awesome` list](https://github.com/hallvaaw/awesome-biological-image-analysis#awesome-biological-image-analysis-).  
&nbsp;
- The [BioImage Informatics Index (Biii)](https://biii.eu), also called "BISE" is a community-curated search engine for finding bioimage analysis software tools, workflows, and training materials.
