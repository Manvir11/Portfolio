import type { DiffFileData } from './types'

export const diffFiles: DiffFileData[] = [
  {
    id: 'about',
    path: 'about.md',
    additions: 6,
    lines: [
      { content: '+ # Manvir Dhesi' },
      { content: '+ IB student at Turner Fenton Secondary School.' },
      { content: '+ Builder of autonomous robots and AI systems.' },
      { content: '+ Based in Brampton, ON.' },
      { content: '+ Open to research internships.' },
      { content: '+ Always shipping and learning.' },
    ],
  },
  {
    id: 'robot',
    path: 'projects/sidewalk-nav-robot.py',
    additions: 8,
    lines: [
      { content: '+ model = SegFormerB0(mIoU=0.92)  # Semantic sidewalk segmentation' },
      { content: '+ controller = ControlLoop(rate_hz=20, mcu="STM32")  # Real-time loop' },
      { content: '+ motors = HoverboardDrivers(custom_pwm=True)' },
      { content: '+ vision = OpenCVPipeline(camera="stereo", lane_tracking=True)' },
      { content: '+ for frame in vision.stream():' },
      { content: '+     path = model.predict(frame)' },
      { content: '+     controller.step(path, motors)' },
      { content: '+ reliability = 0.97  # 97% reliability across 5 km of sidewalk', withInlineComment: true },
    ],
  },
  {
    id: 'journal',
    path: 'projects/self-journal-llm.py',
    additions: 8,
    lines: [
      { content: '+ app = FastAPI()' },
      { content: '+ auth = FirebaseAuth()' },
      { content: '+ db = Firestore(client="multi-session-memory")' },
      { content: '+ llm = JournalEngine(mode="multi-turn", prompt_strategy="reflective")' },
      { content: '+ @app.post("/chat/{timeline}")' },
      { content: '+ def chat_with_self(user, timeline):' },
      { content: '+     context = db.load_sessions(user, timeline)' },
      { content: '+     return llm.respond(user_message=user.msg, context=context)' },
    ],
  },
  {
    id: 'drone',
    path: 'projects/self-driving-drone.py',
    additions: 4,
    draft: true,
    lines: [
      { tone: 'amber', content: '+ planner = DronePlanner(state_estimator="EKF")' },
      { tone: 'amber', content: '+ autopilot = FlightController(mode="autonomous")' },
      { tone: 'amber', content: '+ mission = planner.generate_route(goal="gps_waypoint")' },
      { tone: 'muted', content: '+ # TODO: still building this.' },
    ],
  },
]
