import { useState } from 'preact/hooks';

export default function Greeting({messages}: {messages: any}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="flex items-center space-x-1">
      <button class="flex items-center" onClick={() => setGreeting(randomMessage())}>
        <span class="icon-[mingcute--refresh-2-line] text-2xl"></span>
      </button>
      <h3>{greeting}! Thank you for visiting!</h3>
    </div>
  );
}