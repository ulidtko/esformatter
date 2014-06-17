"use strict";

exports.getIndentEdges = function (node) {
  var braceA = node.startToken;
  var braceB = node.endToken;
  return {
    startToken: braceA.prev,
    endToken: braceB.next
  };
}
