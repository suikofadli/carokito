<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'Kolom ini harus diterima.',
    'accepted_if' => 'Kolom ini harus diterima ketika :other adalah :value.',
    'active_url' => 'Kolom ini harus berupa URL yang valid.',
    'after' => 'Kolom ini harus berupa tanggal setelah :date.',
    'after_or_equal' => 'Kolom ini harus berupa tanggal setelah atau sama dengan :date.',
    'alpha' => 'Kolom ini hanya boleh berisi huruf.',
    'alpha_dash' => 'Kolom ini hanya boleh berisi huruf, angka, strip, dan garis bawah.',
    'alpha_num' => 'Kolom ini hanya boleh berisi huruf dan angka.',
    'any_of' => 'Kolom ini tidak valid.',
    'array' => 'Kolom ini harus berupa array.',
    'ascii' => 'Kolom ini hanya boleh berisi karakter alfanumerik satu byte dan simbol.',
    'before' => 'Kolom ini harus berupa tanggal sebelum :date.',
    'before_or_equal' => 'Kolom ini harus berupa tanggal sebelum atau sama dengan :date.',
    'between' => [
        'array' => 'Kolom ini harus memiliki antara :min dan :max item.',
        'file' => 'Kolom ini harus antara :min dan :max kilobyte.',
        'numeric' => 'Kolom ini harus antara :min dan :max.',
        'string' => 'Kolom ini harus antara :min dan :max karakter.',
    ],
    'boolean' => 'Kolom ini harus bernilai benar atau salah.',
    'can' => 'Kolom ini mengandung nilai yang tidak diizinkan.',
    'confirmed' => 'Konfirmasi kolom ini tidak cocok.',
    'contains' => 'Kolom ini kehilangan nilai yang diperlukan.',
    'current_password' => 'Kata sandi salah.',
    'date' => 'Kolom ini harus berupa tanggal yang valid.',
    'date_equals' => 'Kolom ini harus berupa tanggal yang sama dengan :date.',
    'date_format' => 'Kolom ini harus sesuai format :format.',
    'decimal' => 'Kolom ini harus memiliki :decimal angka di belakang koma.',
    'declined' => 'Kolom ini harus ditolak.',
    'declined_if' => 'Kolom ini harus ditolak ketika :other adalah :value.',
    'different' => 'Kolom ini dan :other harus berbeda.',
    'digits' => 'Kolom ini harus :digits digit.',
    'digits_between' => 'Kolom ini harus antara :min dan :max digit.',
    'dimensions' => 'Kolom ini memiliki dimensi gambar yang tidak valid.',
    'distinct' => 'Kolom ini memiliki nilai duplikat.',
    'doesnt_end_with' => 'Kolom ini tidak boleh diakhiri dengan salah satu dari: :values.',
    'doesnt_start_with' => 'Kolom ini tidak boleh diawali dengan salah satu dari: :values.',
    'email' => 'Kolom ini harus berupa alamat email yang valid.',
    'ends_with' => 'Kolom ini harus diakhiri dengan salah satu dari: :values.',
    'enum' => 'ini yang dipilih tidak valid.',
    'exists' => 'ini yang dipilih tidak valid.',
    'extensions' => 'Kolom ini harus memiliki salah satu ekstensi berikut: :values.',
    'file' => 'Kolom ini harus berupa berkas.',
    'filled' => 'Kolom ini harus memiliki nilai.',
    'gt' => [
        'array' => 'Kolom ini harus memiliki lebih dari :value item.',
        'file' => 'Kolom ini harus lebih besar dari :value kilobyte.',
        'numeric' => 'Kolom ini harus lebih besar dari :value.',
        'string' => 'Kolom ini harus lebih besar dari :value karakter.',
    ],
    'gte' => [
        'array' => 'Kolom ini harus memiliki :value item atau lebih.',
        'file' => 'Kolom ini harus lebih besar atau sama dengan :value kilobyte.',
        'numeric' => 'Kolom ini harus lebih besar atau sama dengan :value.',
        'string' => 'Kolom ini harus lebih besar atau sama dengan :value karakter.',
    ],
    'hex_color' => 'Kolom ini harus berupa warna heksadesimal yang valid.',
    'image' => 'Kolom ini harus berupa gambar.',
    'in' => 'ini yang dipilih tidak valid.',
    'in_array' => 'Kolom ini harus ada di :other.',
    'integer' => 'Kolom ini harus berupa bilangan bulat.',
    'ip' => 'Kolom ini harus berupa alamat IP yang valid.',
    'ipv4' => 'Kolom ini harus berupa alamat IPv4 yang valid.',
    'ipv6' => 'Kolom ini harus berupa alamat IPv6 yang valid.',
    'json' => 'Kolom ini harus berupa string JSON yang valid.',
    'list' => 'Kolom ini harus berupa daftar.',
    'lowercase' => 'Kolom ini harus berupa huruf kecil.',
    'lt' => [
        'array' => 'Kolom ini harus memiliki kurang dari :value item.',
        'file' => 'Kolom ini harus kurang dari :value kilobyte.',
        'numeric' => 'Kolom ini harus kurang dari :value.',
        'string' => 'Kolom ini harus kurang dari :value karakter.',
    ],
    'lte' => [
        'array' => 'Kolom ini tidak boleh memiliki lebih dari :value item.',
        'file' => 'Kolom ini harus kurang atau sama dengan :value kilobyte.',
        'numeric' => 'Kolom ini harus kurang atau sama dengan :value.',
        'string' => 'Kolom ini harus kurang atau sama dengan :value karakter.',
    ],
    'mac_address' => 'Kolom ini harus berupa alamat MAC yang valid.',
    'max' => [
        'array' => 'Kolom ini tidak boleh memiliki lebih dari :max item.',
        'file' => 'Kolom ini tidak boleh lebih dari :max kilobyte.',
        'numeric' => 'Kolom ini tidak boleh lebih dari :max.',
        'string' => 'Kolom ini tidak boleh lebih dari :max karakter.',
    ],
    'max_digits' => 'Kolom ini tidak boleh memiliki lebih dari :max digit.',
    'mimes' => 'Kolom ini harus berupa berkas bertipe: :values.',
    'mimetypes' => 'Kolom ini harus berupa berkas bertipe: :values.',
    'min' => [
        'array' => 'Kolom ini harus memiliki minimal :min item.',
        'file' => 'Kolom ini minimal harus :min kilobyte.',
        'numeric' => 'Kolom ini minimal harus :min.',
        'string' => 'Kolom ini minimal harus :min karakter.',
    ],
    'min_digits' => 'Kolom ini harus memiliki minimal :min digit.',
    'missing' => 'Kolom ini harus tidak ada.',
    'missing_if' => 'Kolom ini harus tidak ada ketika :other adalah :value.',
    'missing_unless' => 'Kolom ini harus tidak ada kecuali :other adalah :value.',
    'missing_with' => 'Kolom ini harus tidak ada ketika :values ada.',
    'missing_with_all' => 'Kolom ini harus tidak ada ketika :values ada.',
    'multiple_of' => 'Kolom ini harus kelipatan dari :value.',
    'not_in' => 'ini yang dipilih tidak valid.',
    'not_regex' => 'Format kolom ini tidak valid.',
    'numeric' => 'Kolom ini harus berupa angka.',
    'password' => [
        'letters' => 'Kolom ini harus mengandung minimal satu huruf.',
        'mixed' => 'Kolom ini harus mengandung minimal satu huruf besar dan satu huruf kecil.',
        'numbers' => 'Kolom ini harus mengandung minimal satu angka.',
        'symbols' => 'Kolom ini harus mengandung minimal satu simbol.',
        'uncompromised' => 'ini yang diberikan telah muncul dalam kebocoran data. Silakan pilih ini yang berbeda.',
    ],
    'present' => 'Kolom ini harus ada.',
    'present_if' => 'Kolom ini harus ada ketika :other adalah :value.',
    'present_unless' => 'Kolom ini harus ada kecuali :other adalah :value.',
    'present_with' => 'Kolom ini harus ada ketika :values ada.',
    'present_with_all' => 'Kolom ini harus ada ketika :values ada.',
    'prohibited' => 'Kolom ini dilarang.',
    'prohibited_if' => 'Kolom ini dilarang ketika :other adalah :value.',
    'prohibited_if_accepted' => 'Kolom ini dilarang ketika :other diterima.',
    'prohibited_if_declined' => 'Kolom ini dilarang ketika :other ditolak.',
    'prohibited_unless' => 'Kolom ini dilarang kecuali :other ada di :values.',
    'prohibits' => 'Kolom ini melarang :other untuk ada.',
    'regex' => 'Format kolom ini tidak valid.',
    'required' => 'Kolom ini wajib diisi.',
    'required_array_keys' => 'Kolom ini harus berisi entri untuk: :values.',
    'required_if' => 'Kolom ini wajib diisi ketika :other adalah :value.',
    'required_if_accepted' => 'Kolom ini wajib diisi ketika :other diterima.',
    'required_if_declined' => 'Kolom ini wajib diisi ketika :other ditolak.',
    'required_unless' => 'Kolom ini wajib diisi kecuali :other ada di :values.',
    'required_with' => 'Kolom ini wajib diisi ketika :values ada.',
    'required_with_all' => 'Kolom ini wajib diisi ketika :values ada.',
    'required_without' => 'Kolom ini wajib diisi ketika :values tidak ada.',
    'required_without_all' => 'Kolom ini wajib diisi ketika tidak ada satupun dari :values yang ada.',
    'same' => 'Kolom ini dan :other harus sama.',
    'size' => [
        'array' => 'Kolom ini harus berisi :size item.',
        'file' => 'Kolom ini harus berukuran :size kilobyte.',
        'numeric' => 'Kolom ini harus berukuran :size.',
        'string' => 'Kolom ini harus berukuran :size karakter.',
    ],
    'starts_with' => 'Kolom ini harus diawali dengan salah satu dari: :values.',
    'string' => 'Kolom ini harus berupa string.',
    'timezone' => 'Kolom ini harus berupa zona waktu yang valid.',
    'unique' => 'ini sudah digunakan.',
    'uploaded' => 'ini gagal diunggah.',
    'uppercase' => 'Kolom ini harus berupa huruf besar.',
    'url' => 'Kolom ini harus berupa URL yang valid.',
    'ulid' => 'Kolom ini harus berupa ULID yang valid.',
    'uuid' => 'Kolom ini harus berupa UUID yang valid.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'pesan-khusus',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
