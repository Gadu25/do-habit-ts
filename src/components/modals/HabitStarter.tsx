import Overlay from "@/layouts/Overlay";

function HabitStarter () {
  return (
    <>
      <Overlay>
        <div className="starter-modal">
          <h3>Hello you want to start the task?</h3>
          <button>yes</button>
          <button>no</button>
        </div>
      </Overlay>
    </>
  )
}

export default HabitStarter;