
import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  // O método componentDidMount() é executado depois que a saída do componente é renderizada no DOM.
  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

/*

Quando <Clock /> é passado para ReactDOM.render(), o React chama o construtor do componente Clock. Como Clock precisa exibir a hora atual, ele inicializa this.state com um objeto incluindo a hora atual. Mais tarde, atualizaremos este state.

React chama então o método render() do componente Clock. É assim que o React aprende o que deve ser exibido na tela. React em seguida, atualiza o DOM para coincidir com a saída de renderização do Clock.

Quando a saída do Clock é inserida no DOM, o React chama o método do ciclo de vida componentDidMount(). Dentro dele, o componente Clock pede ao navegador para configurar um temporizador para chamar o método tick() do componente uma vez por segundo.

A cada segundo o navegador chama o método tick(). Dentro dele, o componente Clock agenda uma atualização de UI chamando setState() com um objeto contendo a hora atual. Graças à chamada setState(), o método render() será diferente e, portanto, a saída de renderização incluirá a hora atualizada. React atualiza o DOM de acordo.

Se o componente Clock for removido do DOM, o React chama o método do ciclo de vida componentWillUnmount() para que o temporizador seja interrompido.


*/