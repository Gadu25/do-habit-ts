import Overlay from "@/layouts/Overlay";
import { useSelector, useDispatch } from "react-redux";
import { startSession } from "@/features/habit/sessionSlice";
import type { RootState } from "@/app/store";

function HabitStarter () {
  // const session = useSelector((state: RootState) => state.habits.value)

  return (
    <>
      <Overlay>
        <div className="starter-modal">
          <h3>Hello you want to start the task?</h3>
          {/* <button onClick={() => }>yes</button> */}
          <button>no</button>
        </div>
      </Overlay>
    </>
  )
}

export default HabitStarter;