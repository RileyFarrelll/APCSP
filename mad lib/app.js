let outputDivUI;
let inputDivUI;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightgray');

  addInputOutputElements();

  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    true
  );
  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    true
  );
  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    true
  );

  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    true
  );
  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    true
  );





  // Creates next button and styles it
  const outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler)
  .parent(inputDivUI);

  function showOutputHandler() {
    outputDivUI.show();
    inputDivUI.hide();
  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game');
  createElement('h4', 'Enter Some Text to See The Result');

  inputDivUI = createDiv('').id('inputs');
  outputDivUI = createDiv('').id('outputs');
  outputDivUI.hide();
}

function addTopic(topic, intro, detail, uppercase, num) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI);

  let inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI);
  let userinput = inputFieldUI.value();
  if (uppercase === true) {
    userinput = inputFieldUI.value().toUpperCase();
  }
  inputFieldUI.changed(updateOutputHandler);

  let output = createP('').parent(outputDivUI);

  function updateOutputHandler() {
    output.html(intro + userinput + detail);
    if(num===true)
    userinput = Number(userinput)
  userinput= userinput+30
  }
}