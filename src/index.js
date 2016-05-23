module.exports =  function (options) {
  const  Plugin =  options.Plugin;
  const t = options.types;

  return {
    visitor: {
      ObjectProperty(path) {
        //catch all proptyprs from objects.
        // with React.createClass
        const node = path.node;
        console.log('key name', node.key.name);
      },
      ClassProperty(path) {
        const node = path.node;
        console.log('key name', node.key.name);
      },
      AssignmentExpression(path){
        const node = path.node;
        if(node.left) {
          console.log('key name', node.left.property.name);
        }
      }
    }
  }
};
