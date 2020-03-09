# ${state.title}

this is the [@magic-modules](https://github.com/magic-modules) LightBox component.

it shows an image that floats within the surrounding text, and,
when clicked, expands to show a bigger view of itself.

<GitBadges>magic-modules/light-box</GitBadges>

## installation

`npm install --save-exact @magic-modules/light-box`

## usage

left aligned

```
&lt;LightBox
  state
  img="https://imgs.xkcd.com/comics/digital_data.png"
  width="389"
  url="https://xkcd.com/"
  text="comic by xkcd">
&lt;/LightBox>
```

renders

<div>

<LightBox
  state
  img="https://imgs.xkcd.com/comics/digital_data.png"
  width="390"
  height="149"
  url="https://xkcd.com/"
  text="comic by xkcd">
</LightBox>

## A lightbox.

Click on the image to the left to show a bigger version.
</div>


### right aligned

```
&lt;LightBox
  state
  img="https://imgs.xkcd.com/comics/gravitational_waves.png "
  right\="true"
  width="389"
  url="https://xkcd.com/"
  text="comic by xkcd">
&lt;/LightBox>
```

renders

<div>

<LightBox
  state
  img="https://imgs.xkcd.com/comics/gravitational_waves.png "
  right="true"
  width="390"
  height="149"
  url="https://xkcd.com/"
  text="comic by xkcd">
</LightBox>

## A lightbox.

Click on the image to the left to show a bigger version.
</div>

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/light-box/tree/master/example)
and gets built and published to github using [@magic](https://github.com/magic/core)
