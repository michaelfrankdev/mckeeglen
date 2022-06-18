// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        id: "123",
        streetName: "Reidhaven Street",
        primary: {
          firstName: "Alex",
          lastName: "Smith",
          phoneNumber: "123-456-7890",
          emailAddress: "alex.smith@email.com"
        },
        secondary: {
          firstName: "Alice",
          lastName: "Smith",
          phoneNumber: "098-765-4321",
          emailAddress: "alice.smith@email.com"
        }
      },
      {
        id: "456",
        streetName: "Blue Pond Road",
        primary: {
          firstName: "Brenda",
          lastName: "Jones",
          phoneNumber: "123-456-7890",
          emailAddress: "brenda.jones@email.com"
        },
        secondary: {
          firstName: "Bob",
          lastName: "Jones",
          phoneNumber: "098-765-4321",
          emailAddress: "bob.jones@email.com"
        }
      },
      {
        id: "789",
        streetName: "Hampstead Pond Lane",
        primary: {
          firstName: "Conrad",
          lastName: "Brown",
          phoneNumber: "123-456-7890",
          emailAddress: "conrad.brown@email.com"
        },
        secondary: {
          firstName: "Cathy",
          lastName: "Brown",
          phoneNumber: "098-765-4321",
          emailAddress: "cathy.brown@email.com"
        }
      },
    ]
  )
}
