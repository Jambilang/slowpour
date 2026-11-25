const API = {
  hot: "https://api.sampleapis.com/coffee/hot",
  iced: "https://api.sampleapis.com/coffee/iced"
};

const EXTRA = {
  hot: [
    { id: "x-h1", title: "Caramel Macchiato", description: "Steamed milk and vanilla, marked with espresso and finished with a caramel drizzle.", ingredients: ["Espresso", "Steamed milk", "Vanilla syrup", "Caramel drizzle"] },
    { id: "x-h2", title: "Spanish Latte", description: "A sweet, creamy latte made with condensed milk for a silky finish.", ingredients: ["Espresso", "Steamed milk", "Condensed milk"] },
    { id: "x-h3", title: "Hazelnut Latte", description: "A smooth latte with a toasted, nutty sweetness.", ingredients: ["Espresso", "Steamed milk", "Hazelnut syrup"] },
    { id: "x-h4", title: "Vanilla Latte", description: "A classic latte lightly sweetened with vanilla.", ingredients: ["Espresso", "Steamed milk", "Vanilla syrup", "Milk foam"] },
    { id: "x-h5", title: "White Chocolate Mocha", description: "Rich espresso melted into white chocolate and steamed milk.", ingredients: ["Espresso", "White chocolate sauce", "Steamed milk", "Whipped cream"] },
    { id: "x-h6", title: "Salted Caramel Latte", description: "Sweet caramel balanced with a pinch of sea salt.", ingredients: ["Espresso", "Steamed milk", "Caramel sauce", "Sea salt"] },
    { id: "x-h7", title: "Brown Sugar Oat Latte", description: "Espresso with oat milk and a deep, molasses-like brown sugar syrup.", ingredients: ["Espresso", "Oat milk", "Brown sugar syrup", "Cinnamon"] },
    { id: "x-h8", title: "Pumpkin Spice Latte", description: "A cozy autumn latte with pumpkin and warm spices.", ingredients: ["Espresso", "Steamed milk", "Pumpkin sauce", "Cinnamon", "Nutmeg"] },
    { id: "x-h9", title: "Chai Latte", description: "Spiced black tea simmered with milk. No coffee, all comfort.", ingredients: ["Black tea", "Steamed milk", "Cinnamon", "Cardamom", "Ginger"] },
    { id: "x-h10", title: "Matcha Latte", description: "Stone-ground green tea whisked with steamed milk.", ingredients: ["Matcha powder", "Steamed milk", "Honey"] },
    { id: "x-h11", title: "Hot Chocolate", description: "Thick cocoa with steamed milk, topped with whipped cream.", ingredients: ["Dark chocolate", "Steamed milk", "Whipped cream"] }
  ],
  iced: [
    { id: "x-i1", title: "Iced Spanish Latte", description: "Chilled espresso and milk sweetened with condensed milk.", ingredients: ["Espresso", "Cold milk", "Condensed milk", "Ice"] },
    { id: "x-i2", title: "Iced Caramel Macchiato", description: "Layers of vanilla milk, ice and espresso with a caramel top.", ingredients: ["Espresso", "Cold milk", "Vanilla syrup", "Caramel drizzle", "Ice"] },
    { id: "x-i3", title: "Iced Vanilla Latte", description: "Light, refreshing and gently sweet.", ingredients: ["Espresso", "Cold milk", "Vanilla syrup", "Ice"] },
    { id: "x-i4", title: "Iced Hazelnut Latte", description: "Cold espresso and milk with toasted hazelnut flavor.", ingredients: ["Espresso", "Cold milk", "Hazelnut syrup", "Ice"] },
    { id: "x-i5", title: "Iced White Chocolate Mocha", description: "Creamy white chocolate over ice with a shot of espresso.", ingredients: ["Espresso", "White chocolate sauce", "Cold milk", "Ice"] },
    { id: "x-i6", title: "Cold Brew", description: "Coffee steeped slowly in cold water for 18 hours. Smooth and low in acidity.", ingredients: ["Cold brew coffee", "Ice"] },
    { id: "x-i7", title: "Sea Salt Cold Foam Cold Brew", description: "Cold brew topped with a thick, lightly salted cream foam.", ingredients: ["Cold brew coffee", "Cold foam", "Sea salt", "Ice"] },
    { id: "x-i8", title: "Iced Brown Sugar Oat Latte", description: "Oat milk, espresso and brown sugar syrup shaken over ice.", ingredients: ["Espresso", "Oat milk", "Brown sugar syrup", "Ice"] },
    { id: "x-i9", title: "Espresso Tonic", description: "A bright, bubbly mix of tonic water and a shot of espresso.", ingredients: ["Espresso", "Tonic water", "Ice", "Lemon peel"] },
    { id: "x-i10", title: "Affogato", description: "A scoop of vanilla ice cream drowned in hot espresso.", ingredients: ["Espresso", "Vanilla ice cream"] },
    { id: "x-i11", title: "Iced Matcha Latte", description: "Whisked matcha and cold milk poured over ice.", ingredients: ["Matcha powder", "Cold milk", "Honey", "Ice"] }
  ],
  blended: [
    { id: "x-b1", title: "Caramel Frappe", description: "Blended coffee, milk and ice with caramel and whipped cream.", ingredients: ["Coffee", "Milk", "Ice", "Caramel sauce", "Whipped cream"] },
    { id: "x-b2", title: "Mocha Frappe", description: "Coffee and chocolate blended into a frosty shake.", ingredients: ["Coffee", "Chocolate sauce", "Milk", "Ice", "Whipped cream"] },
    { id: "x-b3", title: "Java Chip Frappe", description: "Mocha frappe with crunchy chocolate chips blended in.", ingredients: ["Coffee", "Chocolate chips", "Milk", "Ice", "Whipped cream"] },
    { id: "x-b4", title: "Vanilla Bean Frappe", description: "A coffee-free classic, creamy and sweet with real vanilla.", ingredients: ["Vanilla bean", "Milk", "Ice", "Whipped cream"] },
    { id: "x-b5", title: "Cookies and Cream Frappe", description: "Chocolate cookie crumbs blended with cream and ice.", ingredients: ["Chocolate cookies", "Milk", "Ice", "Whipped cream"] },
    { id: "x-b6", title: "Coffee Jelly Frappe", description: "Blended coffee with soft coffee jelly cubes at the bottom.", ingredients: ["Coffee", "Coffee jelly", "Milk", "Ice"] },
    { id: "x-b7", title: "Matcha Frappe", description: "Earthy green tea blended with milk and ice.", ingredients: ["Matcha powder", "Milk", "Ice", "Whipped cream"] },
    { id: "x-b8", title: "Dark Chocolate Frappe", description: "Deep, bittersweet cocoa blended thick and cold.", ingredients: ["Dark chocolate", "Milk", "Ice", "Whipped cream"] }
  ]
};

const ADDONS = [
  { name: "Milk", items: ["Whole milk", "Skim milk", "Oat milk", "Almond milk", "Soy milk", "Coconut milk", "Lactose-free milk"] },
  { name: "Syrups", items: ["Vanilla", "Caramel", "Hazelnut", "Brown sugar", "Mocha", "White chocolate", "Cinnamon", "Pumpkin spice", "Peppermint"] },
  { name: "Espresso", items: ["Extra shot", "Decaf", "Ristretto", "Lungo", "Cold brew base"] },
  { name: "Toppings", items: ["Whipped cream", "Cold foam", "Caramel drizzle", "Chocolate drizzle", "Cocoa powder", "Cinnamon powder", "Sea salt", "Chocolate chips"] },
  { name: "Extras", items: ["Coffee jelly", "Pearls", "Vanilla ice cream", "Extra ice", "Less sugar", "No ice"] }
];

/* ---------- Storage (browser only, no server needed) ---------- */

const subs = {};
const memory = {};

function readStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (e) {
    return memory[key] || [];
  }
}

function writeStore(key, list) {
  memory[key] = list;
  try { localStorage.setItem(key, JSON.stringify(list)); } catch (e) {}
}

function pushStore(key, item) {
  const list = readStore(key);
  list.push(item);
  writeStore(key, list);
  (subs[key] || []).forEach(function (cb) { cb(readStore(key)); });
}

function subscribe(key, cb) {
  (subs[key] = subs[key] || []).push(cb);
  cb(readStore(key));
}

// Keep other open tabs of the same site in sync
window.addEventListener("storage", function (e) {
  if (e.key && subs[e.key]) subs[e.key].forEach(function (cb) { cb(readStore(e.key)); });
});

function getName() {
  try { return localStorage.getItem("slowpour-name") || ""; } catch (e) { return ""; }
}

function saveName(v) {
  try { localStorage.setItem("slowpour-name", v); } catch (e) {}
}

function watchComments(targetId, cb) {
  subscribe("slowpour-comments-" + targetId, cb);
}

function addComment(targetId, name, text) {
  pushStore("slowpour-comments-" + targetId, { name: name, text: text, time: Date.now() });
}

function watchPosts(cb) {
  subscribe("slowpour-posts", function (list) { cb(list.slice().reverse()); });
}

function addPost(name, title, text) {
  pushStore("slowpour-posts", { id: String(Date.now()), name: name, title: title, text: text, time: Date.now() });
}

/* ---------- Helpers ---------- */

function make(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}

function stamp(d) {
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) +
    " " + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

/* ---------- Comments ---------- */

function commentBox(targetId) {
  const box = make("div", "comments");
  const list = make("div", "comment-list");
  const form = make("form", "comment-form");
  const name = make("input");
  name.placeholder = "Your name";
  name.maxLength = 40;
  name.required = true;
  name.setAttribute("aria-label", "Your name");
  const msg = make("textarea");
  msg.placeholder = "Write a comment";
  msg.maxLength = 500;
  msg.rows = 3;
  msg.required = true;
  msg.setAttribute("aria-label", "Comment");
  const btn = make("button", "btn", "Post comment");
  btn.type = "submit";
  form.append(name, msg, btn);
  box.append(list, form);

  name.value = getName();

  watchComments(targetId, function (items) {
    list.replaceChildren();
    if (!items.length) {
      list.append(make("p", "notice", "No comments yet. Be the first."));
      return;
    }
    items.forEach(function (c) {
      const row = make("div", "comment");
      const head = make("div");
      head.append(make("b", "", c.name));
      head.append(make("time", "", stamp(new Date(c.time))));
      row.append(head, make("p", "", c.text));
      list.append(row);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addComment(targetId, name.value.trim(), msg.value.trim());
    saveName(name.value.trim());
    msg.value = "";
  });

  return box;
}

/* ---------- Drinks ---------- */

async function fetchDrinks(type) {
  let base = [];
  if (API[type]) {
    try {
      const res = await fetch(API[type]);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) base = data;
      }
    } catch (e) {
      base = [];
    }
  }
  const seen = new Set(base.map(function (d) { return String(d.title).toLowerCase(); }));
  const extras = (EXTRA[type] || []).filter(function (d) { return !seen.has(d.title.toLowerCase()); });
  return base.concat(extras);
}

function renderAddons() {
  const wrap = document.getElementById("addons");
  if (!wrap) return;
  ADDONS.forEach(function (group) {
    const box = make("div", "addon-group");
    box.append(make("h3", "", group.name));
    const row = make("div", "chips");
    group.items.forEach(function (item) { row.append(make("span", "chip", item)); });
    box.append(row);
    wrap.append(box);
  });
}

async function initHome() {
  const wrap = document.getElementById("picks");
  try {
    const drinks = await fetchDrinks("hot");
    const chosen = drinks.sort(function () { return Math.random() - 0.5; }).slice(0, 3);
    wrap.replaceChildren();
    chosen.forEach(function (d) {
      const p = make("div", "pick");
      p.append(make("h3", "", d.title));
      p.append(make("p", "", d.description));
      wrap.append(p);
    });
  } catch (e) {
    wrap.replaceChildren(make("p", "notice", "The drink list could not load. Open the Explore page to try again."));
  }
}

function initMenu() {
  const grid = document.getElementById("grid");
  const sentinel = document.getElementById("sentinel");
  const search = document.getElementById("search");
  const count = document.getElementById("count");
  const tabs = document.querySelectorAll(".tabs button");
  const cache = {};
  const state = { type: "hot", list: [], shown: 0 };
  const step = 9;

  function card(d, type) {
    const c = make("article", "card");
    const photo = make("div", "photo");
    if (d.image) {
      const img = make("img");
      img.loading = "lazy";
      img.alt = d.title;
      img.src = d.image;
      img.addEventListener("error", function () {
        photo.replaceChildren(make("span", "", d.title));
      });
      photo.append(img);
    } else {
      photo.append(make("span", "", d.title));
    }
    const body = make("div", "body");
    body.append(make("h3", "", d.title));
    body.append(make("p", "desc", d.description || ""));
    if (d.ingredients && d.ingredients.length) {
      body.append(make("p", "ing", d.ingredients.join(", ")));
    }
    const toggle = make("button", "toggle", "Comments");
    toggle.type = "button";
    let box = null;
    toggle.addEventListener("click", function () {
      if (!box) {
        box = commentBox("drink-" + type + "-" + d.id);
        body.append(box);
        toggle.textContent = "Hide comments";
        return;
      }
      box.hidden = !box.hidden;
      toggle.textContent = box.hidden ? "Comments" : "Hide comments";
    });
    body.append(toggle);
    c.append(photo, body);
    return c;
  }

  function more() {
    const type = state.type;
    state.list.slice(state.shown, state.shown + step).forEach(function (d) { grid.append(card(d, type)); });
    state.shown += step;
    sentinel.textContent = state.shown >= state.list.length ? (state.list.length ? "That is the whole menu." : "") : "Loading more...";
    observer.unobserve(sentinel);
    observer.observe(sentinel);
  }

  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && state.shown < state.list.length) more();
  }, { rootMargin: "300px" });

  function render() {
    const all = cache[state.type] || [];
    const q = search.value.trim().toLowerCase();
    state.list = all.filter(function (d) {
      const hay = (d.title + " " + (d.description || "") + " " + (d.ingredients || []).join(" ")).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    state.shown = 0;
    grid.replaceChildren();
    count.textContent = state.list.length + " drinks";
    if (!state.list.length) {
      sentinel.textContent = "Nothing matches that search.";
      return;
    }
    more();
  }

  async function load(type) {
    state.type = type;
    tabs.forEach(function (t) { t.setAttribute("aria-pressed", String(t.dataset.type === type)); });
    if (!cache[type]) {
      sentinel.textContent = "Loading drinks...";
      grid.replaceChildren();
      cache[type] = await fetchDrinks(type);
      if (state.type !== type) return;
    }
    render();
  }

  tabs.forEach(function (t) { t.addEventListener("click", function () { load(t.dataset.type); }); });
  search.addEventListener("input", render);
  renderAddons();
  load("hot");
}

/* ---------- Community ---------- */

function initCommunity() {
  const postsEl = document.getElementById("posts");
  const form = document.getElementById("postForm");
  const msg = document.getElementById("pMsg");
  const nameIn = document.getElementById("pName");
  const titleIn = document.getElementById("pTitle");
  const bodyIn = document.getElementById("pBody");

  nameIn.value = getName();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addPost(nameIn.value.trim(), titleIn.value.trim(), bodyIn.value.trim());
    saveName(nameIn.value.trim());
    titleIn.value = "";
    bodyIn.value = "";
    msg.textContent = "Published.";
  });

  watchPosts(function (posts) {
    postsEl.replaceChildren();
    if (!posts.length) {
      postsEl.append(make("p", "notice", "No posts yet. Write the first one."));
      return;
    }
    posts.forEach(function (p) {
      const art = make("article", "post");
      art.append(make("h2", "", p.title));
      art.append(make("p", "by", "By " + p.name + " on " + stamp(new Date(p.time))));
      art.append(make("p", "text", p.text));
      const toggle = make("button", "toggle", "Comments");
      toggle.type = "button";
      let box = null;
      toggle.addEventListener("click", function () {
        if (!box) {
          box = commentBox("post-" + p.id);
          art.append(box);
          toggle.textContent = "Hide comments";
          return;
        }
        box.hidden = !box.hidden;
        toggle.textContent = box.hidden ? "Comments" : "Hide comments";
      });
      art.append(toggle);
      postsEl.append(art);
    });
  });
}

const page = document.body.dataset.page;
if (page === "home") initHome();
if (page === "menu") initMenu();
if (page === "community") initCommunity();