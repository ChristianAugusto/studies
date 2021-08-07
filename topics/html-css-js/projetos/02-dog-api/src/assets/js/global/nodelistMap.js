
export default () => {

  NodeList.prototype.map = function(_callback) {
    for (let i = 0; i < this.length; i++) {
      _callback(this[i], i, this);
    }
  };

};