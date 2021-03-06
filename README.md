
# Parsecast @ Hack XX 2018
## Contributors: Bilguun Bulgan, Coraline Sun, Caitlyn Liu
## Inspiration
Students of UCSD have an easy way of accessing lectures missed or lectures they wish to "attend" again by visiting the UCSD podcast repository (at podcast.ucsd.edu). It is truly beneficial as it helps students catch up with school work by just simply watching a 50 - 80 minute video. However, the outdated interface of the podcast repository makes the platform less user-friendly. With no annotations or time tags, students waste time searching for key concepts that they wish to review in a particular lecture and almost always end up zoning out before finishing the entire podcast.

## What it does
In view of this, we decided to build a web app, Parsecast, that allows users to enter an Url to a podcast and it allows you to navigate through the video easily by only watching parts that contain the words they wish to review. Users are expected to:

1. enter an Url to a video with an ending file extension of any video format (ex. mp4, etc) and click submit.
2. search for a word that is mentioned by the presenter (a word you find important)
3. Click on "next instance" if the word was found in the audio to move to the next time it is mentioned by the lecturer to skip over any parts of the podcast you don't want to see.

Happy studying on Parsecast!

## How we built it
Parsecast was built with mostly Javascript, HTML, and CSS. We used the Google Speech API (converts Audio to Text with additional information such as times occurred.. etc) to obtain the exact times that words occurred in a file.
