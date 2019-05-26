# Papers

Gathering ideas on how to transform an ECG image into raw data, the idea is to convert the data into mm information that later can be associated to voltage and time.

Conversion of ECG Graph Into Digital Format
======

This paper proposes filter to reduce the influence of noise, such as muscle noise, power line and base line wonder, this will help on generating better results for automatic characterization of ECG data.

The algorithm:
  ** Crop Regions of interest: A sub-section of an ECG is selected. In order to retrieve the information from the ECG, then the ECG grid is removed.
  ** Image Binarization: The image now composed only by the ECG line is converted into binary format, this means that we will replace the RGB presentation for 1 where black is found and 0 otherwise.
  ** Gradient Fature Extraction: The gradients for each point are calculated, the strength and direction indicates edge detection.
  ** Noise Rejection: Noise is removed by assuming that any pixel that is only surrounded by white pixels is noise, so when one of this pixels is find the algorithm just makes it white background.
  ** Image Thining: The line of an ECG is composed of multiple vertical pixels, this data is redundant so we aim to reduce this redundancy, we achieve that by removing extra pixel by running a moving average.
  ** Edge Detection: There are many edge detection algorithms like: Sobel, Canny, Prewitt, Roberts and fuzzy logic methods.
  ** Pixel to vector conversion: The points that are missing are created by interpolating the lines with the points that are in the graph.  

Converting ECG and Other Paper Legated Biomedical Maps Into Digital
======

ECG Paper Records Digitization through Image Processing Techniques
======

Image Processing on ECG Chart for ECG Signal Recovery
======

Straight Line Hough Transform
======


Citations
======

```
  @article{DBLP:journals/corr/SilvaOL15,
    author    = {Andr{\'{e}} R. Gomes e Silva and
                H{\'{e}}lio M. de Oliveira and
                Rafael Dueire Lins},
    title     = {Converting {ECG} and other paper legated biomedical maps into digital
                signals},
    journal   = {CoRR},
    volume    = {abs/1502.05906},
    year      = {2015},
    url       = {http://arxiv.org/abs/1502.05906},
    archivePrefix = {arXiv},
    eprint    = {1502.05906},
    timestamp = {Mon, 13 Aug 2018 16:48:27 +0200},
    biburl    = {https://dblp.org/rec/bib/journals/corr/SilvaOL15},
    bibsource = {dblp computer science bibliography, https://dblp.org}
  }

  @article{DBLP:journals/corr/SilvaOL15,
    author    = {Andr{\'{e}} R. Gomes e Silva and
                H{\'{e}}lio M. de Oliveira and
                Rafael Dueire Lins},
    title     = {Converting {ECG} and other paper legated biomedical maps into digital
                signals},
    journal   = {CoRR},
    volume    = {abs/1502.05906},
    year      = {2015},
    url       = {http://arxiv.org/abs/1502.05906},
    archivePrefix = {arXiv},
    eprint    = {1502.05906},
    timestamp = {Mon, 13 Aug 2018 16:48:27 +0200},
    biburl    = {https://dblp.org/rec/bib/journals/corr/SilvaOL15},
    bibsource = {dblp computer science bibliography, https://dblp.org}
  }
  
  @article{garg2012ecg,
    title={ECG paper records digitization through image processing techniques},
    author={Garg, Deepak Kumar and Thakur, Diksha and Sharma, Seema and Bhardwaj, Shweta},
    journal={International Journal of Computer Applications},
    volume={48},
    number={13},
    pages={35--38},
    year={2012},
    publisher={Citeseer}
  }
  
  @inproceedings{shen2009image,
    title={Image processing on ECG chart for ECG signal recovery},
    author={Shen, TW and Laio, TF},
    booktitle={2009 36th Annual Computers in Cardiology Conference (CinC)},
    pages={725--728},
    year={2009},
    organization={IEEE}
  }
```
