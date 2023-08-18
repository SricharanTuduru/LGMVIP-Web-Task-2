import Users from "./Component/card";
import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: true };
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    document.getElementById("main").style.display = "flex";
    const source = "https://reqres.in/api/users?page=1";
    fetch(source)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark  m-3">
          <div className="container">
            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAb1BMVEUAAAD////8/PwEBATg4OCUlJT4+PhgYGCqqqpnZ2fq6up3d3d9fX0+Pj6+vr4ICAiampry8vKLi4vJycni4uI6OjoSEhJaWlomJiYfHx/CwsIYGBjU1NRubm5mZmZNTU20tLQuLi5GRkampqaDg4NAmMNxAAAD/0lEQVR4nO3cC2+qMBgG4F4QHVMBb/M60fn/f+Pp14ITZYLJGc2+vs9ylizxJO27tvTGhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAEOjXPpy++D/+Bq3T7rVaiVc+/We8XCV2GWgtjtmgs2yQnX0X+f9LxUy+YpT6LvFvuLRVW7kv+iZnDPuCqdGzDBT9U7GMbQxSZtRwGOrQFyiAWMr4YJ8Mvgv8Cz5GzxSj0deCApCxutjpAbsMdIcqjWVuApD5yTQBfgk8o6vRL7ODgkyGngvkgf2dmxQyGhVNBGumw+Ez2n6JKUUgZbR0P4ZF01CRFu6hEG3MQoHjSqGFafmbLfUDJee6ahbB2exdBNud/ZFVBOnePPBj1cY8Eu1gULBcMC/czLdtbkiDoZJTlhMjsXD1exqBWSVIZRrLwCbAL4RItjYEZVeKUpoIUp0Kfp1hIdv7gkviQB9n+USIaAk0+xi2OvKdG9oM3jp+mGkKkWvm7YtGlr3Ase3g0wx0rRnwPE8gVV9o/TVzfCiWvscDquJulYqN7yL17iYDISb2Oem7SL27y4BmC76L1LtaX1jaCaHvIvWuNj+Y2Imz1/L4cJeBfNYOuD4YGjI4vN8Zjy/m++XIfX5gTZ4tIqNdIBlQBA/7CdX+iWa8Xqi1g8a1tIlAsI2A9g+keivHu0nTvoGkbaSR73L+Iv01NY42Ai1O22lNUe0ycY7gSjcuCiex3UtVY7794EpXJ4q3OWgxTNwAOeC6eXLlKt+wdj7QbrJU+aePUvUpbegDrkHMyk33g4dS9Uo3DQR2U2lAg2Esk6OPYvXKXk29D0G7uwYx3cBasl0ltCrc8dN+0umKzt+2mifJInnkzhdpicA/AztPfJgdK/dtfvJdun5E5Xy4ftTu7hpwnxVU7BkLHSrftIXYXkLc8ryD2SBq3ixQ8kuwPVO5Z9fO2fjBe/mqSgjKs7YG/J8Hldoeiqt2OJUv3WRgZgLU+APpADdqZyyuAYTWDO7OXKkN7DyXqH+188ZlTnwXqXf3e+sS542BnzsLZECQATIgwWdg5gfIAO2AQlgGnwHtJgedgRkNdoV7o913kXpXZkBvrs3dhvLcd5F6V+4jabHeu1ZQhLl/QK+oLCOKIKY7N8Ep28Epd5dusgC30lwGw3PiTpfsnZswMxjYgxYZX3yXxg931ube4Qw0gjKD2ESQHwIcCqxrO1BHwfD1zU7Kc2eZfPguiT+Ru2yQr30XxCP3zvf+HN4T8ZttB/tUpOFNka8iMz/er1n+aYfOzJhYsH6Rt4MonGtHP0qyABcIdav3EBeKD/i/mtAiDeEeKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzoHzQ1IaJmI/S5AAAAAElFTkSuQmCC" />
              <h1>FlipHour</h1>
            </span>
            <button onClick={this.showUsers}>Get Users</button>
          </div>
        </nav>

        <Users loading={this.state.loading} users={this.state.users_data} />
      </>
    );
  }
}

export default App;
