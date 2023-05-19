const dom = new Proxy(
  {},
  {
    get(target, property) {
      // console.log('property', property)

      return function (attrs = {}, ...children) {
        console.log('attrs', attrs)
        console.log('children', children)

        const el = document.createElement(property);
        // 处理属性
        for (let prop of Object.keys(attrs)) {
          el.setAttribute(prop, attrs[prop]);
        }
        // 处理children
        for (let child of children) {
          if (typeof child === "string") {
            child = document.createTextNode(child);
          }
          el.appendChild(child);
        }
        return el;
      };
    },
  }
);

/**
 * 第一个参数是attrs
 * 后面的参数是children
 */
const el = dom.div(
  {},
  "Hello, my name is ",
  dom.a({ href: "//example.com" }, "Mark"),
  ". I like:",
  dom.ul({}, dom.li({}, "The web"), dom.li({}, "Food"), dom.li({}, "…actually that's it"))
);

document.body.appendChild(el);

export {};
