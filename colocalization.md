---
title: "Colocalization"
---

Colocalization aims to quantify the degree of overlap between two or more channels in an image, for example representing subcellular fluorescence markers. This can be done using a number of different metrics, such as Pearson's correlation coefficient or Manders' overlap coefficient. A good overview of these approaches can be found in [this review](https://journals.biologists.com/jcs/article/131/3/jcs211847/77151/Image-co-localization-co-occurrence-versus) and this [Microcourse Youtube video](https://www.youtube.com/watch?v=Mv4M1HaYdBc).  

## Tools for colocalization analysis

:::{.callout-note collapse='true' icon="false"}
# Fiji

[Fiji](generalist_tools.md#fiji) offers a number of [plugins for colocalization analysis](https://imagej.net/imaging/colocalization-analysis), however currently the best supported one is the [JACoP plugin revamped by BIOP](https://github.com/BIOP/ijp-jacop-b#ijp-jacop-b). It implements both Pearson's and Manders' coefficients, as well as Costes' automated thresholding.  
:::

:::{.callout-note collapse='true' icon="false"}
# CellProfiler

[CellProfiler](generalist_tools.md#cellprofiler) provides a [MeasureColocalization module](https://cellprofiler-manual.s3.amazonaws.com/CellProfiler-4.2.6/modules/measurement.html#measurecolocalization) for colocalization analysis. The module can be used to calculate a wide range of metrics, such as Pearson's correlation coefficient, Manders' overlap coefficient, and Rank Weighted Colocalization coefficient. A helpful example/tutorial is provided on the [CellProfiler Examples page](https://cellprofiler.org/examples/).
:::
