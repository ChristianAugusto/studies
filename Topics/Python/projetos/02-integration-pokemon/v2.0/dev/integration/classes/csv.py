import csv



NEWLINE = ""
CSV_WRITER = {
    "delimiter": "|"
}

class CSV:
    def __init__(self, build_dir, now, header):
        name = self.generate_local_name(now)

        self.local_name = name
        self.local_path = f'{build_dir}/{name}'

        self.create_file(header)


    def generate_local_name(self, now):
        return f"{now.strftime('%Y-%m-%d-%H:%M:%S.%f')}.csv"


    def generate_upload_name(self, mask, now):
        now_datetime = now.strftime('%Y%m%d%H%M%S')
        now_date = now.strftime('%Y%m%d')

        return f"{mask.format(date=str(now_date), datetime=str(now_datetime))}.csv"


    def create_file(self, header):
        if not header:
            raise Exception('No header to write')

        with open(self.local_path, 'w', newline=NEWLINE) as csvFile:
            csv_writer = csv.writer(csvFile, **CSV_WRITER)
            csv_writer.writerow(header)


    def write_rows(self, rows):
        if not rows:
            raise Exception('No rows to write')

        with open(self.local_path, 'a', newline=NEWLINE) as csvFile:
            csv_writer = csv.writer(csvFile, **CSV_WRITER)
            csv_writer.writerows(rows)
