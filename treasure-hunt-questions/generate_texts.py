encoded_string = "dHJ5X3RvX2ZpZ3VyZV9vdXRfdGhlX2RlY29kaW5nX2FsZ29yaXRobV95b3VfdXNlZF90b19nZXRfdGhlX2ZpbmFsX2Fuc3dlcjop"
decoded_string = "try_to_figure_out_the_decoding_algorithm_you_used_to_get_the_final_answer:)"

t = 0
for character in encoded_string:
    t += 1
    f = open(f"Level1/{t}.txt", "w")
    f.write(character)