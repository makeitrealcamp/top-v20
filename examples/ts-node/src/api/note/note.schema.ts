import { object, boolean, string, TypeOf } from "zod";

const payload = {
  body: object({
    content: string({
      required_error: "Content is required",
    }),
    important: boolean({
      required_error: "Important is required",
    }),
  }),
};

const params = {
  params: object({
    noteId: string({
      required_error: "noteId is required",
    }),
  }),
};

export const createNoteSchema = object({
  ...payload,
});

export const updateNoteSchema = object({
  ...payload,
  ...params,
});

export const deleteNoteSchema = object({
  ...params,
});

export const getNoteSchema = object({
  ...params,
});

export type CreateNoteInput = TypeOf<typeof createNoteSchema>;
export type UpdateNoteInput = TypeOf<typeof updateNoteSchema>;
export type ReadNoteInput = TypeOf<typeof getNoteSchema>;
export type DeleteNoteInput = TypeOf<typeof deleteNoteSchema>;
