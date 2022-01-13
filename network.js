
var connections = {
  "Sam" : ["Diana", "Emily", "Kelly", "Rebecca", "Alexis", "Preston", "Emma", "Nicole", "Ellie", "Taylor", "Richard", "Gwendolyn", "Aaron", "Kaelyn", "Marina", "Megan", "Katie D", "Elizabeth", "Hope", "Riley", "Sarah Anne", "Sarah", "Arja", "Priya", "Reynolds", "Madeline", "Sam P"],
  "Diana" : ["Emily", "Kelly", "Rebecca", "Alexis", "Preston", "Ellie", "Patrick", "David", "Jenna", "Megan W", "Stuti", "Alice", "Miranda", "Abby", "Brianna", "Ale", "Olivia", "Chloe", "Aaron", "Reynolds", "Gigi", "Nymisha", "Julie", "Sam P", "Nasiha", "Nicole", "Arja", "Riley", "Priya", "Alex", "Mayra", "Maddie", "Cristina", "Samia", "Nima"],
  "Emily" : ["Kelly", "Rebecca", "Alexis"],
  "Kelly" : ["Rebecca", "Alexis", "Preston"],
  "Rebecca" : ["Alexis"],
  "Alexis" : [],
  "Preston" : ["Biden", "Reynolds", "Angelina Jolie"],
  "Nicole" : [],
  "Ellie" : [],
  "Faith" : [],
  "Emma" : [],
  "Biden" : ["Kamala Harris", "Elizabeth Warren", "President Ivan"],
  "Kamala Harris" : ["Elizabeth Warren"],
  "Angelina Jolie" : [],
  "Kevin" : [],
  "Ellen" : [],
  "Taylor" : [],
  "Reanna" : [],
  "Flora" : [],
  "Eli" : [],
  "Jack" : [],
  "Richard" : [],
  "Aaron" : ["Elizabeth Warren"],
  "Gwendolyn" : [],
  "Kaelyn" : [],
  "Marina" : [],
  "Megan" : [],
  "Katie D" : [],
  "Elizabeth" : [],
  "Hope" : [],
  "Sarah Anne" : [],
  "Riley" : [],
  "Sarah" : [],
  "Arja" : [],
  "Reynolds" : ["Helena Bonham Carter"],
  "Helena Bonham Carter" : [],
  "Sam P" : [],
  "Priya" : ["Julie", "Olivia", "Khan", "Wendy", "Mayra", "Jasmine", "Alex", "Madeline", "Jackie", "Arja", "Riley", "Lesley"],
  "Jenna" : [],
  "Patrick" : [],
  "Caroline" : [],
  "David" : [],
  "Gabe" : [],
  "Megan W" : [],
  "Lesley" : [],
  "Gui" : [],
  "Stuti" : [],
  "Ashley" : [],
  "Elenor" : [],
  "Simon" : [],
  "Alice" : ["President Ivan", "Teddy Roosevelt"],
  "Miranda" : [],
  "Steph" : [],
  "Libba" : [],
  "Abby" : [],
  "Jasmine" : [],
  "Cristina" : [],
  "Zain" : [],
  "Maddie" : [],
  "Brenna" : [],
  "Olivia" : [],
  "Ale" : [],
  "Chloe" : [],
  "Florence" : [],
  "Corrie" : [],
  "Max" : [],
  "Khan" : [],
  "Gigi" : ["Nicole", "Olivia", "Zain", "Jasmine", "Maddie", "Brenna", "Corrie", "Khan", "Arja", "Nima", "Nymisha", "Wendy", "Flora", "Alex", "Priya"],
  "Nymisha" : [],
  "Julie" : [],
  "Wendy" : [],
  "Nasiha" : ["Sam P", "Olivia", "Julie", "Gigi", "Nymisha", "Wendy", "Khan", "Mayra", "Alex", "Priya", "Arja", "Nima", "Max", "Jasmine"],
  "Mayra" : [],
  "Jackie" : [],
  "Madeline" : [],
  "Alex" : [],
  "Teddy Roosevelt" : [],
  "President Ivan" : [],
  "Elizabeth Warren" : [],
  "Samia" : [],
  "Nima" : [],
  "Brianna" : []
}

var data_nodes = [];
var data_edges = [];

for (const [key, value] of Object.entries(connections)) {
  data_nodes.push({"id" : key});
  let temp = value.map(person => ({ "from": key, "to": person }));
  data_edges.push(...temp);
}


// var chart = anychart.graph(data);
var chart = anychart.graph({"nodes":data_nodes, "edges":data_edges});
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