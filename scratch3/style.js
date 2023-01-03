import SVG from "./draw.js"
import cssContent from "./style.css.js"

export default class Style {
  static get cssContent() {
    return cssContent
  }

  static makeIcons() {
    return [
      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M20.8 3.7c-.4-.2-.9-.1-1.2.2-2 1.6-4.8 1.6-6.8 0-2.3-1.9-5.6-2.3-8.3-1v-.4c0-.6-.5-1-1-1s-1 .4-1 1v18.8c0 .5.5 1 1 1h.1c.5 0 1-.5 1-1v-6.4c1-.7 2.1-1.2 3.4-1.3 1.2 0 2.4.4 3.4 1.2 2.9 2.3 7 2.3 9.8 0 .3-.2.4-.5.4-.9V4.7c0-.5-.3-.9-.8-1zm-.3 10.2C18 16 14.4 16 11.9 14c-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2l.1.1-.1 9.2z",
            fill: "#45993d",
          }),
          SVG.el("path", {
            d: "M20.6 4.8l-.1 9.1v.1c-2.5 2-6.1 2-8.6 0-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2c0 .1.1.1.1.2z",
            fill: "#4cbf56",
          }),
        ]),
        {
          id: "sb3-greenFlag",
        },
      ),

      SVG.setProps(
        SVG.el("polygon", {
          points:
            "6.6,0.5 13.12,0.5 19.5,6.6 19.5,13.12 13.12,19.5 6.6,19.5 0.5,13.12 0.5,6.6 ",
          fill: "#ec5959",
          stroke: "#b84848",
          "stroke-linejoin": "round",
          "stroke-linecap": "round",
        }),
        {
          id: "sb3-stopSign",
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
            fill: "#231f20",
            opacity: ".1",
          }),
          SVG.el("path", {
            d: "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
            fill: "#fff",
          }),
        ]),
        {
          id: "sb3-dropdownArrow",
          transform: "scale(0.944)",
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z",
            fill: "#3d79cc",
          }),
          SVG.el("path", {
            d: "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z",
            fill: "#fff",
          }),
        ]),
        {
          id: "sb3-turnRight",
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z",
            fill: "#3d79cc",
          }),
          SVG.el("path", {
            d: "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z",
            fill: "#fff",
          }),
        ]),
        {
          id: "sb3-turnLeft",
        },
      ),

      SVG.el("path", {
        d: "M0 0L4 4L0 8Z",
        fill: "#111",
        id: "sb3-addInput",
      }),

      SVG.el("path", {
        d: "M4 0L4 8L0 4Z",
        fill: "#111",
        id: "sb3-delInput",
      }),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z",
            fill: "#cf8b17",
          }),
          SVG.el("path", {
            d: "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z",
            fill: "#fff",
          }),
        ]),
        {
          id: "sb3-loopArrow",
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("rect", {
            x: "0",
            y: "0",
            width: "15",
            height: "18",
            fill: "#fff",
          }),
          SVG.el("rect", {
            x: "1",
            y: "1",
            width: "13",
            height: "4",
            fill: "#ff920f",
          }),
          SVG.el("rect", {
            x: "1",
            y: "7",
            width: "13",
            height: "4",
            fill: "#ff920f",
          }),
          SVG.el("rect", {
            x: "1",
            y: "13",
            width: "13",
            height: "4",
            fill: "#ff920f",
          }),
        ]),
        {
          id: "sb3-list",
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z",
            stroke: "#000",
            "stroke-opacity": ".1",
          }),
          SVG.el("path", {
            d: "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z",
            fill: "#FFF",
          }),
        ]),
        {
          id: "sb3-musicBlock",
          fill: "none",
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012",
            fill: "#FFF",
          }),
          SVG.el("path", {
            d: "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546",
          }),
          SVG.el("path", {
            d: "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102",
            fill: "#4C97FF",
          }),
          SVG.el("path", {
            d: "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856",
            fill: "#575E75",
            opacity: ".15",
          }),
          SVG.el("path", {
            d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z",
            fill: "#575E75",
          }),
        ]),
        {
          id: "sb3-penBlock",
          stroke: "#575E75",
          fill: "none",
          "stroke-linejoin": "round",
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("circle", {
            opacity: 0.25,
            cx: 32,
            cy: 16,
            r: 4.5,
          }),
          SVG.el("circle", {
            opacity: 0.5,
            cx: 32,
            cy: 12,
            r: 4.5,
          }),
          SVG.el("circle", {
            opacity: 0.75,
            cx: 32,
            cy: 8,
            r: 4.5,
          }),
          SVG.el("circle", {
            cx: 32,
            cy: 4,
            r: 4.5,
          }),
          SVG.el("path", {
            d: "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z",
            fill: "#4D4D4D",
            "stroke-linejoin": "round",
          }),
        ]),
        {
          id: "sb3-videoBlock",
          stroke: "#000",
          fill: "#FFF",
          "stroke-opacity": 0.15,
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z",
            fill: "#FFF",
          }),
          SVG.el("path", {
            d: "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z",
            fill: "#4D4D4D",
          }),
        ]),
        {
          id: "sb3-ttsBlock",
          stroke: "#000",
          "stroke-opacity": 0.15,
        },
      ),

      SVG.el("image", {
        id: "sb3-translateBlock",
        width: "40px",
        height: "40px",
        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA21BMVEUAAAAAAAAAAAAAAADS0tIAAABHR0cAAADX19cAAAAAAACkpKRqamq2traurq6WlpbV1dWEhITHx8fPz8/Ly8vDw8O9vb0AAABMTEz////Z2dlXXnVMl//g4ODu7u7m5ub4+PhPmf/x8fH09PT6+vri4uNRmv/r6+1uqv/0+P9Ynv/p8v+rrrphZ33S5f+51v9ho/+1uMKBhpfH3v+Wmqhrcoacxf+Pvv/KzNSgpLGLkKDd6/+rzf9npv/AwsuDtv98s/90rv9jpP9GieeOrtm5ubl2fI7Z4u56otk5hEFfAAAAGXRSTlMAJhgM1wYyHvIkEWpBhXhc5U+uybyhk0YvleQYgwAABDpJREFUWMPtmNl6mzAQhQMCBAYbvLX1GIwxi7e2TtosTdKk+/L+T1QBVoQtJHDby5yLROYTPzOagSM4e9az6oVUrDgKxh39//Bwb+QBkTZ2VL3hypYilKWicpY6gmWcTCbxIoSh0xHjOkZXA4m0rlGcrcBsslcSmrYq4qm2GczmE6Hms6A8W4GQHZ1BTxXweuTCErGz1TEEaTpLymML6HVq87VhIWPRs21yNu679guNXn9hOnWVMUwanzxG0yCTdYQQts195umwJmnUDSatFHQRPaVvljkl4CAuRlWrCfD9uiZEbR+ObrnjfRDhwHUtdAi0gK/vLtts+VqDVfIMjZSmLEycBuD1D4kK8MHc+Ju3/FFQaHdXc4rBU/8NiCE+OJyAIQKuz32qjA7O1xzwqMtiUETAXeRzinZcyoPgsPpDcco3q9WD729WhTI/e1itbriUzwwtqPI0Q5et4ZoA6SDj1pCWOeB44qJ88aOiIB8j/xMH5IiUJwG+jfyHPMCNH20FQEpkPGnbnBeFuI78Fd82VWJCeTyQCzHb3pMCb8VAQhxBCkPKkzf2Z9J9mR9dCxqb3tBO17EoTw4ky0f0VXSnUCGE6LDp1tvlwK0cyNQMJA1DlL3Px8TenvTjpcAN5cD7VVSsoR992c4oS+aGcuDbzxFBfVqvv5L/375DCzeUAXfnOW5TJHudffvdzg3FwPdZvnbX6/LXr+9t3ZCzAAaMNh/X9BdAWzcUm9T2vnrpk91QbqOhLEDeDZuNHkBSX94Nm7ciAJOWAkW8WZIDl1MikAD57ZwceJsDL0VAfsPJwgzzO5cHvsmBb2IJkAlhB5InntlXlJcc8MO00GMzsHTbsMJDdU+hOxIeCfKuXYQu7ZJ5oDmExwPjfAEvyZ9lGyDW9tOWMH6l1z4nLwjrQ572RRugAvMS57mq4MH7czq9Kgpz1QZoDcI4DsHrWUjw4E1JbLeTSZ5z2gLYMTTwBnaOEwBvS1Ke86UUyF7isKpLrIHkSvVGBORdUQx8nFb0KAUy38aSCO8I510hMrhrBOrGEFIYGToPZM+Fn+XwiraiAMh2Uwnb+3DAC9Z/t3TIA2W7MwZkYbH+uZIC+f0jD3z9+vXF05hIAJTtcK3TLIDnMSLnhqeZlDo8eksYqH/3UskWPz7aCuDTX3urMiA5ejHCp7+YV4W9gxBnMFJP/XRwKNT3IEhLZpIGQMp86seNY6LlutRQgrFr6dLPLyELjm44eemIWt6C+JP0A1HffCIm4GDEw2jvpNTxbIwQ0kUTUYUYkgYTSXfMBU1Ee+G6fSwkOlpA/RFcJCR2erRHkllKSjNWhdd+NQbqkJrgunyPhKBIprpeiZyLZtEeCRNWQdlUZPU8yF1yYJ1J1HGGEC5iknS8pN0tRtoDDzTSNDLpqjMu2s4b9fBZg/TcJVHjrA7GSl/JZz7rWbX6A0ZzUfwVEqfrAAAAAElFTkSuQmCC",
      }),

      SVG.el("image", {
        id: "sb3-microbitBlock",
        width: "40px",
        height: "40px",
        href: "data:image/png;base64,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",
      }),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M23.513 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M24.91 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z",
          }),
          SVG.el("path", {
            d: "M9.54 11.17h-.728c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M10.938 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479z",
          }),
          SVG.el("path", {
            d: "M26.305 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M27.702 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z",
          }),
          SVG.el("path", {
            d: "M29.101 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M30.498 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z",
          }),
          SVG.el("path", {
            d: "M17.925 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M19.322 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479z",
          }),
          SVG.el("path", {
            d: "M20.717 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M22.114 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z",
          }),
          SVG.el("path", {
            d: "M15.129 11.17H14.4c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M16.526 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z",
          }),
          SVG.el("path", {
            d: "M12.335 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.882v-1.08c0-.265-.26-.479-.577-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M13.732 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z",
          }),
          SVG.el("path", {
            d: "M31.893 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M33.29 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z",
          }),
          SVG.el("path", {
            d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992",
            fill: "#FFF",
          }),
          SVG.el("path", {
            d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
            fill: "#FFF",
          }),
          SVG.el("path", {
            d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
            fill: "#4C97FF",
          }),
          SVG.el("path", {
            d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
            stroke: "#3D79CC",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            stroke: "#7C87A5",
            "stroke-width": ".893",
            d: "M4.47 20.474h27.961l2.157 2.974",
          }),
          SVG.el("path", {
            d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z",
          }),
          SVG.el("path", {
            d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479z",
          }),
          SVG.el("path", {
            d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479z",
          }),
          SVG.el("path", {
            d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z",
          }),
          SVG.el("path", {
            d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993",
            fill: "#E6E7E8",
          }),
          SVG.el("path", {
            d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
            fill: "#E6E7E8",
          }),
          SVG.el("path", {
            d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            fill: "#E6E7E8",
            d: "M19.53 24.438h11.294V20.47H19.529z",
          }),
          SVG.el("path", {
            stroke: "#7C87A5",
            "stroke-width": ".893",
            d: "M19.53 24.438h11.294V20.47H19.529zm12.902-3.964l2.157-2.794",
          }),
        ]),
        {
          id: "sb3-wedoBlock",
          fill: "none",
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("rect", {
            stroke: "#7C87A5",
            fill: "#FFF",
            x: ".5",
            y: "3.59",
            width: "28",
            height: "25.81",
            rx: "1",
          }),
          SVG.el("rect", {
            stroke: "#7C87A5",
            fill: "#E6E7E8",
            x: "2.5",
            y: ".5",
            width: "24",
            height: "32",
            rx: "1",
          }),
          SVG.el("path", {
            stroke: "#7C87A5",
            fill: "#FFF",
            d: "M2.5 14.5h24v13h-24z",
          }),
          SVG.el("path", {
            d: "M14.5 10.5v4",
            stroke: "#7C87A5",
            fill: "#E6E7E8",
          }),
          SVG.el("rect", {
            fill: "#414757",
            x: "4.5",
            y: "2.5",
            width: "20",
            height: "10",
            rx: "1",
          }),
          SVG.el("rect", {
            fill: "#7C87A5",
            opacity: ".5",
            x: "13.5",
            y: "20.13",
            width: "2",
            height: "2",
            rx: ".5",
          }),
          SVG.el("path", {
            d: "M9.06 20.13h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 1 0-2zM19.93 22.13h-1.51a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.5a1 1 0 0 1 .01 2zM8.23 17.5H5a.5.5 0 0 1-.5-.5v-2.5h6l-1.85 2.78a.51.51 0 0 1-.42.22zM18.15 18.85l-.5.5a.49.49 0 0 0-.15.36V20a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5v-.29a.49.49 0 0 0-.15-.36l-.5-.5a.51.51 0 0 1 0-.71l1.51-1.49a.47.47 0 0 1 .35-.15h3.58a.47.47 0 0 1 .35.15l1.51 1.49a.51.51 0 0 1 0 .71zM10.85 23.45l.5-.5a.49.49 0 0 0 .15-.36v-.29a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.29a.49.49 0 0 0 .15.36l.5.5a.5.5 0 0 1 0 .7l-1.51 1.5a.47.47 0 0 1-.35.15h-3.58a.47.47 0 0 1-.35-.15l-1.51-1.5a.5.5 0 0 1 0-.7z",
            fill: "#7C87A5",
            opacity: ".5",
          }),
          SVG.el("path", {
            d: "M21.5 27.5h5v4a1 1 0 0 1-1 1h-4v-5z",
            stroke: "#CC4C23",
            fill: "#F15A29",
          }),
        ]),
        {
          transform: "translate(5.5 3.5)",
          id: "sb3-ev3Block",
        },
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M35 28H5a1 1 0 0 1-1-1V12c0-.6.4-1 1-1h30c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1z",
            fill: "#fff",
          }),
          SVG.el("path", {
            fill: "red",
            d: "M4 25h32v2.7H4zm9-1h-2.2a1 1 0 0 1-1-1v-9.7c0-.6.4-1 1-1H13c.6 0 1 .4 1 1V23c0 .6-.5 1-1 1z",
          }),
          SVG.el("path", {
            fill: "red",
            d: "M6.1 19.3v-2.2c0-.5.4-1 1-1h9.7c.5 0 1 .5 1 1v2.2c0 .5-.5 1-1 1H7.1a1 1 0 0 1-1-1z",
          }),
          SVG.el("circle", { fill: "red", cx: "22.8", cy: "18.2", r: "3.4" }),
          SVG.el("circle", { fill: "red", cx: "30.6", cy: "18.2", r: "3.4" }),
          SVG.el("path", { fill: "red", d: "M4.2 27h31.9v.7H4.2z" }),
          SVG.el("circle", {
            fill: "#e0e0e0",
            cx: "22.8",
            cy: "18.2",
            r: "2.3",
          }),
          SVG.el("circle", {
            fill: "#e0e0e0",
            cx: "30.6",
            cy: "18.2",
            r: "2.3",
          }),
          SVG.el("path", {
            fill: "#e0e0e0",
            d: "M12.5 22.9h-1.2c-.3 0-.5-.2-.5-.5V14c0-.3.2-.5.5-.5h1.2c.3 0 .5.2.5.5v8.4c0 .3-.2.5-.5.5z",
          }),
          SVG.el("path", {
            fill: "#e0e0e0",
            d: "M7.2 18.7v-1.2c0-.3.2-.5.5-.5h8.4c.3 0 .5.2.5.5v1.2c0 .3-.2.5-.5.5H7.7c-.3 0-.5-.2-.5-.5zM4 26h32v2H4z",
          }),
          SVG.el("path", {
            stroke: "#666",
            "stroke-width": ".5",
            d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z",
          }),
          SVG.el("path", {
            stroke: "#666",
            "stroke-width": ".5",
            d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z",
          }),
        ]),
        {
          id: "sb3-makeymakeyBlock",
          fill: "none",
        },
      ),
      SVG.el("image", {
        id: "sb3-gdxforBlock",
        width: "40px",
        height: "40px",
        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABAlBMVEUAAAABAQEAAAB9h6YAAAAAAAAAAAB8iKZ7iKaAjKvm5+h+iqhcXFxGR0d8iKbj5OV9iKZ8h6be3+Db3d19h6acnJ0AAAB7nrDh4uPh4uN9iabZ2tt9iKbX19nJycnExsZ8iKe+wMC7vL2Eka/g4ePU1dV8iKZ9iKZ9iKd+iKitra2RkZGLjo5wcHCLi7l0oqJV//9csdZ8h6WFkq//vwDm5+iEka79vgJ6iql9iaaHk6tgq9Btm71+iadmo8dzk7OCj6yAjKp/iqhiqc1qnsB4jKtgrNFwl7d1tLTgtCxpocN0krJ2j65ossWNtZSbt4LAulHWsDnasTTuvhXzvg9zk7TzqAfaAAAAMXRSTlMAJiLoFBwI8q4a+0c4M/nr3tnQwKxYDAnk2726tbGMh4J9dinXq56ddG9nT01ACwsDk/+seAAAAidJREFUWMPt2Olu2kAUhuE5NvuaBAhZm7TpvufgMXaBbmAghOzp/d9KD7RW6yaqPeL7YVV9/471aBgfCXnUH7ULNhtkF96qv1dgwwoxoM08cDsJcwfMdgwonoiJPRFjQXkscQM3Adhxk4NuJwkoDx0nSp5NDTiae958NEaBwzkvC4YYcOxx7fCoeJhnrwcBv7H9TklFm08R4JD5SEkiMg8B4IjXwsV1HgHAPu+EizsQcMbr2B0OufZz7X0NcIZSwC9+rD3nADI2/fCtrHEfAvZ8Liqp6PuIwZZO+ZmSnspcY8AZ55WU5xkElDwuK1Vm7xgFTjhfLud5AgPHAUvBGARKvYnnTXpp/gvAg9PLyykSPLt1nNszIHjuSOdAcNp1nO4UeYYXNzcX0UH62P+0AnjH8lgCgL8s/+uXzwZgrOV2JAMwxpIMwRjLHIyxzMEYyxyMWgAwYiHAzm99iLQ6eOJEul4d7Ea6WhG8W7rAE+fertHgVXp+clpB9Oet64M/wH2TKwI/FrRFTH6JIZ6NvmZpxoDtptlFULOtzGPWy+4/r//gvwKGgcC90NtTqIg2dIuyClaWDvTjKlDMLba4UaUMcIuVbd0gyiGwjGVlFuKWfkQZhEfSQnypd8mCvOHGvkA5quo6EQSs6yrlNumN3obs0KKGHJ70QD+hLOQMW7r0sFI5KJVeY+bGkr1JopKlEG0StXbrW/uvQGMookXLLPFAZYTMJju/7z6rRW1MZcnIAAAAAElFTkSuQmCC",
      }),
      SVG.el("image", {
        id: "sb3-boostBlock",
        width: "40px",
        height: "40px",
        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAKlBMVEUAAAD///98h6Xm5+iVnrb/Zhq+w9L5hk73+Pnf4eSQmbLr7Ozo39vp184hSCf6AAAAAXRSTlMAQObYZgAAAOFJREFUSMftlDEOgjAUhonhAi1sLvIk7NDJDTYu0LhzBzcXruHoDTyFB/BCNi30KU3InzioSb++hAS+vPfKa5pEIpHvk7a8gpf8ISWINtlg4i7ZFOKVTBlqsUR+ItYZJG7VzQQgMqGYd7zWRArpULEAe5Q/J9JMj4rluC7uleNw7TFRXcoREDnlinjX57eUsvRTn8+AE0/6OKV0g5buYTTyWFFr/XAp3aDzed4yFJWnKbhPbtaXXohDNYlDJWz4zSxEokkkEjb496AiVtqAbIYgYNGWBmhgES+NX6SRSORfeAJMWajr95DdqQAAAABJRU5ErkJggg==",
      }),
			SVG.setProps(
				SVG.group([
					SVG.el("path", {
						d: "M7.46955 25.8394H4.60107V40.5H7.46955V25.8394Z",
						fill: "#8C8C8C"
					}),
					SVG.el("path", {
						d: "M17.0724 38.9425C17.0724 37.3777 15.6526 36.1393 14.2884 34.9537C13.7335 34.4641 12.689 33.6183 12.689 33.0538V25.7598H9.80713V33.4666C9.80713 34.8778 11.0705 35.9713 12.402 37.131C12.9943 37.6321 14.2001 38.7975 14.2001 39.4906C14.2001 39.769 14.2039 41 14.2039 41H17.0743L17.0724 38.9425Z",
						fill: "#8C8C8C"
					}),
					SVG.el("path", {
						d: "M18.8976 17.3347V9.4512C18.8976 4.2336 14.6736 0 9.45024 0C4.2336 0 0 4.22592 0 9.4512V27.6499C1.96512 29.8512 5.4624 31.32 9.45024 31.32C15.6096 31.32 20.6083 27.8294 20.6083 23.5075V21.4762C20.6074 19.9526 19.9757 18.5376 18.8976 17.3347Z",
						opacity: "0.3",
						fill: "#CCCCCC"
					}),
					SVG.el("path", {
						d: "M18.8976 17.3347V9.4512C18.8976 4.2336 14.6736 0 9.45024 0C4.2336 0 0 4.22592 0 9.4512V27.6499C1.96512 29.8512 5.4624 31.32 9.45024 31.32C15.6096 31.32 20.6083 27.8294 20.6083 23.5075V21.4762C20.6074 19.9526 19.9757 18.5376 18.8976 17.3347Z",
						opacity: "0.5",
						fill: "#E6E6E6"
					}),
					SVG.el("path", {
						d: "M18.8976 17.335V21.4754C18.8976 25.1273 14.6765 28.0956 9.45024 28.0956C4.2336 28.0956 0 25.1369 0 21.4754V25.6159V27.6482C1.96512 29.8505 5.4624 31.3183 9.45024 31.3183C15.6096 31.3183 20.6083 27.8278 20.6083 23.5068V21.4754C20.6074 19.9529 19.9757 18.5378 18.8976 17.335Z",
						opacity: "0.9",
						fill: "#D1D1D1"
					}),
					SVG.el("path", {
						d: "M18.8976 17.335V21.4754C18.8976 25.1273 14.6765 28.0956 9.45024 28.0956C4.2336 28.0956 0 25.1369 0 21.4754V25.6159V27.6482C1.96512 29.8505 5.4624 31.3183 9.45024 31.3183C15.6096 31.3183 20.6083 27.8278 20.6083 23.5068V21.4754C20.6074 19.9529 19.9757 18.5378 18.8976 17.335Z",
						opacity: "0.7",
						fill: "#E6E6E6"
					}),
					SVG.el("path", {
						d: "M18.8976 17.335V21.4754C18.8976 25.1273 14.6765 28.0956 9.45024 28.0956C4.2336 28.0956 0 25.1369 0 21.4754V25.6159C1.96512 27.8162 5.4624 29.286 9.45024 29.286C15.6096 29.286 20.6083 25.7954 20.6083 21.4745C20.6074 19.9529 19.9757 18.5378 18.8976 17.335Z",
						opacity: "0.25",
						fill: "#E6E6E6"
					}),
					SVG.el("path", {
						d: "M9.45026 28.0896C14.6689 28.0896 18.8995 25.1283 18.8995 21.4752C18.8995 17.8222 14.6689 14.8608 9.45026 14.8608C4.23156 14.8608 0.000976562 17.8222 0.000976562 21.4752C0.000976562 25.1283 4.23156 28.0896 9.45026 28.0896Z",
						opacity: "0.25",
						fill: "#E6E6E6"
					}),
					SVG.el("path", {
						d: "M9.45026 28.0896C14.6689 28.0896 18.8995 25.1283 18.8995 21.4752C18.8995 17.8222 14.6689 14.8608 9.45026 14.8608C4.23156 14.8608 0.000976562 17.8222 0.000976562 21.4752C0.000976562 25.1283 4.23156 28.0896 9.45026 28.0896Z",
						opacity: "0.25",
						fill: "#E6E6E6"
					}),
					SVG.el("path", {
						d: "M2.9375 12.8639V21.4761H4.26134V17.4594H8.0207L13.3497 11.7397H4.54262L2.9375 12.8639Z",
						fill: "#666666"
					}),
					SVG.el("path", {
						d: "M14.3713 11.3652L14.953 12.0449L9.88232 17.4593H14.7466V21.476H15.9649V11.3652H14.3713Z",
						fill: "#666666"
					}),
					SVG.el("path", {
						d: "M18.8976 17.3347V9.4512C18.8976 4.2336 14.6736 0 9.45024 0C4.2336 0 0 4.22592 0 9.4512V27.6499C1.96512 29.8512 5.4624 31.32 9.45024 31.32C15.6096 31.32 20.6083 27.8294 20.6083 23.5075V21.4762C20.6074 19.9526 19.9757 18.5376 18.8976 17.3347Z",
						opacity: "0.65",
						fill: "#ECECEC"
					}),
					SVG.el("path", {
						d: "M13.851 5.0052L15.7662 4.6404C14.6439 3.13128 12.9899 2.03016 11.0439 1.65576L11.3828 3.09672C12.4014 3.45768 13.2587 4.13736 13.851 5.0052Z",
						opacity: "0.5",
						fill: "white"
					}),
					SVG.el("path", {
						d: "M1.02441 26.5679V28.5944C1.88937 29.3 2.93577 29.8962 4.10121 30.3503V28.317C2.93001 27.8687 1.89225 27.2744 1.02441 26.5679Z",
						opacity: "0.5",
						fill: "white"
					}),
					SVG.el("path", {
						d: "M14.7639 26.946C14.4231 27.1092 14.0574 27.2523 13.6897 27.3857C13.6119 27.4116 13.5332 27.4395 13.4526 27.4635C12.7009 27.7025 11.9041 27.8888 11.0593 27.9896C10.9595 28.002 10.8577 28.0145 10.7598 28.0155C10.3326 28.0558 9.90153 28.0932 9.46569 28.0932C9.26793 28.0932 9.05577 28.0731 8.83689 28.0616C7.23657 27.9857 5.72937 27.642 4.44009 27.0756V15.8897V9.45579C4.44009 7.49451 5.57097 5.81643 7.20489 4.98987L7.17513 4.91883L5.51145 2.90283C3.28521 4.24011 1.79145 6.66603 1.79145 9.45195V25.3256C1.72521 25.2593 1.38057 24.9137 1.15113 24.619L0.741211 25.5358C2.60937 27.5115 5.81961 28.818 9.46473 28.818C11.7044 28.818 13.7809 28.3198 15.4801 27.4817L14.7774 26.9364C14.7639 26.946 14.7639 26.946 14.7639 26.946Z",
						opacity: "0.5",
						fill: "white"
					})
				]),
        {
          id: "sb3-ledBlock",
          fill: "none",
					stroke: "#575E75"
        },
			),
			SVG.setProps(
				SVG.group([
					SVG.el("polygon", {
						points: "20.586,32.979 20.586,21.487 23.586,21.487 23.586,32.979",
						fill: "#8C8C8C"
					}),
					SVG.el("polygon", {
						points: "0.586,11.493 0.586,0.001 3.584,0.001 3.584,11.493",
						fill: "#8C8C8C"
					}),
					SVG.el("polygon", {
						points: "20.586,11.494 20.586,0 23.586,0 23.586,11.494",
						fill: "#8C8C8C"
					}),
					SVG.el("polygon", {
						points: "0.587,32.981 0.587,21.487 3.586,21.487 3.586,32.981",
						fill: "#8C8C8C"
					}),
					SVG.el("rect", {
						x: "0.012",
						y: "4.232",
						width: "24.518",
						height: "24.52"
					}),
					SVG.el("path", {
						fill: "#999999",
						d: "M24.529,26.752c0,1.101-0.896,1.999-2,1.999H2.011c-1.101,0-1.999-0.898-1.999-1.999V6.23c0-1.1,0.898-1.998,1.999-1.998h20.521c1.103,0,1.997,0.898,1.997,1.998L24.529,26.752L24.529,26.752z"
					}),
					SVG.el("circle", {
						cx: "3.583",
						cy: "7.803",
						r: "2.124"
					}),
					SVG.el("circle", {
						cx: "21.018",
						cy: "7.84",
						r: "2.124"
					}),
					SVG.el("circle", {
						cx: "20.981",
						cy: "25.275",
						r: "2.124"
					}),
					SVG.el("circle", {
						cx: "3.546",
						cy: "25.236",
						r: "2.124"
					}),
					SVG.el("circle", {
						fill: "#3F3F3F",
						cx: "12.27",
						cy: "16.491",
						r: "7.15"
					}),
					SVG.el("linearGradient", {
						id: "SVGID_1_",
						gradientUnits: "userSpaceOnUse",
						x1: "-267.8796",
						y1: "-465.3486",
						x2: "-253.5798",
						y2: "-465.3486",
						gradientTransform: "matrix(1 0 0 -1 273 -448.8574)"
					}, [
						SVG.el("stop", {
							offset: "0",
							style: "stop-color:#333333"
						}),
						SVG.el("stop", {
							offset: "1",
							style: "stop-color:#3C3C3C"
						})
					]),
					SVG.el("circle", {
						fill: "url(#SVGID_1_)",
						cx: "12.27",
						cy: "16.491",
						r: "7.15"
					}),
					SVG.el("circle", {
						opacity: "0.6",
						enableBackground: "new",
						cx: "12.395",
						cy: "17.341",
						r: "6.292"
					}),
					SVG.el("circle", {
						fill: "#735348",
						cx: "12.279",
						cy: "16.533",
						r: "6.132"
					}),
					SVG.el("path", {
						opacity: "0.5",
						fill: "#FFFFFF",
						enableBackground: "new",
						d: "M3.308,7.692c0.042-0.1,0.119-0.177,0.228-0.196L3.326,6.158C3.246,6.171,3.161,6.16,3.082,6.184L3.08,6.178C2.585,6.331,2.215,6.7,2.026,7.171L3.308,7.692z",
					}),
					SVG.el("path", {
						opacity: "0.5",
						fill: "#FFFFFF",
						enableBackground: "new",
						d: "M20.741,7.728c0.041-0.102,0.118-0.179,0.229-0.197l-0.207-1.338c-0.082,0.015-0.166,0.002-0.245,0.026l-0.003-0.007c-0.493,0.152-0.864,0.521-1.053,0.993L20.741,7.728z"
					}),
					SVG.el("path", {
						opacity: "0.5",
						fill: "#FFFFFF",
						enableBackground: "new",
						d: "M20.707,25.163c0.041-0.102,0.116-0.18,0.227-0.197l-0.207-1.337c-0.082,0.015-0.166,0.002-0.246,0.026l-0.002-0.01c-0.494,0.152-0.865,0.521-1.053,0.994L20.707,25.163z"
					}),
					SVG.el("path", {
						opacity: "0.5",
						fill: "#FFFFFF",
						enableBackground: "new",
						d: "M3.271,25.126c0.041-0.102,0.118-0.176,0.229-0.195l-0.21-1.339c-0.082,0.017-0.166,0.002-0.245,0.027l-0.002-0.007c-0.495,0.15-0.865,0.521-1.056,0.992L3.271,25.126z"
					}),
					SVG.el("path", {
						opacity: "0.5",
						fill: "#FFFFFF",
						enableBackground: "new",
						d: "M14.473,10.818c-0.475-0.185-0.975-0.318-1.504-0.378c-1.316-0.147-2.576,0.145-3.653,0.742L9.182,11.53c1.203-0.643,2.604-0.941,4.062-0.778c0.448,0.052,0.884,0.152,1.301,0.284L14.473,10.818z"
					}),
				]),
        {
          id: "sb3-buttonBlock",
          fill: "none",
					stroke: "#575E75",
					transform: "scale(1.2)"
        },
			),
			SVG.setProps(
				SVG.group([
					SVG.el("rect", {
						x: "0.86",
						y: "27.622",
						fill: "#8c8c8c",
						width: "6.793",
						height: "2"
					}),
					SVG.el("rect", {
						x: "0.86",
						y: "27.891",
						fill: "#8c8c8c",
						width: "3",
						height: "5.109"
					}),
					SVG.el("rect", {
						x: "17.029",
						y: "27.593",
						fill: "#8c8c8c",
						width: "6.831",
						height: "2"
					}),
					SVG.el("rect", {
						x: "20.86",
						y: "27.861",
						fill: "#8c8c8c",
						width: "3",
						height: "5.139"
					}),
					SVG.el("rect", {
						x: "9.26",
						y: "3.479",
						fill: "#8c8c8c",
						width: "6.2",
						height: "2",
					}),
					SVG.el("rect", {
						x: "10.86",
						fill: "#8c8c8c",
						width: "3",
						height: "6"
					}),
					SVG.el("path", {
						fill: "#6b6b6b",
						d: "M12.357,3.98C5.533,3.98,0,9.514,0,16.342v12.359h12.357H24.72V16.34C24.721,9.514,19.186,3.98,12.357,3.98z M5.432,21.042v-9.4h13.855v9.4H5.432z"
					}),
					SVG.el("path", {
						fill: "#cecece",
						d: "M10.226,8.436c-4.359,1.177-6.938,5.668-5.763,10.026c1.18,4.36,5.666,6.94,10.029,5.765c4.363-1.18,6.94-5.667,5.764-10.03C19.076,9.837,14.59,7.256,10.226,8.436z M9.493,18.503l0.355-2.891l4.321-1.167l1.763,2.319L9.493,18.503z"
					}),
					SVG.el("polygon", {
						points: "11.408,17.987 14.015,17.282 15.146,21.465 12.539,22.17"
					}),
					SVG.el("polygon", {
						points: "14.169,14.444 15.932,16.764 12.741,12.561 12.181,10.491 9.577,11.196 10.133,13.266 9.493,18.503 9.848,15.612"
					}),
					SVG.el("polygon", {
						fill: "#4D4D4D",
						points: "6.521,16.51 7.224,19.115 9.493,18.503 9.848,15.612"
					}),
					SVG.el("polygon", {
						fill: "#4D4D4D",
						points: "14.169,14.444 15.932,16.764 18.202,16.152 17.496,13.546"
					}),
					SVG.el("path", {
						opacity: "0.3",
						d: "M23.746,16.661c-0.044-0.759-0.162-1.528-0.366-2.291c-0.186-0.686-0.438-1.33-0.737-1.944l-0.535,0.182l-0.8-1.063c-0.228-0.347-0.482-0.677-0.749-0.989l-0.841-1.112l0.457-0.343c-2.72-2.503-6.616-3.608-10.449-2.574c-3.827,1.035-6.639,3.951-7.729,7.483l0.566,0.066l-0.167,1.386c-0.071,0.404-0.123,0.814-0.148,1.231L2.09,18.016l-0.555,0.109c0.054,0.683,0.162,1.368,0.347,2.053c0.208,0.763,0.493,1.485,0.837,2.164l0.583-0.47c0.68,1.382,1.645,2.555,2.797,3.486l-0.586,0.466c2.691,2.237,6.386,3.18,10.023,2.2c3.632-0.983,6.352-3.657,7.548-6.943l-0.739-0.112c0.53-1.383,0.772-2.883,0.662-4.42L23.746,16.661z M14.519,24.263c-3.861,1.045-7.839-1.242-8.882-5.102c-1.041-3.862,1.242-7.839,5.103-8.879c3.865-1.044,7.839,1.241,8.882,5.1C20.668,19.247,18.38,23.221,14.519,24.263z"
					}),
					SVG.el("path", {
						d: "M9.648,6.289c-5.55,1.496-8.832,7.207-7.332,12.753c1.497,5.547,7.208,8.834,12.757,7.332c5.546-1.498,8.83-7.208,7.329-12.756C20.905,8.073,15.196,4.789,9.648,6.289z M14.494,24.227c-4.362,1.175-8.852-1.401-10.03-5.764c-1.179-4.364,1.402-8.854,5.763-10.031c4.363-1.177,8.853,1.404,10.032,5.766C21.434,18.56,18.854,23.051,14.494,24.227z"
					}),
					SVG.el("path", {
						fill: "#1A1A1A",
						d: "M23.476,15.719c-0.044-0.76-0.16-1.53-0.368-2.293c-0.183-0.681-0.433-1.328-0.735-1.944l-0.534,0.179L19.447,8.5l0.456-0.343C17.185,5.654,13.291,4.55,9.458,5.584c-3.833,1.035-6.641,3.95-7.731,7.482l0.564,0.067L1.82,17.072l-0.555,0.113c0.052,0.683,0.162,1.368,0.345,2.048c0.208,0.765,0.49,1.486,0.838,2.165l1.577-1.269l2.8,3.479l-1.583,1.277c2.687,2.233,6.383,3.175,10.019,2.195c3.635-0.979,6.355-3.655,7.552-6.94l-2.005-0.303l0.661-4.417L23.476,15.719z M14.248,23.323c-3.861,1.042-7.839-1.243-8.88-5.104c-1.041-3.862,1.241-7.838,5.104-8.878c3.863-1.043,7.836,1.24,8.879,5.104C20.395,18.306,18.109,22.279,14.248,23.323z"
					}),
					SVG.el("circle", {
						opacity: "0.4",
						fill: "#FFFFFF",
						cx: "4.017",
						cy: "11.631",
						r: "0.833"
					}),
					SVG.el("circle", {
						opacity: "0.4",
						fill: "#FFFFFF",
						cx: "17.203",
						cy: "8.071",
						r: "0.834"
					}),
					SVG.el("path", {
						opacity: "0.4",
						fill: "#FFFFFF",
						d: "M10.034,24.568l-0.35-0.085l0.083-0.354l0.348,0.082l0.084-0.347l0.703,0.167l-0.67,2.815l-0.705-0.167L10.034,24.568z"
					}),
					SVG.el("path", {
						opacity: "0.4",
						fill: "#FFFFFF",
						d: "M15.792,26.522l-1.405,0.355l-0.089-0.354l-0.347,0.088l-0.534-2.109l0.349-0.088l-0.089-0.347l1.408-0.355l0.085,0.35l0.356-0.088l0.531,2.106l-0.356,0.088L15.792,26.522z M15.353,26.254l-0.535-2.104l-0.699,0.178l0.531,2.106L15.353,26.254z"
					}),
					SVG.el("path", {
						opacity: "0.4",
						fill: "#FFFFFF",
						d: "M19.662,22.656l0.254-0.252l0.257,0.257l-0.253,0.254l0.511,0.514l-0.519,0.515l-0.51-0.511l-0.771,0.763l-0.511-0.515l0.253-0.25l-0.507-0.519l0.256-0.256l0.514,0.514l-0.261,0.26l0.254,0.256l0.516-0.511l-1.277-1.282l0.518-0.515L19.662,22.656z"
					}),
				]),
				{
					id: "sb3-potiBlock",
					fill: "none",
					stroke: "#575E75",
					transform: "scale(1.1)"
				}
			),
			SVG.setProps(
				SVG.group([
					SVG.el("path", {
						fill: "#8c8c8c",
						d: "M8.993,18.012v5.006c0,1.174-0.417,2.494-0.857,3.892c-0.464,1.469-0.942,2.986-0.942,4.449v1.188h0.008v0H9.36v-0H9.354v-1.188c0-1.129,0.409-2.426,0.842-3.799c0.473-1.493,0.959-3.036,0.959-4.542v-5.006H8.993L8.993,18.012z"
					}),
					SVG.el("path", {
						fill: "#8c8c8c",
						d: "M5.363,18.012c0,0,0,3.994,0,5.186S4.092,25.5,2.973,26.626C1.511,28.097,0,29.618,0,31.359v1.188v0h2.16v-0v-1.023c0-1.096,1.246-2.27,2.345-3.373c1.483-1.493,3.019-3.038,3.019-4.821v-5.314L5.363,18.012L5.363,18.012z"
					}),
					SVG.el("path", {
						fill: "#8c8c8c",
						d: "M15.623,26.91c-0.441-1.396-0.857-2.718-0.857-3.892v-5.006h-2.159v5.006c0,1.506,0.485,3.049,0.957,4.542c0.436,1.373,0.844,2.67,0.844,3.799v1.188h-0.008v0h2.159v-0h0.009v-1.188C16.567,29.896,16.086,28.376,15.623,26.91z"
					}),
					SVG.el("path", {
						fill: "#8c8c8c",
						d: "M20.786,26.625c-1.12-1.127-2.391-2.236-2.391-3.428s0-5.186,0-5.186h-2.16v5.313c0,1.784,1.535,3.329,3.019,4.822c1.101,1.104,2.346,2.274,2.346,3.373v1.022v0h2.16v-0v-1.185C23.76,29.618,22.248,28.097,20.786,26.625z"
					}),
					SVG.el("path", {
						opacity: "0.5",
						fill: "#E6E6E6",
						d: "M19.133,13.176V7.184C19.133,3.216,15.916,0,11.948,0C7.982,0,4.765,3.216,4.765,7.184v13.834c1.5,1.674,4.153,2.789,7.184,2.789c4.687,0,8.48-2.658,8.48-5.938v-1.547C20.432,15.167,19.95,14.089,19.133,13.176z"
					}),
					SVG.el("path", {
						opacity: "0.9",
						fill: "#D1D1D1",
						d: "M19.133,13.176v3.146c0,2.777-3.217,5.029-7.185,5.029c-3.966,0-7.184-2.252-7.184-5.029v3.148v1.547c1.5,1.672,4.153,2.789,7.184,2.789c4.687,0,8.48-2.658,8.48-5.938v-1.546C20.432,15.167,19.95,14.089,19.133,13.176z"
					}),
					SVG.el("path", {
						opacity: "0.24",
						d: "M19.133,13.176v3.146c0,2.777-3.217,5.029-7.185,5.029c-3.966,0-7.184-2.252-7.184-5.029v3.148c1.5,1.674,4.153,2.789,7.184,2.789c4.687,0,8.48-2.658,8.48-5.938C20.432,15.167,19.95,14.089,19.133,13.176z"
					}),
					SVG.el("ellipse", {
						opacity: "0.5",
						fill: "#CCCCCC",
						cx: "11.95",
						cy: "16.323",
						rx: "7.183",
						ry: "5.029"
					}),
					SVG.el("polygon", {
						fill: "#999999",
						points: "15.692,8.637 16.133,9.153 12.981,12.518 15.978,12.518 15.978,13.268 15.978,16.325 16.903,16.325 16.903,8.637"
					}),
					SVG.el("polygon", {
						fill: "#999999",
						points: "12.729,8.921 12.223,9.796 10.278,9.796 9.772,8.921 8.22,8.921 6.999,9.776 6.999,16.325 8.865,16.323 8.865,12.518 11.563,12.518 14.916,8.921"
					}),
					SVG.el("path", {
						opacity: "0.6",
						fill: "#FFFFFF",
						d: "M15.295,3.801l1.459-0.277c-0.849-1.149-2.108-1.986-3.588-2.271l0.252,1.097C14.194,2.625,14.846,3.141,15.295,3.801z"
					}),
					SVG.el("path", {
						opacity: "0.6",
						fill: "#FFFFFF",
						d: "M5.545,20.196v1.546c0.66,0.536,1.447,0.989,2.34,1.334v-1.548C6.992,21.186,6.205,20.731,5.545,20.196z"
					}),
					SVG.el("path", {
						opacity: "0.6",
						fill: "#FFFFFF",
						d: "M15.987,20.481c-0.264,0.125-0.537,0.233-0.821,0.334c-0.06,0.021-0.119,0.041-0.181,0.062c-0.569,0.188-1.184,0.321-1.821,0.397c-0.076,0.011-0.154,0.019-0.23,0.025c-0.321,0.03-0.647,0.053-0.983,0.053c-0.148,0-0.312-0.01-0.478-0.024c-1.223-0.058-2.362-0.317-3.344-0.75v-8.507V7.184c0-1.49,0.86-2.766,2.104-3.396l-0.021-0.051L8.946,2.203C7.257,3.223,6.115,5.065,6.115,7.182V19.25c-0.049-0.049-0.313-0.312-0.485-0.534l-0.312,0.699c1.426,1.503,3.861,2.497,6.632,2.497c1.703,0,3.277-0.379,4.572-1.019l-0.531-0.412C15.987,20.481,15.987,20.481,15.987,20.481z"
					})
				]),
				{
					id: "sb3-rgbBlock",
					fill: "none",
					stroke: "#575E75",
					transform: "scale(1.2)"
				}
			)
    ]
  }

  static makeStyle() {
    const style = SVG.el("style")
    style.appendChild(SVG.cdata(Style.cssContent))
    return style
  }

  static get defaultFont() {
    return "500 12pt Helevetica Neue, Helvetica, sans-serif"
  }
  static get commentFont() {
    return "400 12pt Helevetica Neue, Helvetica, sans-serif"
  }
}
