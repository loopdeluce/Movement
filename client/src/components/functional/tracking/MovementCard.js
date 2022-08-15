function MovementCard({
  categoryMovements,
  selectedMovement,
  handleSelection,
}) {
  function handleClick(e) {
    handleSelection(e.target.textContent);
    document.documentElement.scrollTop = 0;
  }

  const movementTypeItems = categoryMovements.map((movement, index) => {
    const selected = movement === selectedMovement;
    return (
      <li
        class={`flow-root rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
          selected ? "bg-gray-100" : null
        }`}
        onClick={handleClick}
      >
        <p
          key={index}
          class={`block px-4 text-lg font-medium float-left ${
            selected ? "text-jungle bg-gray-100" : "text-gray-700"
          }`}
        >
          {movement}
        </p>
        {selected ? (
          <span class="text-jungle float-right  px-3"> ✔ </span>
        ) : null}
      </li>
    );
  });

  return <>{movementTypeItems}</>;
}

export default MovementCard;
