var data = {
    "nodes": [
        {"id": "Sam"},
        {"id": "Diana"},
        {"id": "Emily"},
        {"id": "Kelly"},
        {"id": "Rebecca"},
        {"id": "Alexis"},
        {"id": "Preston"}
    ],
    "edges": [
      { "from": "Sam", "to": "Diana" },
      { "from": "Sam", "to": "Emily" },
      { "from": "Sam", "to": "Kelly" },
      { "from": "Sam", "to": "Rebecca" },
      { "from": "Sam", "to": "Alexis" },
      { "from": "Sam", "to": "Preston" },

      { "from": "Diana", "to": "Sam" },
      { "from": "Diana", "to": "Emily" },
      { "from": "Diana", "to": "Kelly" },
      { "from": "Diana", "to": "Rebecca" },
      { "from": "Diana", "to": "Alexis" },
      { "from": "Diana", "to": "Preston" },

      { "from": "Emily", "to": "Diana" },
      { "from": "Emily", "to": "Sam" },
      { "from": "Emily", "to": "Kelly" },
      { "from": "Emily", "to": "Rebecca" },
      { "from": "Emily", "to": "Alexis" },

      { "from": "Kelly", "to": "Diana" },
      { "from": "Kelly", "to": "Emily" },
      { "from": "Kelly", "to": "Sam" },
      { "from": "Kelly", "to": "Rebecca" },
      { "from": "Kelly", "to": "Alexis" },
      { "from": "Kelly", "to": "Preston" },

      { "from": "Rebecca", "to": "Diana" },
      { "from": "Rebecca", "to": "Emily" },
      { "from": "Rebecca", "to": "Kelly" },
      { "from": "Rebecca", "to": "Sam" },
      { "from": "Rebecca", "to": "Alexis" },

      { "from": "Alexis", "to": "Diana" },
      { "from": "Alexis", "to": "Emily" },
      { "from": "Alexis", "to": "Kelly" },
      { "from": "Alexis", "to": "Rebecca" },
      { "from": "Alexis", "to": "Sam" },
    ]
}


var chart = anychart.graph(data);
var nodes = chart.nodes();
var edges = chart.edges();


// Normal
nodes.normal().height(10);
nodes.normal().fill("#0677A1");
edges.normal().stroke("#0677A1");
nodes.normal().stroke(null);

// Hovered
nodes.hovered().height(20);
nodes.hovered().fill("white");
edges.hovered().stroke("white");

// Selected
nodes.selected().height(20);
nodes.selected().fill("#DA7B93");
edges.selected().stroke("#DA7B93");


// Show Names
nodes.labels().enabled(true);

// Chart Style
chart.title("Friend Chart");
chart.background().fill("#2F4454");


// Draw Network
chart.container("network").draw();