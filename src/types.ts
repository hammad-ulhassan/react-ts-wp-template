export type UserType = {
  id: String;
  username: String;
};

export type AuthPayloadType = {
  username: String;
  password: String;
};

export type Note = {
  id: String;
  content: String;
};

export type Call = {
  id: string; // "unique ID of call"
  direction: String; // "inbound" or "outbound" call
  from: String; // Caller's number
  to: String; // Callee's number
  duration: Number; // Duration of a call (in seconds)
  is_archived: Boolean; // Boolean that indicates if the call is archived or not
  call_type: String; // The type of the call, it can be a missed, answered or voicemail.
  via: String; // Aircall number used for the call.
  created_at: String; // When the call has been made.
  notes: Note[]; // Notes related to a given call
};

export type PaginatedCalls = {
  nodes: Call[];
  totalCount: Number;
  hasNextPage: Boolean;
};

export type AuthResponse = {
    access_token: String;
    user: UserType;
}
