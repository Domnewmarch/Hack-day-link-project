import LinkedinLink from './quick contact/linkedin'
import MailLink from './quick contact/mailLink'
import PhoneLink from './quick contact/phoneLink'

export default function BioContact() {
  return (
    <ul className="my-4 flex space-x-4">
      <PhoneLink />
      <MailLink />
      <LinkedinLink />
    </ul>
  )
}
