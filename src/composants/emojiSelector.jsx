

const emojis = [
  "😭", // pleurs à chaudes larmes
  "😥", // mécontent avec larme
  "☹️", // sourire à l'envers
  "😕", // perplexe
  "😐", // neutre
  "😄", // content
  "😊", // heureux timide
  "😎", // cool
];

export default function EmojiSelector() {
  const selected = 5; // exemple : emoji heureux sélectionné

  return (
    <div className="w-[100%] p-4 flex justify-around gap-4">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className={`w-16 h-13 rounded-[20%] flex justify-center items-center text-3xl cursor-pointer transition-transform duration-300
            ${selected === index ? "bg-cyan-400 rotate-3 scale-110" : "bg-gray-500"}
          `}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
}
