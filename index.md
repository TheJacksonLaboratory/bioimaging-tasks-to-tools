---
toc: false
---

# Bioimage analysis tasks-to-tools guide

The goal of this guide is to provide a quick reference for selecting the right open-source tool for a given bioimage analysis task. It is intended to help with getting started with a project, particularly for newcomers to (bio)image analysis. It is organized by common tasks, such as manual annotation, segmentation, tracking, colocalization, etc., and for each task, a list of commonly used tools is provided. Finally, the guide includes brief overview descriptions of the tools.
[a broken link](http://foo.bar.zz)
[another](https://napari.org/foobar.html)

::: {.callout-important}
## Please note that the guide is *not exhaustive*!
At present, the focus is on tools that offer a graphical user interface (GUI) for ease of use, but in the future, we may expand to include command-line tools and libraries. Likewise, the focus is on tools or plugins that are well-supported, have a large user base, and are actively maintained, such that it is easy to find help if needed. Where possible we have linked to tutorials or documentation to help you get started. If something in the guide is unclear or you have suggestions for improvement---or maybe a task or tool to add!---please do not hesitate to reach out! You can use the GitHub links to open issues or edit the content and submit a pull request.
:::

### Click one of the tiles below to learn more about the tools suitable for that task

::::: {.grid}

:::: {.g-col-6}


::: {.callout-note .clickable-callout data-href="manual_annotation" icon="false"}

# Manually annotating regions of interest:

an important image analysis step, for example to indicate regions of interest (ROI) for further analysis or to provide ground-truth for training machine learning (ML) models.
:::
    
::::

:::: {.g-col-6}

::: {.callout-note .clickable-callout data-href="segmentation" icon="false"}
# Automated segmentation of regions of interest:

involves breaking up an image into regions of interest (ROIs) based on pixel intensity values, texture, shape, etc. rather than by manually annotating them.

:::

::::

:::: {.g-col-6}


::: {.callout-note .clickable-callout data-href="tracking" icon="false"}

# Tracking cells and particles:

an essential component of analyzing time-lapse studies,  it involves detecting and labeling objects, frame-by-frame, and then linking the objects between frames.
:::
    
::::

:::: {.g-col-6}

::: {.callout-note .clickable-callout data-href="colocalization" icon="false"}
# Colocalization analysis:

aims to quantify the degree of overlap between two or more channels in an image, for example representing subcellular fluorescence markers.
:::

::::

:::::


## Getting more help

All of the tasks and tools discussed here are part of the [image.sc community](https://forum.image.sc), which hosts varied discussions ranging from beginner questions to in-depth bug troubleshooting. In addition to posting questions or leading discussions, the effective `Search`, including `Advanced filters`, enables easy mining this rich resource.  Finally, [the Announcements board](https://forum.image.sc/c/announcements/10) is a great way to keep up with the latest bioimaging tool developments. 
