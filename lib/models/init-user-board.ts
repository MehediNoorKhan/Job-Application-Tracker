import { Board, Column} from ".";
import connectToDatabase from "../db";


const DEFAULT_COLUMNS = [
    {
      name: "Wish List",
      order: 0,
    },
    {
      name: "Applied",
      order: 1,
    },
    {
      name: "Interviewing",
      order: 2,
    },
    {
      name: "Offer",
      order: 3,
    },
    {
      name: "Rejected",
      order: 4,
    },
  ];

export async function initializeUserBoard(userId: string) {
  try{
    await connectToDatabase();
    const existingBoard = await Board.findOne({userId, name:"Job Tracker"});
    if(existingBoard){
      return existingBoard;
    }
   
const board = await Board.create({
  userId,
  name: "Job Tracker",
  columns:[]
});

const columns = await Promise.all(DEFAULT_COLUMNS.map(async (column) => {
  return await Column.create({
    boardId: board._id,
    name: column.name,
    order: column.order,
    jobApplications: []
  });
}));

board.columns = columns.map(column => column._id);
await board.save();

  }catch(error){
    console.error("Error initializing user board:", error);
    throw error;
  }
}