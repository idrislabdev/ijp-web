import * as React from 'react';

interface EmailTemplateProps {
  obj: any;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  obj,
}) => (
  <div>
    <table>
      <tbody>
        <tr><td>Nama Pelamar</td><td>:</td><td>{obj.name}</td></tr>
        <tr><td>Email</td><td>:</td><td>{obj.email}</td></tr>
        <tr><td>Nomor Telepon</td><td>:</td><td>{obj.phone}</td></tr>
        <tr><td>Alamat</td><td>:</td><td>{obj.address}</td></tr>
        <tr><td>Kota</td><td>:</td><td>{obj.city}</td></tr>
        <tr><td>Provinsi</td><td>:</td><td>{obj.province}</td></tr>
      </tbody>
    </table>
  </div>
);
