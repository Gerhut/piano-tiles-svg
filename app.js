void function (svg) {
  var svgns = svg.namespaceURI
  for (var y = 0; y < 100; y += 25)
    for (var x = 0; x < 100; x += 25) {
      var rect = document.createElementNS(svgns, 'rect')
      rect.className = "black"
      rect.setAttribute('x', x + '%')
      rect.setAttribute('y', y + '%')
      rect.setAttribute('width', '25%')
      rect.setAttribute('height', '25%')
      svg.appendChild(rect)
    }
} (document.getElementsByTagName('svg')[0])