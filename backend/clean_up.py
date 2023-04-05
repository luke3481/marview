import csv
import random

with open('marine_cadastre_sample_data.csv') as csv_file, open('test_data2.js', 'w') as output_file:
    csv_reader = csv.reader(csv_file)
    next(csv_reader)  # skip the header row
    output_file.write('export const testPoints = [\n')
    counter = 0
    for row in csv_reader:
        # if counter >= 10000:
        #     break
        lat = float(row[0])
        lon = float(row[1])
        # random_num = random.randint(1, 1000)
        output_file.write('\t[{0}, {1}, "{2}"],\n'.format(lat, lon, "1"))
        counter += 1
    output_file.write('];\n')
