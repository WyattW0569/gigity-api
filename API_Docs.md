# Gigity API Documentation
---
## Auth
### `POST /auth/login`
Authenticate a user and receive a JWT.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `email` | string | yes | The user's email address |
| `password` | string | yes | The user's plaintext password |

**Response**
```json
{
  "token": "<jwt>"
}
```

**JWT Payload**
| Field | Description |
|---|---|
| `user_id` | User's primary key |
| `email` | User's email |
| `username` | User's username |
| `pfp_url` | User's profile picture URL |
| `role` | User's role (`"user"` or `"admin"`) |
| `iat` | Issued-at timestamp (auto) |
| `exp` | Expiry timestamp - 7 days after issue (auto) |

---

## Users
### `GET /users`
Get all users.

**Response** - Array of user objects: `user_id`, `email`, `username`, `profile_picture_url`, `created_at`

---

### `GET /users/:id`
Get a single user by ID.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The user's `user_id` |

**Response** - Single user object.

---

### `GET /users/:id/followedBands`
Get all bands followed by a specific user.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The user's `user_id` |

**Response** - Array of band names.

---

### `POST /users`
Create a new user. Password is automatically hashed before storage.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `email` | string | yes | User's email (must be unique) |
| `username` | string | yes | User's display name |
| `password` | string | yes | Plaintext password (will be hashed) |
| `pfp_url` | string | no | Profile picture URL |

---

### `PATCH /users/update/pfp`
Update a user's profile picture.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | yes | The user's `user_id` |
| `pfp_url` | string | yes | New profile picture URL |

---

### `PATCH /users/update/username`
Update a user's username.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | yes | The user's `user_id` |
| `username` | string | yes | New username |

---

### `PATCH /users/update/password`
Update a user's password. New password is automatically hashed before storage.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | yes | The user's `user_id` |
| `password` | string | yes | New plaintext password (will be hashed) |

---

## Bands

### `GET /bands`
Get all bands.

**Response** - Array of band objects: `band_id`, `name`, `icon_link`, `created_at`

---

### `GET /bands/:id`
Get a single band by ID.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The band's `band_id` |

---

### `GET /bands/:id/playedWith`
Get all distinct bands that have shared a show lineup with this band.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The band's `band_id` |

**Response** - Array of `{ name, band_id }` objects.

---

### `GET /bands/:id/members`
Get all members of a band.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The band's `band_id` |

**Response** - Array of `{ user_id, username }` objects.

---

### `GET /bands/:id/followers`
Get all users following a band.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The band's `band_id` |

**Response** - Array of `{ username }` objects.

---

### `GET /bands/:id/shows`
Get all shows a band has played.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The band's `band_id` |

**Response** - Array of `{ show_name, date }` objects.

---

### `POST /bands`
Create a new band.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | yes | Band name |
| `icon_link` | string | no | Band icon/avatar URL |

---

### `PATCH /bands/update/pfp`
Update a band's icon/avatar.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | yes | The band's `band_id` |
| `icon_link` | string | yes | New icon URL |

---

### `PATCH /bands/update/name`
Update a band's name.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | yes | The band's `band_id` |
| `name` | string | yes | New band name |

---

## Shows

### `GET /shows`
Get all shows.

**Response** - Array of show objects.

---

### `GET /shows/:id`
Get a single show by ID.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The show's `show_id` |

---

### `GET /shows/date/:date`
Get all shows on a specific date.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `date` | string | Date in `YYYY-MM-DD` format |

---

### `GET /shows/:id/lineup`
Get the full band lineup for a show.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The show's `show_id` |

---

### `GET /shows/:id/venue`
Get the venue for a show.

**URL Params**
| Param | Type | Description |
|---|---|---|
| `id` | integer | The show's `show_id` |

---

### `POST /shows`
Create a new show and its lineup.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `show_name` | string | yes | Name of the show |
| `date` | string | yes | Show date (`YYYY-MM-DD`) |
| `venue_id` | integer | yes | ID of the venue |
| `ticket_link` | string | no | URL to purchase tickets |
| `bands` | integer[] | yes | Array of `band_id`s on the lineup |

**Response**
```json
{ "show_id": 42 }
```

---

### `PATCH /shows/update/name`
Update a show's name.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | yes | The show's `show_id` |
| `show_name` | string | yes | New show name |

---

### `PATCH /shows/update/date`
Update a show's date.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | yes | The show's `show_id` |
| `date` | string | yes | New date (`YYYY-MM-DD`) |

---

### `PATCH /shows/update/venue`
Update the venue for a show.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | yes | The show's `show_id` |
| `venue_id` | integer | yes | New venue's `venue_id` |

---

### `PATCH /shows/update/ticket-link`
Update the ticket link for a show.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | yes | The show's `show_id` |
| `ticket_link` | string | yes | New ticket URL |

---

## Venues

### `GET /venues`
Get all venues
### `GET /venues/:id`
Get venue by ID
### `GET /venues/:id/shows`
Get all shows at a venue

### `POST /venues`
Create a new venue.

**Request Body**
| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | yes | Venue name |
| `address` | string | yes | Venue address |
| `booking_link` | string | no | URL to book the venue |

### `PATCH /venues/update/name`
**Request Body**: `{ id, name }`

### `PATCH /venues/update/booking-link`
**Request Body**: `{ id, booking_link }`
