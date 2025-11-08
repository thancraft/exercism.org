export function createVisitor(name, age, ticketId) {
  return {name:name, age:age, ticketId: ticketId}
}

export function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
}

export function ticketStatus(tickets, ticketId) {
  if ((tickets?.ticketId === undefined) && ( tickets[ticketId] === undefined)) {
    return "unknown ticket id";
  }else if(( tickets?.ticketId === undefined) && ( tickets[ticketId] === null)){
    return "not sold"
  }else{
    return "sold to " + tickets[ticketId]
  }
}

export function simpleTicketStatus(tickets, ticketId) {
   if( !tickets.hasOwnProperty(ticketId) || tickets[ticketId] === null){
    return 'invalid ticket !!!'
  }else{
    return tickets[ticketId]
  }
}

export function gtcVersion(visitor) {
  if (visitor["gtc"] !== null && visitor["gtc"] !== undefined ){
    return visitor["gtc"]["version"]
  }
}
