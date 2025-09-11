import { MessageDto, MessageWithSenderRecipient } from "@/types";
import { formatShortDateTime } from "./util";

export function mapMessageToDto(
  message: MessageWithSenderRecipient
): MessageDto {
  return {
    id: message.id,
    text: message.text,
    created: formatShortDateTime(message.created),
    dateRead: message.dateRead ? formatShortDateTime(message.dateRead) : null,
    senderId: message.sender?.userId ?? "",
    senderName: message.sender?.name ?? "",
    senderImage: message.sender?.image ?? "",
    recipientId: message.recipient?.userId ?? "",
    recipientName: message.recipient?.name ?? "",
    recipientImage: message.recipient?.image ?? "",
  };
}
