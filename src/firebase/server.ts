import type { ServiceAccount } from 'firebase-admin';
import { initializeApp, cert, getApps } from 'firebase-admin/app';

const activeApps = getApps();
const serviceAccount = {
    type: 'service_account',
    project_id: 'portfolio-b0697',
    private_key_id: '44e326139401a75a79978ae196a517faf4a25381',
    private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDRy4/K67F7A7Tx\nvhpOMc+MTOqclaCpbevq6sJrH2xtI+LNem86UTrIHDQYENMe7/Cydf98OAap1uqN\nQEZYBTEtT+S8aS3Lx+LZumLt95w9zbpDzCR42VDbwhl1KTSO0lHx4Gjc2QcFXiUi\n0u/kdXtSjTHzG6ebow4lfWgmz2Mf/aKyMFomjclBvuA8MdDeQCMxOtr/Bd5Seqad\nZ1o1xJaGRbJfnhIXSCQNse6vNJChUdPE9ZamtYgPpolbnZ92NMH1hbhN/JI45qgZ\nDYzsnSnIanM1VFMiWQeqkxnzQjmbIb4FAZMwgKIlJhijITmEMAyf+0lCKTZaDaJY\nm4z2H26JAgMBAAECggEACkyJME++PHj73MM1lOGem/dZrBqvUqn2AygHp80Y3Em+\n9FHenHkI3vJ9fzHyP0pNoWEoC9/POe62QH1nhqIonh4WL0aljCOxp/kdqqt1ZNZQ\n3suqfbFDZipi6AzACwPZqHtZAoB39wQ+Y/WBd9Bpn62VRmc05O/N/bqojoEvT05k\nNnr+/AcyYCZ8WSPc1kCk2OmvaVPy1GMq0seRRWMRr9ZS9XoWymh8iVHtBeFnGutH\nTWS0+DdxPMC2Jz0wwnqxFk6Y7PmFLQuqbv/7w44FzH1dPxD1y3hg6mr5Ao1IrHPd\nrnXCPnaaVJM37NysU0WNRe8S519JWV9SEGS3NspGVQKBgQDvauA0Dd/Az2uvI86j\naCJKojzE7WbJ0eQMGECZZLSV5usbQBS3mJ2k8ZlUVCCbEnHjowYfI6LIC06QF6Xz\n1/hF36ryiREnNHhjRU3CFpQGZr28fUxdk5c9xPTQz0/v34tEvbJLXDgyayBmoo2n\nkeYh/D7AUEyD9aUgm/Ld1ool7QKBgQDgU3Nw/aGRYXJxhJZX9ou5wpJml/0ATeba\nqJvlzQl4wyj0RuaHobcDc6rEgQoNwwr35Z6sX4gpLKucQDhcnEVP0vXeLAIai7vp\nd2TIJcNThWOb45mGj8H6DbsizhsM3KqTHPuOO2EjyCRo49LVhsxKSP9yfXlqEcKb\nLsLvGRlXjQKBgG+CW8Ji4+Atu33rM4cwLSiNv7gIymMdexWXBh9rpCBdWQtsIToR\nvvrf/AYm2LjhMmJPv74pHtwFSCYcnZKg+GWy8y/bXz3fVmMGGF1ZnsAMgjqUMUk0\nQLDoVw4aQKT8fSUbJTusTBBPjNvAwjFV5tXVYnS38atUcgBqIgfosJdRAoGADHkX\nZiT0It1EO8OfiGyRAFctRL8WtjmeqHHPmUt5R1myoUJ/9vKq9mosCJkUMgeySG5g\nED2PmJp/QETh3WRjBjk4qo3P4CH85NJarDZNUguMqlJRawX7RygUS68iGej7Iwrt\ngc8Ta6XpQFvKkUzZdxfv/DG12ov6Qh6rgBfpLNECgYB5HJ8bUAqpzfC2s1pYagNN\nsmhsxM/XjLn7jWDnUDOG2g/Adi796qneHJlvCOJCy/OkYkbXvWqlspYJejiNgStQ\nJRn5WdG0ry88xIVRQF1P9yOm8wsrvQKv6WYQyKYMOKW3zC2jE2zZBIo38VhsLiQm\nFpeSJbmEjWppo+G2WhTviQ==\n-----END PRIVATE KEY-----\n',
    client_email:
        'firebase-adminsdk-7nk7a@portfolio-b0697.iam.gserviceaccount.com',
    client_id: '110878111789730664236',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7nk7a%40portfolio-b0697.iam.gserviceaccount.com',
    universe_domain: 'googleapis.com'
};

export const app =
    activeApps.length === 0
        ? initializeApp({
              credential: cert(serviceAccount as ServiceAccount)
          })
        : activeApps[0];
