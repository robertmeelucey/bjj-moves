export function addEmoji(name) {
  switch (name) {
    case "Attack":
      return "Attack 🥊";
    case "Sweep":
      return "Sweep 🧹";
    case "Escape":
      return "Escape 🏃‍♂️‍➡️";
    case "Transition":
      return "Transition 🔄";
    case "Takedown":
      return "Takedown 🤼‍♂️";
    case "Guard Pass":
      return "Guard Pass 🐍";
    case "Gi":
      return "Gi 🥋";
    case "No Gi":
      return "No Gi ❌🥋❌";
    default:
      return name;
  }
}
